import { useState } from "react";
import KidsButtons from "./KidsButtons";
import { kids } from "./data";
import KidsSlides from "./KidsSlides";

function Kids(){
    const [kidsClothes, setKidsClothes] = useState(kids);

    const chosenGender = (gender) => {
        const newGender = kids.filter(item => item.gender === gender)
        setKidsClothes(newGender)
    }
    const descriptionKids=(id)=>{
        const newClothes = []
        kidsClothes.forEach(item=>{
            if(item.id ===id){
                const chenchedId ={...item, showMore: !item.showMore};
                newClothes.push(chenchedId)
            }else{
                newClothes.push(item)
            }
        })
        setKidsClothes(newClothes)
    }


return(
        <div className="">
            <div>
                <KidsButtons chosenGender={chosenGender}/>
                <p className="footnote">All pictures and information are taken from the H&M website</p>
            </div>
            <div className="babyClothes">
            {kidsClothes.map(item => {
                const{id,name, price,details,showMore} = item;
                return(
                    <div className="babyStaff" key={id}>
                        <KidsSlides numberItem={id}/>
                        <p>{name}</p>
                        <p>Price: ${price}</p>
                        <p>{showMore ? details : details.substring(0, 30) + "... "}
                        <button className="showMore" onClick={() => descriptionKids(id)}> {showMore ? "Less details" : "More details" }</button></p>
                        
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}
export default Kids;