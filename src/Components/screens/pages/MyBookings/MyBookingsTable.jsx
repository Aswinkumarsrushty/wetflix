import React from 'react'
import './MyBookingsTable.scss'
import CheckBoxOutlineBlankTwoToneIcon from '@mui/icons-material/CheckBoxOutlineBlankTwoTone';
import {ReactComponent as MyBookingsTableRightIcon} from '../../../assets/SvgIcons/MyBookingsTableRightIcon.svg'
import Rectangle from '../../../assets/images/Rectangle.png'
import { Link } from 'react-router-dom';

const upComingStyles ={
     marginLeft:'20px',
     padding:'8px 13px',
     borderRadius: '40px',
     backgroundColor: '#FEF9F5',
     justifyContent: 'center',
     alignItems: 'center',
     color: '#FF824D',
    fontSize: '14px',
    fontWeight: '500',
}


const MyBookingsTable = () => {

    const Data =[
        {
         id:1, 
         Booking:'Water refill',
         Refid:'#39201',
         BookingDate:'26 Feb 2019', 
         PaymentAmount:'Prepaid', 
         PlumberName:'Vincent Lorenzo', 
        },
        {
         id:2, 
         Booking:'Technician visit',
         Refid:'#39201', 
         BookingDate:'26 Feb 2018', 
         PaymentAmount:'Pay on visit', 
         PlumberName:'Vincent Lorenzo', 
        },
        {
         id:3, 
         Booking:'Plumber visit',
         Refid:'#39201', 
         BookingDate:'26 Feb 2018', 
         PaymentAmount:'Pay on visit', 
         PlumberName:'Vincent Lorenzo', 
        }
    ]

  return (
    <div className='MyBookingsTable'>
        <div className='Bottom'>
            <table>
                <thead>
                    <tr className='TableHead'>
                        <th></th>
                        <th style={{marginLeft:'20px'}}>BOOKING</th>
                        <th>REF ID</th>
                        <th style={{marginRight:'70px'}}>BOOKING DATE</th>
                        <th>PAYMENT AMOUNT</th>
                        <th>PLUMBER NAME</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {Data.map((data)=> (
                    <tr className='TableBody' key={data.id}>
                        <td><img src={Rectangle} alt='indication' /></td>
                        <td className='Booking'>{data.Booking}</td>
                        <td className='Refid'>{data.Refid}</td>
                        <td className='BookingDate'>{data.BookingDate} 
                        {data.BookingDate === '26 Feb 2019' ? 
                        <div 
                        style={upComingStyles}>
                        Upcoming </div> : ''}
                         </td>
                        <td className='PaymentAmount'>{data.PaymentAmount}</td>
                        <td className='PlumberName'>{data.PlumberName}</td>
                        <td style={{display:'flex', alignItems:'start'}}><div style={{color:'#4D8BFF'}}><Link to="/booking_details" className="LinkedBookingDetails">View booking</Link></div> <div><MyBookingsTableRightIcon/></div> </td>
                    </tr>
                ))}
                </tbody>
                </table>
        </div>
    </div>
  )
}

export default MyBookingsTable