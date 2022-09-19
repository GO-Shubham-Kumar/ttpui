import PlaceEntity from "./../../Components/PlaceEntity/PlaceEntity"

function PlaceEntityContainer(){

    let header = [
        {
          active: false,
          description: "Scan the tote to continue",
          label: "Scan Tote",
          step: 1,
        },
        {
          active: true,
          description: "Place Entity into the Tote and Scan Tote to close",
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
        skuId: 123,
        'tote ID': 99
      }

      let palletId="dummypalletID"
      let toteId="dummyToteID"

      let KQenteyqty=3
      let KQtotalEntities=20 
      let actualqty = KQtotalEntities-KQenteyqty

      let prdtinfo=[
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
      ]


    return <PlaceEntity header = {header} details ={binDetails} palletId={palletId} actualqty={actualqty}  toteId={toteId}  qty={KQenteyqty} totalEntities={KQtotalEntities}  prdtinfo={prdtinfo} />
}

export default PlaceEntityContainer;