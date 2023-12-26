import React from 'react'
import './DeviceManagement.scss'
import {ReactComponent as PlusIcon} from '../../../assets/SvgIcons/PlusIcon.svg'
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import Rectangle from '../../../assets/images/Rectangle.png'

const DeviceManagement = () => {

    const Data =[
        {
         id:1, 
         TankName:'My Tank#1',
         Status:'Disconnected', 
         WaterLevel:'0.4', 
         LastRefil:'09 Dec 2019', 
         NextMaintainence:'09 Dec 2018', 
         LastUpdated:'5:18 PM'
        },
        {
         id:2, 
         TankName:'My Tank#2',
         Status:'Weak', 
         WaterLevel:'0.4', 
         LastRefil:'09 Dec 2019', 
         NextMaintainence:'09 Dec 2018', 
         LastUpdated:'5:18 PM'
        },
        {
         id:3, 
         TankName:'My Tank#3',
         Status:'Connected', 
         WaterLevel:'0.4', 
         LastRefil:'09 Dec 2019', 
         NextMaintainence:'09 Dec 2018', 
         LastUpdated:'5:18 PM'
        }
    ]

  return (
    <div className='DeviceManagement'>
        <div className='Top'>
            <div className='HeadTextAddButton'>
                <div className='HeadText'>
                    <p>Device list</p>
                </div>
                <div className='AddButton'>
                    <button><PlusIcon/>Add device</button>
                </div>
            </div>
        </div>
        <div className='Bottom'>
            <table>
                <thead>
                    <tr className='TableHead'>
                        <th></th>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>WATER LEVEL</th>
                        <th>LAST REFILL</th>
                        <th>NEXT MAINTENENCE</th>
                        <th>LAST UPDATED</th>
                        <th></th> 
                    </tr>
                </thead>
                <tbody>
                {Data.map((data)=> (
                    <tr className='TableBody' key={data.id}>
                        <td><img src={Rectangle} alt='Indication' /></td>
                        <td className='TankName'>{data.TankName}</td>
                        <td className='Status'>
                        <div>
                            <div
                                style={{
                                color: data.Status === 'Weak' ? '#E46A11' : data.Status === 'Connected' ? '#0D894F' : '#545F71', 
                                backgroundColor: data.Status === 'Weak' ? '#FDF1E8' : data.Status === 'Connected' ? '#E7F4EE' : '#EEF1F4',
                                width : data.Status === 'Weak' ? '40px' : data.Status === 'Connected' ? '80px' : '99px',
                                borderRadius: '100px',
                                padding: '4px 12px',
                                
                                }}
                            ><div>{data.Status}</div></div>
                        </div>
                        </td>
                        <td className='WaterLevel'>{data.WaterLevel}/5M</td>
                        <td className='LastRefill'>{data.LastRefil}</td>
                        <td className='NextMaintenence'>{data.NextMaintainence}</td>
                        <td className='LastUpdated'>{data.LastUpdated}</td>
                        <td><MoreVertSharpIcon /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DeviceManagement