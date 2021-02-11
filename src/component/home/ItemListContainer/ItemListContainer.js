import React,{useState,useEffect} from "react";
import { ItemList } from "../../itemList/ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom'
import { CategoryContainerHome } from "../Categories_home/CategoryContainerHome";
import { PublicidadContainer } from "../Publicidad/PublicidadContainer";
import {getFirestore} from '../../../firebase/index'


export const ItemListContainer = (props) =>{

    const {categoryId} = useParams();
    const [items, setItems] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection("items")
        
        itemCollection.get().then((querySnapshot) => {
            
            let arrayItems = querySnapshot.docs.map(doc => {
                return(
                    {id:doc.id,...doc.data()}
                    )
                }
                )
            setItems(arrayItems)
            
            
        })
        

    },[])

    

    const listOfCategory = [
        {
            thumbnail:"https://www.cremadelechealqueria.com/sites/alqueria-dev/files/styles/650_x_350/public/shutterstock_651646891.png?itok=uglVeqhp",
            title:"HAMBURGUESAS",
            id:"HAMBURGUESA"
        },
        {
            thumbnail:"https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso.jpg",
            title:"PIZZAS",
            id:"PIZZA"
        },
        {
            thumbnail:"https://d35hsl9am8s2ta.cloudfront.net/public/images/2020/04/sanguche-de-milanesa-773x458.jpeg",
            title:"SANGUCHES",
            id:"SANGUCHE"
        },
        {
            thumbnail:"https://www.goya.com/media/6663/patatas-bravas-2.jpg?quality=80",
            title:"PAPAS FRITAS",
            id:"PAPAS FRITAS"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/IfCy47TdsNE/maxresdefault.jpg",
            title:"VEGETARIANO",
            id:"VEGETARIANO"
        }
        
    ]

    return(
        <div className="container-itemlist">
            {
                props.text ?
                    <div className="container-home">
                        <div className="cont-background">
                            <div className="cont-home-text">
                                <p className="text-home-disfruta">Disfruta de las</p>
                                <p className="text-home-mejores">MEJORES</p>
                                <p className="text-home-hamburguesas">HAMBURGUESAS</p>
                                <button className="btn-home-radius">CONOCENOS</button>
                            </div>
                        </div>
                        <CategoryContainerHome items={listOfCategory}/>
                        <PublicidadContainer/>
                        {
                            <ItemList  listOfProduct={items}/>
                    
                        }
                    </div> 
                    :
                    <div className="cont-cat">
                        <ItemList categoryId={categoryId} listOfProduct={items}/>
                    </div>

            }
        </div>
    )
}