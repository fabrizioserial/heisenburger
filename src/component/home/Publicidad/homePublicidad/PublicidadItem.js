import React from 'react'
import '../homePublicidad/PublicidadItem.css'
import nuggetsImage from '../../../../image/nuggets_picantes.png'

export const PublicidadItem = ({type})=>{
    return(
        <React.Fragment>
            {
                type && (type === "home_1") ? 
                <div className="ads-1-cont-item">
                    <div className="ads-1-cont-cont-item">
                        <div className="ads-1-text-cont">
                            <p className="ads-1-text-probaste">Probaste nuestras nuevas</p>
                            <p className="ads-1-text-nuggets">NUGGETS PICANTES?</p>
                            <button className="ads-1-btn">CONOCÉ MAS</button>
                        </div>
                        <img src={nuggetsImage} className="ads-1-image"/>
                    </div>
                </div>:
                <div>

                </div>
            }
        </React.Fragment>
    )
}