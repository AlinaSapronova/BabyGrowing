import { useState } from "react";
import KidsButtons from "./KidsButtons";
import { kids } from "./data";

function Kids(){
    const [kidsClothes, setKidsClothes] = useState(kids);

    const chosenGender = (gender) => {
        const newGender = kids.filter(item => item.gender === gender)
        setKidsClothes(newGender)
    }


return(
        <div className="">
            <div>
                <KidsButtons chosenGender={chosenGender}/>
            </div>
            <div className="babyClothes">
            {kidsClothes.map(item => {
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
export default Kids;