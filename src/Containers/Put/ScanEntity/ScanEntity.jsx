import ScanEntity from './../../../Components/Put/ScanEntity/ScanEntity';

function ScanEntityContainer(){

    let header = [
        {
            active: false,
            description: "Scan the tote to continue",
            label: "Scan Tote",
            step: 1,
          },
          {
            active: true,
            description: "Place Entity from Pallet",
            label: "Scan Entity",
            step: 2,
          },
          {
            active: false,
            description: "Finished",
            label: "Finish",
            step: 3,
          },
      ]

      let binDetails = {
        'sku qty': 43,
        'sku Id': 123,
        'tote ID': 99
      }

      let palletId="dummypalletID"
      let toteId="dummyToteID"


    return <ScanEntity header = {header} details ={binDetails} palletId={palletId}  toteId={toteId}   />
}

export default ScanEntityContainer;