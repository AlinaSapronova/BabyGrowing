import { useState } from "react";
import ToddlerButtons from "./ToddlerButtons";
import {toddler} from "./data";
import ToddlerSlides from "./ToddlerSlides";

function Toddler(){
    const [toddlerClothes, setToddlerClothes] = useState(toddler);


    const chosenGender = (gender) => {
        const newGender = toddler.filter(item => item.gender === gender);
        setToddlerClothes(newGender)
    }

    const descriptionToddler=(id)=>{
        const newClothes = []
        toddlerClothes.forEach(item=>{
            if(item.id ===id){
                const chenchedId ={...item, showMore: !item.showMore};
                newClothes.push(chenchedId)
            }else{
                newClothes.push(item)
            }
        })
        setToddlerClothes(newClothes)
    }




    return(
        <div className="">
            <div>
                <ToddlerButtons chosenGender={chosenGender}/>
            </div>
            <div className="babyClothes">
            {toddlerClothes.map(item => {
                const{id, name, price,details,showMore} = item;
                return(
                    <div className="babyStaff" key={id}>
                         <ToddlerSlides numberItem={id}/>
                         <p className="footnote">All pictures and information are taken from the H&M website</p>
                        <p>{name}</p>
                        <p>Price: ${price}</p>
                        <p>{showMore ? details : details.substring(0, 30) + "... "}
                        <button className="showMore" onClick={() => descriptionToddler(id)}> {showMore ? "Less details" : "More details" }</button></p>
                        
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}
export default Toddler;