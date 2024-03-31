import styled from "styled-components"

export default function TotalScore(props) {
  return (
    <ScoreContainer >
      <h1>{props.score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}


const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
/* background-color: red; */

h1{
  font-size: 100px;
  line-height: 100px;

}

p{
  font-size: 24px;
  font-weight: 500px;
}
`;