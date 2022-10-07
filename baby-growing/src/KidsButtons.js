function KidsButtons({chosenGender}){


    return(
        <div className="babyButtons">
            <button className="babyBtn2" onClick={() => chosenGender("kidsBoy")}> Boys</button>
            <button className="babyBtn2" onClick={() => chosenGender("kidsGirl")}>Girls</button>
        </div>
    )
}
export default KidsButtons;