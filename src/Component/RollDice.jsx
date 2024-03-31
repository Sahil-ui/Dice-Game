import styled from "styled-components"
import Dice_1 from "../Style/Images/dice_1.png"
import Dice_2 from "../Style/Images/dice_2.png"
import Dice_3 from "../Style/Images/dice_3.png"
import Dice_4 from "../Style/Images/dice_4.png"
import Dice_5 from "../Style/Images/dice_5.png"
import Dice_6 from "../Style/Images/dice_6.png"
// import { useState } from "react";


export default function RollDice(props) {
// const [currentDice, setcurrentDice] = useState(1)


// const generateRandomNumber = (min, max)=> {
//     return Math.floor(Math.random() * (max - min) + min)
//   }
  
// const roleDice = ()=>{
//     const randomNumber = generateRandomNumber(1,7)
//     props.setcurrentDice((prev)=>randomNumber)
// }



const diceImages = {
    1: Dice_1,
    2: Dice_2,
   3: Dice_3,
   4: Dice_4,
   5: Dice_5,
   6: Dice_6
};

  



  return (

    <DiceContainer>
        <div className= "dice"
        onClick={props.roleDice}
        >
            <img src= {diceImages[props.currentDice]} alt="dice " />
        </div>
    <p>
    Click on Dice to Roll
    </p>


    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    display: flex;
   align-items: center;
    flex-direction: column;

    margin-top: 48px;


    p{
        font-size: 24px;
    }

    .dice{
        cursor: pointer;
    }

`;