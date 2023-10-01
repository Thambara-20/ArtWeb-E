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


const Catelog = () => {
  const [items, setItems] = useState([]);

  const handleBuy = async (id) => {
    // You can implement the logic to add the item to the cart here
    // For now, let's assume you have a function addToCart(id) that adds the item with the given ID to the cart
    // addToCart(id);
  };

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

  return (
    <div className='mainwrapper'>
     
      
      <div className={'mainhome-wrapper'}>
        <div className={'mainhome-wrapper'}>
          {items.map((item) => (
            <div key={item.id} className="imagecontainer-main">
              <ImageListItem className='imagecontainer'>
                <img src={img} alt={item.title} loading="lazy" style={{borderRadius:'5px'}} className='img-item'/>
                <ImageListItemBar
                  title={item.name}
                  subtitle={item.year}
                  actionIcon={
                    <div className="item-actions" >
                      <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.year}`}>
                        <InfoIcon />
                      </IconButton>
                      <Button className="buy" onClick={() => handleBuy(item.id)} variant="danger" style={{marginRight:'5px'}}>
                        Buy now
                      </Button>
                      <Button className="cart" onClick={() => handleBuy(item.id)} variant="success"style={{marginRight:'5px'}}>
                        Add To Cart
                      </Button>
                    </div>
                  }
                />
              </ImageListItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catelog;

