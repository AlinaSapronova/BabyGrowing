function BabyButtons({chosenGender}){


    return(
        <div className="babyButtons">
            <button className="babyBtn2" onClick={() => chosenGender("boy")}>Baby Boy</button>
            <button className="babyBtn2" onClick={() => chosenGender("girl")}>Baby Girl</button>
        </div>
    )
}
export default BabyButtons;