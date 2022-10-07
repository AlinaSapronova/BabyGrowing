import { useState } from "react";
import ToddlerButtons from "./ToddlerButtons";
import {toddler} from "./data";

function Toddler(){
    const [toddlerClothes, setToddlerClothes] = useState(toddler);


    const chosenGender = (gender) => {
        const newGender = toddler.filter(item => item.gender === gender);
        setToddlerClothes(newGender)
    }





    return(
        <div className="">
            <div>
                <ToddlerButtons chosenGender={chosenGender}/>
            </div>
            <div className="babyClothes">
            {toddlerClothes.map(item => {
                const{name, image, price} = item;
                return(
                    <div className="babyStaff">
                        <img src={image} alt="baby clothes" className="babyimg"/>
                        <p>{name}</p>
                        <p>Price: ${price}</p>
                        <button className="babyBtn">More details</button>
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}
export default Toddler;