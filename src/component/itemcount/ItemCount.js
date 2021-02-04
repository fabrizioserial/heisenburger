import React,{useState,useEffect} from 'react'
import './ItemCount.css'



export const ItemCount = (props) =>{
    const [stock,setStock] = useState(props.stock)
    const [initial,setInitial] = useState(props.initial);
    const [finalvalue, setfinalValue] = useState(0);

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
    const AddOn = () =>{
        setfinalValue(initial);
    }

    useEffect(()=>{
        setInitial(props.initial)
    },[props.initial])
    useEffect(()=>{
        setStock(props.stock)
    },[props.stock])

    return(
        <div className="container-counter">
            <div className='container-item-counter'>
                <button className='btn-item-counter' onClick={handleCountLess}>-</button>
                <p>{initial}</p>
                <button className='btn-item-counter' onClick={handleCountSum}>+</button>
            </div>
            <div className='container-final-item'>
                <button onClick={AddOn,() => {
                    console.log("el res",initial)
                    props.handleEvent(initial)
                    
                    }} >Agregar al carrito</button>     
            </div>
            {
                finalvalue != 0 && <h4 className="result-text">La compra en total es de: {finalvalue} articulos</h4>
            }
        </div>
    )
}

