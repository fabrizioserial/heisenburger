import React, { useContext, useEffect, useState } from 'react'
import { ContextElement } from '../../../ContextCart'
import {getFirestore} from '../../../firebase/index'


export const FinishPayment = (props) =>{


    const addToOrder = useContext(ContextElement).addToOrder
    const [order,setOrder] = useState(props.orderItem)
    
    const addToDatabase = () => {
        
        
    }
   



    

    return(
        
            <div className="fp-container-form">

                <div className="fp-field">
                    <p>
                        NOMBRE
                    </p>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="fp-field">
                    <p>
                        TELEFONO
                    </p>
                    <input type="text" id="mobile" name="mobile" required/>
                </div>
                <div className="fp-field">
                    <p>
                        EMAIL
                    </p>
                    <input type="text" id="email" name="email" required/>
                </div>
                <button onClick={addToOrder}>Terminar</button>
            </div>
    )
}