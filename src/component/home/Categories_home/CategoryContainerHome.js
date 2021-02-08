import React, { useState } from 'react'
import '../Categories_home/CategoryContainerHome.css'
import { CategoryItemHome } from './CategoryItemHome'

export const CategoryContainerHome = (props) =>{

    const [itemlist,getItemList] = useState(props.items)

    return(
        <div className="cat-cont-background">
            <div className="cat-cont-div">
                <CategoryItemHome item={itemlist[0]} size={"large"}/>
                <CategoryItemHome item={itemlist[1]} size={"large"}/>
            </div>
            <div className="cat-cont-div">
                <CategoryItemHome item={itemlist[2]} size={"small"}/>
                <CategoryItemHome item={itemlist[3]} size={"small"}/>
                <CategoryItemHome item={itemlist[4]} size={"small"}/>
            </div>
        </div>
    )
}