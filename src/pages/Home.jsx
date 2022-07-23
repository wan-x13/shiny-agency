import React from 'react';
import styled from 'styled-components'
import {useState} from 'react'


const HomeContainer = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     flex-direction: column`;

const Balloon = styled.div`
     height: 100px;
     width: 100px;
     border-radius: 50px;
     background-color: #e20202;
     transform : scale(${({size})=>size})
     `


const Home = () => {

    const [size, setSize] = useState(1)
    return (
        <HomeContainer>
            <h1 onClick={()=> setSize(size + 0.1)}>Page d'accueil</h1>
            <Balloon size={size}/>
            
        </HomeContainer>
    );
};

const save  = "bonjour"
export default Home;