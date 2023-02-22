import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Modal from '../componets/Modal';
import Item from '../componets/Item'

export default function SingleItem({user}) {
    const { item_id } = useParams()
    const [item, setItem] = useState([])

    const getItem = async () => {
        const url = `http://127.0.0.1:5000/api/shop/${item_id}`

        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if (data.id){
        setItem(data);
        }
    };

    useEffect(() => {
        getItem()
    },[])

    const addToCartAPI = async () => {
        console.log(user.token)
        // if (user.apitoken){
            const url = `http://127.0.0.1:5000/api/addtocart/${item.id}`
            const options = {
                method: 'POST',
                
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${user.token}`
                }
            } 
            console.log(url, options)

            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data)
            // if (data.status ==='ok'){
            //     setMessages([data.message])
            // }
        // }
    }

    return (

        <div className='row' > 
        <div className='text-center'>
            <h1>{item.name}</h1>
            <div className='col'>
                <div className="card text-center">
                    <img src={item.img_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{item.details}</p>
                        <h2 className="card-text">{item.price}</h2>
                        <Link to={`/Products`} className='btn btn-danger mx-1' >Go back</Link> 
                        <button onClick={()=>{addToCartAPI()}} className='btn btn-success mx-1'>Add to Cart</button>
                        {/* <Modal
                            triggerButtonText='Add to cart'
                            modalTitle='Get this Item'
                            modalBody='This will be in your cart'
                            color='success'
                            action={getItem}
                            actionText='added to cart'
                        /> */}

                    </div>
                </div>
            </div>
        </div>
     </div>
        
    )
}