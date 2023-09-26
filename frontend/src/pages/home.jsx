import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    const [items,setItems] = useState([])

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
    


    const handleBuy = async (id) =>{
        
    }
  return <div className='App'>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <h1> shop </h1>
    <div className='items'>
        {items.map((b)=>(
            <div className='b' key={b.id}>
                {/* {b.cover && <img src ={b.cover} alt=""/>} */}
                <h2>{b.name}</h2>
                <p>{b.year}</p>
                <span>{b.type}</span>
                <Button className="delete" onClick ={()=> handleBuy(b.id)} variant="danger">Add To Cart</Button>
                </div>
        ))}
    </div>
  </div>
};
export default Home