import { useState } from "react";
import BabyButtons from "./BabyButtons";
import BabySlides from "./BabySlides";
import { baby } from "./data";

function Baby(){
    const [babyClothes, setBabyClothes] = useState(baby);

    const chosenGender = (gender) => {
        const newGender = baby.filter(item => item.gender === gender)
        setBabyClothes(newGender)
    }


    const description=(id)=>{
        const newClothes = []
        babyClothes.forEach(item=>{
            if(item.id ===id){
                const chenchedId ={...item, showMore: !item.showMore};
                newClothes.push(chenchedId)
            }else{
                newClothes.push(item)
            }
        })
        setBabyClothes(newClothes)
    }

    // const clothesId = (id) => {
    //     const newId = baby.filter(item => item.id === id)
    //     setBabyClothes(newId)
    // }


return(
        <div className="">
            <div>
                <BabyButtons chosenGender={chosenGender}/>
            </div>
            <div className="babyClothes">
            {babyClothes.map(item => {
                const{id, name,  price,details,showMore} = item;
                return(
                    <div className="babyStaff" key={id}>
                        <BabySlides numberItem={id}/>
                        <p className="footnote">All pictures and information are taken from the H&M website</p>
                        <p>{name}</p>
                        <p>Price: ${price}</p>
                        <p>{showMore ? details : details.substring(0, 30) + "... "}
                        <button className="showMore" onClick={() => description(id)}> {showMore ? "Less details" : "More details" }</button></p>
                        
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}
export default Baby;