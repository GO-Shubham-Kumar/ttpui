import ScanTote from '../../../Components/Put/ScanTote/ScanTote';
import {Modal, Typography, Table} from 'operational-component-lib';
import { useEffect, useState } from 'react';
import { APP_SOURCE, EVENT_CLOSE_PALLET_MODAL, EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { triggerEventAction } from '../../../redux/actions/eventActions';
import { UD_PUT_FRONT_MISSIN } from '../../../utils/screenIds';
function ScanToteContainer({currentDetails, ...props}) {
    const [showModal, setShowModal] = useState(false);
    const [missingItems, setMissingItemsList] = useState([]);
    const { data } = useSelector( (state) => {
        console.log('new redux state',state )
        return state.mainStateReducer
    });
    const { success, error, isFetching } = useSelector( state => state.serverEvents )
    const dispatch = useDispatch()
    const subHeader = "Tote Should Be Empty";
    const modalLabels = [
        "The pallet is not empty yet. Please make sure all the entity(ies) are put away before closing the pallet.",
        "By confirming system will mark remaining entity(ies) as missing.",
        "Remaining Entity(ies)",
    ]
    const tableColumns = [
        { id: 'type', label: 'Type' },
        { id: 'product_sku', label: 'Product SKU' },
        { id: 'product_barcode', label: 'Barcode' },
        { id: 'quantity', label: 'Quantity' },
    ];

    useEffect(()=>{
        if(success && !error && !isFetching && showModal) setShowModal(false)
    },[success, error, isFetching])

    useEffect(()=>{
        if(data.state_data){
            const { state_data : { missing_items, screen_id } } = data;
            if(missing_items) setMissingItemsList(missing_items)
            if(screen_id === UD_PUT_FRONT_MISSIN) setShowModal(true)
        }
    },[data])

    const handleCloseTote = () => {
        const {state_data : { tote_id } } = data;
        console.log('tote_id', tote_id);
        const eventData = {
            event_name : EVENT_TYPE_CANCEL_SCAN,
            event_data : {
                barcode: tote_id
            },
            source : APP_SOURCE
        }
        console.log('eventData', eventData);
        dispatch(triggerEventAction(eventData))
    }

    const handleCancelException = (close_value) => {
        const {state_data : { tote_id } } = data;
        console.log('tote_id', tote_id);
        const eventData = {
            event_name : EVENT_CLOSE_PALLET_MODAL,
            event_data : {
                close_value : close_value || false,
                barcode: tote_id
            },
            source : APP_SOURCE
        }
        console.log('eventData', eventData);
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
        />
        <Modal showModal={showModal} modalType='info' title='Close Pallet' buttonText='Confirm'
            onCloseHandler={() => handleCancelException(true)} onConfirmHandler={ () => {handleCancelException(false)} } >
            <Typography type='info' variant='h3' style={{ mb: '0.6em' }} >
                {modalLabels[0]}
            </Typography>
            <Typography type='info' variant='h3' style={{ mb: '0.6em', fontWeight: 'bold' }} >
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