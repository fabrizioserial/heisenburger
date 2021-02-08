import { set } from 'core-js/fn/dict';
import React,{useContext,useEffect,useState} from 'react'
import { ItemCount } from './component/itemcount/ItemCount';

export const ContextElement = React.createContext();

export const ContextCart = (props) =>{

    const [contador,setContador] = useState(0)
    const [elements,setElement] = useState([])

    const addItem = (itemToAdd) =>{
        elements.length > 0 ? 
            itemExist(itemToAdd.item.id) > 0 ? 
                elements.filter(items => items.item.id === itemToAdd.item.id).map(
                    item1 => {
                        item1.quantity = itemToAdd.quantity
                    }
                ) :
                setElement([...elements,itemToAdd])
            :
            setElement([...elements,itemToAdd])
        
    }
 
    const itemExist = (id) => {
        console.log(elements.filter(item => item.item.id === id).length)
        return elements.filter(item => item.item.id === id).length
    }

    const deleteElement = (idOfItemToDelete)=>{
        console.log("Se va a eliminar el valor de ",idOfItemToDelete)
        const newmap = elements
        newmap.map(item => {
            item.item.id === idOfItemToDelete && 
                newmap.splice(item)
        })
       
        setElement(newmap)
        console.log("Asi quedo el nuevo array", elements)
        
    }
    useEffect(()=>{
        console.log(elements)
    },[elements])

    const changeValue = (newValue)=>{
        setElement(newValue)
    }

    const setContadorFun = (cont) =>{
        setContador(cont)
    }
    return(
        <ContextElement.Provider value={{contador,setContadorFun,elementsTouse:[elements,setElement],addItem,deleteElement,changeValue,elements}}>
        {
            props.children
        }
        </ContextElement.Provider>
    )
}