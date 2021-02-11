import { from } from "core-js/fn/array";
import { React } from "react";
import { CategoryContainerHome } from "../home/Categories_home/CategoryContainerHome";
import "./CategoryContainer.css"
import { CategoryItem } from "./CategoryItem";

export const CategoryContainer = () => {

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
    return(
      
        <div className="container-cat">
          <CategoryContainerHome items={listOfCategory}/>
        </div>
    )
}