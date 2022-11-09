import React, { useEffect, useState } from 'react'

import WaitingForMSU from '../../../Components/Pick/PickFront/WaitingForMSU.PickFront'
import { mapLegendsData } from '../../../utils/helpers/commonHelpers'
import { useSelector } from 'react-redux'

/*
  Screen IDs.
  PICK_FRONT_WAITING_FOR_MSU: pick_front_waiting_for_msu
*/

const WaitingForMSUPickFrontContainer = ({ data, ...props }) => {
  const [title, setTitle] = useState('Wait for Tote')
  const { success, error, isFetching } = useSelector((state) => state.serverEvents)
  const [legend, setLegend] = useState([])

  useEffect(() => {
    if (success && data.state_data) {
      const {
        state_data: { title, legends },
      } = data
      if (title) setTitle(title)

      if (legends) {
        let legendsData = Object.assign([], legends)
        legendsData = mapLegendsData(legendsData)
        setLegend(legendsData)
      }
    }
  }, [data, success, error, isFetching])

  return (
    <WaitingForMSU
      legends={legend}
      {...props}
      title={title}
    />
  )
}

export default WaitingForMSUPickFrontContainer
