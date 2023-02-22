import React from 'react'
import { Link } from 'react-router-dom';

export default function Item ({itemInfo, user}) {
    
 
           return (
            <div className="card" style={{width: "18rem"}}>
                <img src={itemInfo.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ itemInfo.name }</h5>
                    <p className="card-text">{itemInfo.details}</p>
                    <h3>{itemInfo.price}</h3>
                    <div>
                    <Link to={`/shop/singleitem/${itemInfo.id}`} className='btn btn-primary mx-1'>More Info</Link>
                    {/* <button onClick={()=>{addToCartAPI()}} className='btn btn-success mx-1'>View Item</button> */}
                    </div>
                    
                </div>
            </div>
        )
    }
