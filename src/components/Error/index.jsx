import styled from "styled-components";
import Error404 from "../../assets/404.jpg"

const ErrorImg = styled.img`
     width: 800px;
     height: 600px`;
const ErrorContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     color: #2F2E41;
     font-size: 30px;

`
const Error = () => {
    return (
        <ErrorContainer>
             <h1>Oups!</h1>
             <ErrorImg src={Error404}/>
             <p>Il semblerait qu’il y ait un problème</p>
            
        </ErrorContainer>
    );
};

export default Error;