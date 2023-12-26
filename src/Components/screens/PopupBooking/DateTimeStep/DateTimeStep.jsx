import React from 'react'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import './DateTimeStep.scss'

const DateTimeStep = () => {
  return (
    <div className='DateTimeStep'>
      <div className='DatePicker'>
        <DatePicker />
      </div>
      <div className='TimePicker'>
        <TimePicker />
      </div>
    </div>
  )
}

export default DateTimeStep