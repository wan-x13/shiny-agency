import React from 'react';
import styled , {css, isStyledComponent}from 'styled-components'
import {useState} from 'react';
import colors from '../utils/style/color';
import { Link } from 'react-router-dom';
import HomeIllustrationImg from "../assets/home-illustration.svg";



const HomeContainer = styled.div`
      display : flex;
      justify-content : center`

const HomeIllustration = styled.div`

     display: flex;
     align-items: center;
     justify-content: center;
     background-color : ${colors.backgroundLight};
     height: 600px;
     width : 90%
     `;

const IllustrationContainer = styled.div`
     display : flex;
     flex-direction: column;
     width : 552px

`
const Illustration = styled.p`
     
      font-weight : bold;
      font-size: 40px ;
      width: 450px;
      line-height : 80px;
      color: #2F2E41;

    `               
const DoTest = styled(Link)`
        text-decoration: none;
        font-size: 25px;
        color: #FFFFFF;
        width : 261px;
        background-color : #5843E4;
        font-family : Comfortaa;
        padding : 10px;
        border-radius : 29px;
        fill: solid;
        text-align: center;
        height : 30px;

`
const HomeImg = styled.img`
      width: 450px;
      height: 506px;
`
const Home = () => {


 
    return (

        <HomeContainer>   
        <HomeIllustration>
           
            <IllustrationContainer>
                <Illustration>Repérez vos besoins,
                on s’occupe du reste, avec les meilleurs talents</Illustration>

                <DoTest to='/survey/1'>Faire le test</DoTest>

                
            </IllustrationContainer>
      
      <HomeImg src={HomeIllustrationImg}/>

      
        </HomeIllustration>
        </HomeContainer>
    );
};

const save  = "bonjour"
export default Home;