import React,{useContext,useEffect,useState} from 'react'
import firebase from 'firebase/app'
import '@firebase/firestore'
import {  getFirestore } from './firebase/index';
import { AlertDialog } from './component/AlertDialog';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export const ContextElement = React.createContext();

export const ContextCart = (props) =>{

    const [open, setOpen] = React.useState(false);
    const [contador,setContador] = useState(0)
    const [elements,setElement] = useState([])
    const [orderItem,setOrder] = useState([])
    const [total,setPrice] = useState(0)


    const handleClose = () => {
        setOpen(false);
      };

    const addItem = (itemToAdd) =>{
        elements.length > 0 ? 
            itemExist(itemToAdd.item.id) > 0 ? 
                elements.filter(items => items.item.id === itemToAdd.item.id).map(
                    item1 => {
                        console.log("son iguales las id")
                        item1.quantity = itemToAdd.quantity
                    }
                ) :
                setElement([...elements,itemToAdd])
            :
            setElement([...elements,itemToAdd])
        
            console.log("loes elementos de mierda son:",elements)
    }
 
    const addToOrder = (price) =>{
        console.log(elements)
        var nuevoarray = []
        elements.forEach(products => {
            nuevoarray = [...nuevoarray,{
                title:products.item.title, 
                id:products.item.id, 
                price:products.item.price, 
                quantity : products.quantity
            }]
            console.log("se pusheo ",products)
        });
        setOrder(nuevoarray)
        setPrice(price)
        
    }

    const pushToDBOrder = (buyer) =>{
        const ValueToAdd = {
            buyer:buyer,
            items:orderItem,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:total
        }
        console.log(ValueToAdd)
        const db = getFirestore().collection('orders')
        db.add(ValueToAdd).then(() => {
            setOpen(true)
        })
    }
    useEffect(()=>{
        console.log(orderItem)

    },[orderItem])

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
        <ContextElement.Provider value={{contador,setContadorFun,elementsTouse:[elements,setElement],addItem,deleteElement,changeValue,elements,addToOrder,orderItem,pushToDBOrder}}>
        {
            props.children
        }
        
        <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Orden exitosa!"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Se agregó exitosamente la orden! En breve recibirá su pedido
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                    <Button onClick={handleClose} color="primary" >
                        Ok
                    </Button>
                    </DialogActions>
                </Dialog>
        </ContextElement.Provider>
    )
}