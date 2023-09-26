import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Potrait = () => {
  const [items, setItems] = useState([])


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/items/type/${"potrait"}`);
        setItems(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, []);



  // useEffect(()=>{
  //     const fetchAllItems = async () =>{
  //         try{ 
  //     const res = await axios.get("http://localhost:8800/items")
  //     console.log(res)
  //     setItems(res.data)
  //    }
  //         catch(err){ console.log(err)}
  //     }
  //     fetchAllItems()
  // } ,[])

  // const handleDelete = async (id) =>{
  //     try{
  //         await axios.delete("http://localhost:8800/items/"+id)
  //         window.location.reload()
  //     }
  //     catch(err){
  //             console.log(err)
  //     }
  // }
  return <div className='App'>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <h1> shop </h1>
    <div className='items'>
      {items.map((b) => (
        <div className='b' key={b.id}>
          {/* {b.cover && <img src ={b.cover} alt=""/>} */}
          <h2>{b.name}</h2>
          <p>{b.year}</p>
          <span>{b.type}</span>

        </div>
      ))}
    </div>

  </div>
};


export default Potrait