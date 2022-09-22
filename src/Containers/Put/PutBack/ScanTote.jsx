import ScanTote from '../../../Components/Put/ScanTote/ScanTote';

function ScanToteContainer({...props}) {

    const subHeader = "Tote Should Be Empty";
    const binDetails = {
        'SKU ID': '--',
        'SKU Qty': '--',
        'TOTE ID': '--',
        'Product Barcode': '--',
    }
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

    return <ScanTote {...props}  subHeader={subHeader} binDetails={binDetails}
        modalLabels={modalLabels} tableColumns={tableColumns} tableItemList={tableItemList} />
}

export default ScanToteContainer;