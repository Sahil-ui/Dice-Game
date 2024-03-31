import styled from "styled-components";
import Dice_img from "../Style/Images/dices 1.png";
 
import { Button } from "../Style/Button";
export default function Home({toggle}) {
  return (
    <Container>
      <img src={Dice_img} alt="Dice Img" srcset="" />
      <div className= "content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle} 
        >Play Now</Button>
        </div>
      
    </Container>
  );
}

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;


    .content h1{
    font-size: 96px;
    white-space: nowrap;
}
`;


