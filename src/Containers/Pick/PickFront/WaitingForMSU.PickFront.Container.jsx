import React, { useEffect, useState } from 'react'

import WaitingForMSU from '../../../Components/Pick/PickFront/WaitingForMSU.PickFront'
import { useSelector } from 'react-redux'

/*
  Screen IDs.
  PICK_FRONT_WAITING_FOR_MSU: pick_front_waiting_for_msu
*/

const WaitingForMSUPickFrontContainer = ({ data, ...props }) => {
  const [title, setTitle] = useState('Wait for Tote')
  const { success, error, isFetching } = useSelector((state) => state.serverEvents)

  useEffect(() => {
    if (success && data.state_data) {
      const {
        state_data: { title },
      } = data
      if (title) setTitle(title)
    }
  }, [data, success, error, isFetching])

  let legends = [
    {
      color: 'blue',
      text: 'Inventory Totes',
    },
    {
      color: '#7BAABA',
      text: 'Order Totes',
    },
  ]

  return (
    <WaitingForMSU
      legends={legends}
      {...props}
      // title={title}
    />
  )
}

export default WaitingForMSUPickFrontContainer
