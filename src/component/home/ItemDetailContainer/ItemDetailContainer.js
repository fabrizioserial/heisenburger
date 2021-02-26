import React,{useState,useEffect} from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetailContainer/itemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../../firebase/index'

export const ItemDetailContainer = ()=>{
    const [item,setItem]=useState({});

    const {itemId} = useParams()



    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection("items")
        const filter = itemCollection.doc(itemId)
        
        filter.get().then((querySnapshot) => {
            
            let itemfound ={id:itemId,...querySnapshot.data()}
            console.log("item es ",itemfound)

            setItem(itemfound)
            
            
        })
        

    },[])

   /*
    useEffect(()=>{
        itemId && listOfProduct.map((product)=>{

            return(
                <>
                {
                    product.id === itemId && setItem(product)
                }
                </>
            )
        })
    },[])

    /*useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(itemToReturn)
            },2000)
        })
        task.then(resolve=>{
            setItem(resolve)
        })
    },[])
    */

    return(
        <div className="detail-container">
            
            {
                item && <ItemDetail itemProp={item}/>
            }
           
            
        </div>
    )
}
