import { set } from 'core-js/fn/reflect';
import React,{useState,useEffect} from 'react'
import 'core-js/es/array';
import './ItemCount.css'



export const ItemCount = (props) =>{
    const [stock,setStock] = useState(props.stock)
    const [initial,setInitial] = useState(0);

    const handleCountLess = () =>{
        if(initial>0){
            setInitial(initial-1);
        }
    }

    const handleCountSum = () =>{
        if(stock>initial){
            setInitial(initial+1);
        }
    }
    useEffect(()=>{
        setInitial(props.initial)
    },[props.initial])
    useEffect(()=>{
        setStock(props.stock)
    },[props.stock])

    return(
        <div>
            <div className='container-item-counter'>
                <button className='btn-item-counter' onClick={handleCountLess}>-</button>
                <p>{initial}</p>
                <button className='btn-item-counter' onClick={handleCountSum}>+</button>
            </div>
        </div>
    )
}

