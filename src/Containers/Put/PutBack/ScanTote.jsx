import { APP_SOURCE, EVENT_CLOSE_PALLET_MODAL, EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import {Modal, Table, Typography} from 'operational-component-lib';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ScanTote from '../../../Components/Put/ScanTote/ScanTote';
import { UD_PUT_FRONT_MISSIN } from '../../../utils/screenIds';
import { triggerEventAction } from '../../../redux/actions/eventActions';

function ScanToteContainer({currentDetails, ...props}) {
    const [showModal, setShowModal] = useState(false);
    const [missingItems, setMissingItemsList] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const { data } = useSelector( (state) => {
        return state.mainStateReducer
    });
    const { success, error, isFetching } = useSelector( state => state.serverEvents )
    const dispatch = useDispatch()
    const subHeader = "Tote should be empty";
    const modalLabels = [
        "The pallet is not empty yet. Please make sure all the entity(ies) are put away before closing the pallet.",
        "By confirming system will mark remaining entity(ies) as missing.",
        "Remaining Entity(ies)",
    ]
    const tableColumns = [
        { id: 'type', label: 'Type' },
        { id: 'product_sku', label: 'Product SKU' },
        { id: 'product_barcode', label: 'Barcode' },
        { id: 'quantity', label: `Quantity (${totalQuantity})` },
    ];

    useEffect(()=>{
        if(success && !error && !isFetching && showModal) setShowModal(false)
    },[success, error, isFetching])

    useEffect(()=>{
        if(data.state_data){
            const { state_data : { missing_items, screen_id } } = data;
            if(missing_items) {
                setMissingItemsList(missing_items)
                const totalQuantity = missing_items.reduce((prev, current)=> prev + (current.totalQuantity || 0), 0);
                setTotalQuantity(totalQuantity);
            }
            if(screen_id === UD_PUT_FRONT_MISSIN) setShowModal(true)
        }
    },[data])

    const handleCloseTote = () => {
        const {state_data : { tote_id, missing_items } } = data;
        let toteId = tote_id;
        if(!toteId || toteId === undefined) toteId = currentDetails['TOTE ID']
        const eventData = {
            event_name : EVENT_TYPE_CANCEL_SCAN,
            event_data : {
                barcode: toteId
            },
            source : APP_SOURCE
        }
        setMissingItemsList(missing_items)
        dispatch(triggerEventAction(eventData))
    }

    const handleCancelException = (close_value) => {
        const {state_data : { tote_id } } = data;
        const eventData = {
            event_name : EVENT_CLOSE_PALLET_MODAL,
            event_data : {
                close_value : close_value || false,
                barcode: tote_id
            },
            source : APP_SOURCE
        }
        dispatch(triggerEventAction(eventData));
    }

    return (
        <>
        <ScanTote 
            {...props}  
            subHeader={subHeader}
            handleShowModal={() => setShowModal(true)} 
            handleCloseTote={handleCloseTote}
            missingItems={missingItems}
            currentDetails = {currentDetails}
        />
        <Modal showModal={showModal} modalType='info' title='Close Pallet' buttonText='Confirm'
            onCloseHandler={() => handleCancelException(false)} onConfirmHandler={ () => {handleCancelException(true)} } >
            <Typography type='info' variant='h3' style={{ mb: '0.6em' }} >
                {modalLabels[0]}
            </Typography>
            <Typography type='info' style={{ fontSize: '24px' ,mb: '0.6em', fontWeight: 'bold' }} >
                {modalLabels[1]}
            </Typography>
            <Typography type='info' variant='h3' style={{ mb: '0.6em' }} >
                {modalLabels[2]}
            </Typography>
            <Table columns={tableColumns} itemList={missingItems} />
        </Modal>
        </>
            
    )
}

export default ScanToteContainer;