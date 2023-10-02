import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import './catelog.css';
import img from '../../../assets/covers/img.jpg';
import AOS from 'aos';
import Loading from '../../../components/Loading';


const Catelog = ({ isDarkMode }) => {
  const [items, setItems] = useState([]);

  const handleBuy = async (id) => {
    // You can implement the logic to add the item to the cart here
    // For now, let's assume you have a function addToCart(id) that adds the item with the given ID to the cart
    // addToCart(id);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:8800/items");
        setItems(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);

  if (items.length === 0) {
    return <Loading />;
  }

  return (
    <div className='mainwrapper' data-aos='fade-up'>

      <div className={'mainhome-wrapper'}>
   
          {items.map((item) => (
            <div className='frame-image' style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}} data-aos = 'fade-up'>


              <div key={item.id} className="imagecontainer-main" >
                <ImageListItem
                  className='imagecontainer'
                  data-aos='fade-up'
                  style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}
                >
                  <img src={img} alt={item.title} loading="lazy" style={{ borderRadius: '10px' }} className='image-item' />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={item.year}
                    style={{ borderRadius: '10px' }}
                    actionIcon={
                      <div className="item-actions">
                        <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.year}`}>
                          <InfoIcon />
                        </IconButton>
                        <Button className="buy" onClick={() => handleBuy(item.id)} variant="danger" style={{ marginRight: '5px' }}>
                          Buy now
                        </Button>
                        <Button className="cart" onClick={() => handleBuy(item.id)} variant="success" style={{ marginRight: '5px' }}>
                          Add To Cart
                        </Button>
                      </div>
                    }
                  />
                </ImageListItem>

              </div>
            </div>
          ))}
        </div>
 
    </div>
  );
};

export default Catelog;

