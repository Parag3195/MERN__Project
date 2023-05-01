import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';
import { type } from '@testing-library/user-event/dist/type';

function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);
    let dispatch = useDispatchCart();
    let data= useCart();
    const priceRef=useRef()

   const[qty,setQty]=useState(1);
   const[size,setSize]=useState("");

    const handleAddToCart=async ()=>{
        let food =[]
        for (const item of data){
            if(item.id===props.foodItem._id){
                food = item;
                break;
            }
        }

        if( food !==[]){
            if(food.size === size){
                await dispatch({type:"UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty})
                return
            }
            else if(food.size !==size){

                
                await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty , size:size})
                return

                
                // await console.log(data)
            }
            return
        }
        await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty , size:size})
    }

let finalPrice= qty * parseInt(options[size]);

useEffect(()=>{
    setSize(priceRef.current.value)
},[])

    return (
        <>
            <div className="card mt-2 m-4 rounded" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img style={{height:"150px" , objectFit:"fill"}} className='w-100' src={props.foodItem.img} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">{props.description}</p> */}
                    <div className="container w-100 inline-block">
                        <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)} >
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select >

                        <select className="m-2 h-100  bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                          {priceOptions.map((data)=>{
                            return <option key={data} value={data}>{data}</option>
                          })}
                        </select>

                        <div className='d-inline h-100 fs-5'>
                         ₹ {finalPrice}/-
                        </div>
                        <hr />
                        <button className='btn btn-success justify-content-center ms-2 rounded' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card