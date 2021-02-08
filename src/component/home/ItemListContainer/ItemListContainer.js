import React,{useState,useEffect} from "react";
import { ItemList } from "../../itemList/ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom'
import { CategoryContainerHome } from "../Categories_home/CategoryContainerHome";


export const ItemListContainer = (props) =>{

    const {categoryId} = useParams();

    
    const listOfProduct = [
        {
            id:"a11",
            categoryId:"carne",
            title:"Hamburguesa Triple Cheddar",
            price:"250",
            thumbnail:"https://media-cdn.tripadvisor.com/media/photo-s/18/92/e1/f9/hamburguesa-duke-triple.jpg",
        },
        {
            id:"a12",
            categoryId:"carne",
            title:"Hamburguesa Cuarto De Libra",
            price:"350",
            thumbnail:"https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/fftq60l5bk4ss6mgsf9i",
        },
        {
            id:"a13",
            categoryId:"vegan",
            title:"Hamburguesa Vegana",
            price:"200",
            thumbnail:"https://unareceta.com/wp-content/uploads/2017/09/receta-de-hamburguesa-vegana.jpg",
        }
    ]
    const listOfCategory = [
        {
            thumbnail:"https://www.cremadelechealqueria.com/sites/alqueria-dev/files/styles/650_x_350/public/shutterstock_651646891.png?itok=uglVeqhp",
            title:"HAMBURGUESAS",
            id:"Hamburguesas"
        },
        {
            thumbnail:"https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso.jpg",
            title:"PIZZAS",
            id:"Pizzas"
        },
        {
            thumbnail:"https://d35hsl9am8s2ta.cloudfront.net/public/images/2020/04/sanguche-de-milanesa-773x458.jpeg",
            title:"SANGUCHES",
            id:"Sanguche"
        },
        {
            thumbnail:"https://www.goya.com/media/6663/patatas-bravas-2.jpg?quality=80",
            title:"PAPAS FRITAS",
            id:"PapasFritas"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/IfCy47TdsNE/maxresdefault.jpg",
            title:"VEGETARIANO",
            id:"Vegetariano"
        }
        
    ]

    const [product,setProduct] = useState([]);


    
    

    return(
        <div className="container">
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
                        {
                            //<ItemList categoryId={categoryId} listOfProduct={listOfProduct}/>
                    
                        }
                    </div> 
                    :
                    <div className="cont-cat">
                        <ItemList categoryId={categoryId} listOfProduct={listOfProduct}/>
                    </div>

            }
        </div>
    )
}