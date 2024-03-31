// import { useState } from "react";
import styled from "styled-components"

export default function NumberSelector(props) {
const arrNum = [1,2,3,4,5,6];
// const [SelectedNumber, setSelected] = useState('')
// console.log(SelectedNumber)

const numberSelectorHandler =(value)=>{
  props.seterror(value)
  props.seterror("")
}
  return (
    < NumberSelectorContainer>
    <p className= "error">{props.error}</p>
      <div className= "flex">{
        arrNum.map((value,index)=>(

          <Box 
          isSelected =  {value=== props.SelectedNumber}

          key = {index}
          onClick={()=>props.setSelectedNumber(value)}
          // onClick={()=>numberSelectorHandler(value)}

          >{value}</Box>
        )
        )
      }
      
      </div>
      <p>Select Number</p>
    </ NumberSelectorContainer>
  )
}


const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;
  
  .flex{
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 24px;
    font-weight: 700px;
  }

  .error{
    color: #ff0000;
  }
`;


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
  background-color: ${(props)=>props.isSelected ? "black" : "White"};
  color: ${(props)=>props.isSelected ? "white" : "black" };

`;
