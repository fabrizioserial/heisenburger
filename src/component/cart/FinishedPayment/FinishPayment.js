import React, { useContext, useEffect, useState } from 'react'
import { ContextElement } from '../../../ContextCart'
import { AlertDialog } from '../../AlertDialog'
import "../FinishedPayment/FinishPayment.css"



export const FinishPayment = (props) =>{


    const pushToDBOrder = useContext(ContextElement).pushToDBOrder
    const addToOrder = useContext(ContextElement).addToOrder

    const [order,setOrder] = useState(props.orderItem)
    const [name,setName] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    
    const addToDatabase = () => {
        
        const buyer = {
            name: name,
            mobile: mobile,
            email: email
        }
        const task = new Promise((resolve,reject) =>{
            addToOrder(props.totalprice)
            pushToDBOrder(buyer)
        })
        
        
    }






    

    return(
        
            <div className="fp-container-form">

                <div className="fp-field">
                    <p>
                        NOMBRE
                    </p>
                    <input className="input-finish-payment" type="text" id="name" name="name" required onChange={event => setName(event.target.value)}/>
                </div>
                <div className="fp-field">
                    <p>
                        TELEFONO
                    </p>
                    <input className="input-finish-payment" type="text" id="mobile" name="mobile" required onChange={event => setMobile(event.target.value)}/>
                </div>
                <div className="fp-field">
                    <p>
                        EMAIL
                    </p>
                    <input className="input-finish-payment" type="text" id="email" name="email" required onChange={event => setEmail(event.target.value)}/>
                </div>
                <button className="btn-finish-payment" onClick={addToDatabase}>TERMINAR</button>

            </div>
    )
}