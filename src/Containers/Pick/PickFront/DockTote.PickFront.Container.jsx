import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import DockTotePickFront from '../../../Components/Pick/PickFront/DockTote.PickFront'
import { mapLegendsData } from '../../../utils/helpers/commonHelpers'

/*
  Screen IDs.
  PICK_FRONT_DOCK_TOTE: pick_front_dock_tote
*/

const DockTotePickFrontContainer = ({ data, ...props }) => {
  const [cancelButtonEnable, setCancelButtonEnable] = useState(false)
  const [legend, setLegend] = useState([])
  const { success, error, isFetching } = useSelector((state) => state.serverEvents)
  const dispatch = useDispatch()
  const subHeader = ''

  useEffect(() => {
    if (data.state_data) {
      const {
        state_data: { cancel_scan_enabled, legends },
      } = data

      setCancelButtonEnable(cancel_scan_enabled)

      if (legends) {
        let legendsData = Object.assign([], legends)
        legendsData = mapLegendsData(legendsData)
        setLegend(legendsData)
      }
    }
  }, [data])

  return (
    <DockTotePickFront
      subHeader={subHeader}
      legends={legend}
      cancelButtonEnable={cancelButtonEnable}
      {...props}
    />
  )
}

export default DockTotePickFrontContainer
