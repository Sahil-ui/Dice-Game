
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice';
import { useState } from 'react';
import { Button } from '../Style/Button';
import Rules from './Rules';

export default function Game() {
  const [SelectedNumber, setSelectedNumber] = useState()
  const [currentDice, setcurrentDice] = useState(1)

  const [score, setscore]= useState(0)

  const[error, seterror]=useState("")

  const [showRules, setShowRules] = useState(false)



  const generateRandomNumber = (min, max)=> {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
const roleDice = ()=>{
  if(!SelectedNumber){
    seterror("You have not selected any number")
    return;
  }
  seterror("")
    const randomNumber = generateRandomNumber(1,7)
    setcurrentDice((prev)=>randomNumber)
    if(SelectedNumber===randomNumber){
      setscore(prev=>prev+randomNumber)
    }
    else{
      setscore(prev=>prev-2)
    }

    setSelectedNumber(undefined)
}

const resetsetScore = ()=>{
  setscore(0)
}



  return (
    <MainContainer>
    <div className= 'top-bar'>
        <TotalScore
        score = {score}
        />
        <NumberSelector
        seterror={seterror}
        SelectedNumber ={SelectedNumber}
        setSelectedNumber ={setSelectedNumber}
        error={error}
        />
    </div>
    <RollDice
    currentDice={currentDice}
    roleDice={roleDice}
    />
  <div className= 'btns'>
    <Button onClick={resetsetScore}>Reset</Button>
    <Button 
    onClick={()=> setShowRules(prev=>!prev)}
    >
      {showRules ? "Hide" : "Show"}
       Rules</Button>
  </div>

  {showRules && <Rules/>}

    </MainContainer>

   
  )
}

const MainContainer = styled.main`

/* padding-top:70px; */

.top-bar{
  display: flex;
  align-items: end;
  justify-content: space-around;
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 220px; */
  align-items: center;
  gap: 10px;
}

`;
