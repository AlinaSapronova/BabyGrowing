import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baby, kids, toddler } from "./data";

function Shop(){
    const [babyClothes] = useState(baby);
    const [toddlerClothes] = useState(toddler);
    const [kidsClothes] = useState(kids);

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
                const{name, image, price} = item;
                return(
                    <div className="babyStaff">
                        <img src={image} alt="baby clothes" className="babyimg"/>
                        <p>{name}</p>
                        <p>Price: ${price}</p>
                        <button className="babyBtn">More details</button>
                    </div>
                    
                )
            })},
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
            })},
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
export default Shop;