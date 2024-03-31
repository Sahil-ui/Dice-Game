import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(253, 253, 253);
    padding: 10px 10px;
    min-width: 220px;
    background-color: rgb(0,0,0);
    border-radius: 5px;
    border: 1px solid transparent;
    transition: 0.4s  ease-in;

&:hover{
background-color: rgb(253, 253,253);
color: #000000;
transition: 0.3s ease-in ;
border: 1px solid #000000;
}

`;