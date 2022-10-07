import { useState } from "react";
import BabyButtons from "./BabyButtons";
import { baby } from "./data";

function Baby(){
    const [babyClothes, setBabyClothes] = useState(baby);

    const chosenGender = (gender) => {
        const newGender = baby.filter(item => item.gender === gender)
        setBabyClothes(newGender)
    }


return(
        <div className="">
            <div>
                <BabyButtons chosenGender={chosenGender}/>
            </div>
            <div className="babyClothes">
            {babyClothes.map(item => {
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
export default Baby;