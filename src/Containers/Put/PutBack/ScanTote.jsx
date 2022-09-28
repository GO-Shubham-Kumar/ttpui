import ScanTote from '../../../Components/Put/ScanTote/ScanTote';
import {Modal, Typography, Table} from 'operational-component-lib';
import { useState } from 'react';
import { EVENT_TYPE_CANCEL_SCAN } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { triggerEventAction } from '../../../redux/actions/eventActions';
function ScanToteContainer({...props}) {
    const [showModal, setShowModal] = useState(false);
    const { data } = useSelector( state => state.mainStateReducer);
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
    const tableItemList = [
        {
            "type": "Items",
            "product_barcode": "DI112K001-O11",
            "product_sku": "MLKJ8771",
            "quantity": 2
        },
        {
            "type": "Items",
            "product_barcode": "JFK178O01-O29",
            "product_sku": "MLKJ8772",
            "quantity": 1
        },
        {
            "type": "Items",
            "product_barcode": "MLK178PI8-347",
            "product_sku": "MLKJ8773",
            "quantity": 2
        },
        {
            "type": "Items",
            "product_barcode": "JFK178O01-O30",
            "product_sku": "MLKJ8774",
            "quantity": 1
        }
    ]

    const onConfirmHandler = () => {
        alert('ss')
        setShowModal(true)
    }

    const handleCloseTote = () => {
        const {state_data : { item_uid } } = data;
        console.log('itemuid', item_uid)
        const eventData = {
              event_name : EVENT_TYPE_CANCEL_SCAN,
              event_data : {
                barcode: item_uid
          }
        }
        console.log('eventData', eventData);
        // dispatch(triggerEventAction(eventData))
      }

    return (
        <>
        <ScanTote {...props}  subHeader={subHeader}
            handleShowModal={() => setShowModal(true)} 
            handleCloseTote={handleCloseTote}/>
        <Modal showModal={showModal} modalType='info' title='Close Pallet' buttonText='Confirm'
            onCloseHandler={() => setShowModal(false)} onConfirmHandler={onConfirmHandler} >
            <Typography type='info' variant='h3' style={{ mb: '0.6em' }} >
                {modalLabels[0]}
            </Typography>
            <Typography type='info' variant='h3' style={{ mb: '0.6em', fontWeight: 'bold' }} >
                {modalLabels[1]}
            </Typography>
            <Typography type='info' variant='h3' style={{ mb: '0.6em' }} >
                {modalLabels[2]}
            </Typography>
            <Table columns={tableColumns} itemList={tableItemList} />
        </Modal>
        </>
            
    )
}

export default ScanToteContainer;