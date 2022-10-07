import React from "react"
import { useNavigate } from "react-router-dom";

function Home(){


    const navigate = useNavigate()
    
    function moveToShop(e) {
        e.preventDefault();
        navigate("./Shop")
    }

    return(
<div className="home">
    <div>
        <h1>Welcome to BabyGrowing Shop!!</h1>
    </div>
    <div className="promo">
        <h3 className="h3">New Arrivals!!!</h3>
        <p className="homeP">Become a member and get 20% off your first purshase.</p>
        <p className="homeP">Get points for every dollar spend.</p>
        <button className="babyBtn2" onClick={moveToShop}>Shop Now ˃</button>
    </div>
  
</div>
    )
}
export default Home;