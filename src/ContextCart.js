import { set } from 'core-js/fn/dict';
import React,{useContext,useState} from 'react'
import { ItemCount } from './component/itemcount/ItemCount';

export const CartContext = React.createContext();

export const ContextCart = (props) =>{

    const [contador,setContador] = useState(0)
    const [elements,setElement] = useState([])

    const addItem = (itemToAdd) =>{
        const item ={
            item:{
                title:itemToAdd[0],
                price:itemToAdd[1],
                desc:itemToAdd[2],
                id:itemToAdd[3],
                thumbnail:itemToAdd[4]
            },
            quantity:itemToAdd[5]
        }
        
        
        elements.length > 0 ? 
            (elements.filter(items => items.item.id == item.item.id).length >0 ?
                elements.map(items => {
                    items.item.id == item.item.id && (items.quantity = item.quantity)
                }):
                setElement([...elements,item])
                
            ):
            console.log("no es")
            setElement([...elements,item])



        
        console.log(elements)


    
    }

    const setContadorFun = (cont) =>{
        setContador(cont)
    }
    return(
        <CartContext.Provider value={[contador,setContadorFun,elements,addItem]}>
        {
            props.children
        }
        </CartContext.Provider>
    )
}