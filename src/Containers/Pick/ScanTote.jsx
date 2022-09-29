import ScanTote from '../../Components/Pick/ScanTote/ScanTote';
import {Modal, Typography, Table} from 'operational-component-lib';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { triggerEventAction } from '../../../redux/actions/eventActions';

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


    let header=[
    {
      active: true,
      description: 'Scan a tote',
      label: 'Dock Tote',
      step: 1
    },
    {
      active: false,
      description: 'Place Entity into the Tote and scan 11 more',
      label: 'Scan Entity and confirm',
      step: 2
    }
  ]


    const onConfirmHandler = () => {
        alert('ss')
        setShowModal(true)
    }

    

    return (
        <>
        <ScanTote header={header}/>
        </>
            
    )
}

export default ScanToteContainer;