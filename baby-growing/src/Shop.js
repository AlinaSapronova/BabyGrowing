import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baby, kids, toddler } from "./data";
import BabySlides from "./BabySlides";
import ToddlerSlides from "./ToddlerSlides";
import KidsSlides from "./KidsSlides";

function Shop(){
    const [babyClothes,setBabyClothes] = useState(baby);
    const [toddlerClothes, setToddlerClothes] = useState(toddler);
    const [kidsClothes,setKidsClothes] = useState(kids);

    const navigate = useNavigate()
    function moveToBaby(e) {
        e.preventDefault();
        navigate("./Baby")
    }
    function moveToToddler(e) {
        e.preventDefault();
        navigate("./Toddler")
    }
    function moveToKids(e) {
        e.preventDefault();
        navigate("./Kids")
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

<div className="home">
   
    <div className="button">
    <button className="btn" onClick={moveToBaby}>Baby</button>
    <button className="btn" onClick={moveToToddler}>Toddler</button>
    <button className="btn" onClick={moveToKids}>Kids</button>
    </div>

</div>

            <div className="babyClothes">
            {babyClothes.map(item => {
                const{id,details, name, price,showMore} = item;
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
            })},
            {toddlerClothes.map(item => {
                const{id,details, name, price, showMore} = item;
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
            })},
              {kidsClothes.map(item => {
                const{id,details, name,  price, showMore} = item;
                return(
                    <div className="babyStaff" key={id}>
                       <KidsSlides numberItem={id}/>
                       <p className="footnote">All pictures and information are taken from the H&M website</p>
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
export default Shop;