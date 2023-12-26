import React, { useState } from 'react';
import './Booking.scss';
import { ReactComponent as PhoneIcon } from '../../../assets/SvgIcons/PhoneIcon.svg';
import { ReactComponent as ImagePlaceHolderIcon } from '../../../assets/SvgIcons/ImagePlaceHolderIcon.svg';
import { ReactComponent as BookNowRightIcon } from '../../../assets/SvgIcons/BookNowRightIcon.svg';
import PopupBooking from '../../PopupBooking/PopupBooking';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const Booking = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null); // Track selected item

  const handleOpen = (itemId) => {
    setOpen(true);
    setSelectedItemId(itemId); // Store the selected item
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItemId(null); // Clear selected item when closing
  };

  const Data = [
    {
      id: 1,
      HeadText: 'Book a Technician',
      Paragraph: 'Lorem ipsum dolor sit amet consectetur. Id placerat libero at venenatis congue nascetur elementum.'
    },
    {
      id: 2,
      HeadText: 'Order truck borne water',
      Paragraph: 'Lorem ipsum dolor sit amet consectetur. Id placerat libero at venenatis congue nascetur elementum.'
    },
    {
      id: 3,
      HeadText: 'Book Tank cleaning service',
      Paragraph: 'Lorem ipsum dolor sit amet consectetur. Id placerat libero at venenatis congue nascetur elementum.'
    }
  ];

  return (
    <div className='Booking'>
      <div className='Top'>
        <div className='HeadTextBooking'>
          <div className='HeadText'>
            <p>Book Technician or Plumber</p>
          </div>
          <div className='AddButton'>
            <button><PhoneIcon style={{ marginRight: '10px' }} />9876543100</button>
          </div>
        </div>
      </div>
      <div className='Center'>
        <div className='Cards'>
          {Data.map((data) => (
            <div className='One' key={data.id}>
              <div className='Top'>
                <ImagePlaceHolderIcon />
              </div>
              <div className='Bottom'>
                <div className='HeadText'>
                  {data.HeadText}
                </div>
                <div className='Paragraph'>
                  {data.Paragraph}
                </div>
                <div className='BookingArrow' onClick={() => handleOpen(data.id)}>
                  Book now <BookNowRightIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='Bottom'>
        <div className='Popup'>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {selectedItemId !== null && <PopupBooking itemId={selectedItemId} />}
          </Box>
        </Modal>
        </div>
      </div>
    </div>
  );
}

export default Booking;
