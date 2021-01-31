import { from } from "core-js/fn/array";
import { React } from "react";
import "./CategoryContainer.css"
import { CategoryItem } from "./CategoryItem";

export const CategoryContainer = () => {
    return(
        <div className="container-cat">
          <CategoryItem title="🥩 CARNE" name="carne"/>
          <CategoryItem title="🥦 VEGANA" name="vegan"/>  
        </div>
    )
}