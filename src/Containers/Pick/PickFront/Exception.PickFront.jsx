import { ExceptionDetails, KQ } from 'operational-component-lib'
import React, { useMemo, useState } from 'react'

import { Typography } from '@mui/material'

const ExceptionPickFront = ({ data }) => {
  const [exceptedQty, ] = useState(data?.pick_quantity)

  const [damagedQty, setDamagedQty] = useState(0)
  const [unscannableQty, setUnscannableQty] = useState(0)
  const [missingQty, setMissingQty] = useState(0)

  const [exceptionType, setExceptionType] = useState(null)
  const exceptions = [
    { key: 'Damaged', value: 'Damaged', qty: damagedQty },
    { key: 'Unscannable', value: 'Unscannable', qty: unscannableQty },
    { key: 'Missing', value: 'Missing', qty: missingQty },
  ]

  const exceptionQty = useMemo(
    () => damagedQty + unscannableQty + missingQty,
    [damagedQty, unscannableQty, missingQty],
  )

  const resetQty = () => {
    setDamagedQty(0)
    setUnscannableQty(0)
    setMissingQty(0)
  }
  
  const getExceptionChildren = () => {
    if (exceptionType === null) {
      return <Typography variant="body1">Choose exception type</Typography>
    }
    if (exceptionType === 'Damaged') {
      return (
        <KQ
          quantity={damagedQty}
          title="Enter damaged quantity"
          label="Key-in damaged quantity"
          totalQuantities={5}
          onQuantityChangeHandler={(e) => {
            setDamagedQty(e)
          }}
        />
      )
    }
    if (exceptionType === 'Unscannable') {
      return (
        <KQ
          quantity={unscannableQty}
          title="Enter unscannable quantity"
          label="Key-in unscannable quantity"
          totalQuantities={5}
          onQuantityChangeHandler={(e) => {
            setUnscannableQty(e)
          }}
        />
      )
    }
    if (exceptionType === 'Missing') {
      return (
        <KQ
          quantity={missingQty}
          title="Enter missing quantity"
          label="Key-in missing quantity"
          totalQuantities={5}
          onQuantityChangeHandler={(e) => {
            setMissingQty(e)
          }}
        />
      )
    }
  }

  return (
    <ExceptionDetails
      height='37.5em'
      title='Exception Details'
      exceptions={exceptions}
      exceptionSelected={exceptionType}
      exceptionChangeHandler={(e) => setExceptionType(e?.target?.value)}
      expectedQty={exceptedQty}
      scannedQty={2}
      exceptionQty={exceptionQty}
      nextBtnClicked={false}
      resetHandler={resetQty}
      cancelExceptionHandler={() => console.log('cancelExceptionHandler')}
      nextBtnClickHandler={() => console.log('nextClickHandler')}
      backBtnHandler={() => console.log('backBtnHandler')}
      confirmClickHandler={() => console.log('confirmClickHandler')}
      children={getExceptionChildren()}
    />
  )
}

export default ExceptionPickFront
