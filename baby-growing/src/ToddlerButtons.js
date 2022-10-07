function ToddlerButtons({chosenGender}){


    return(
        <div className="babyButtons">
            <button className="babyBtn2" onClick={() => chosenGender("toddlerBoy")}>Toddler Boy</button>
            <button className="babyBtn2" onClick={() => chosenGender("toddlerGirl")}>Toddler Girl</button>
        </div>
    )
}
export default ToddlerButtons;