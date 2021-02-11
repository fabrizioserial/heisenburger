import React from 'react'
import { PublicidadItem } from './homePublicidad/PublicidadItem'
import "../Publicidad/homePublicidad/PublicidadItem.css"

export const PublicidadContainer = () =>{

    return(
        <div className="art">
            <PublicidadItem type={"home_1"}/>
        </div>
    )
}