
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from '../utils/style/Atoms';
import colors from '../utils/style/color';


const ProfilsContainer = styled.div`
        display: flex;
        flex-direction : column;
        justify-content: center;
        align-items : center;
        height: 400px;
`
const ButtonAnswer = styled.button`
      width : 291px;
      border-radius : 31px;
    //   border : 2px solid ${colors.primary};
      background-color: ${colors.backgroundLight}
      height : 96px;
      font-weight : bold;
      color :#2F2E41;
      font-size: 25px;
      margin : 20px;
      border : none;

      &:hover{
        cursor: pointer;
      }
      `
const ButtonContainer = styled.div`
      display: flex;
      justify-content: space-between;
      height: 96px;
     
      `
const LinkNext = styled.div`
      display: flex;
      align-items: center;
      margin : 30px`
const LinkTestButton = styled(Link)`
      padding : 30px;
      color: #2F2E41`;



const Survey = () => {
    const { questionNumber } = useParams()
    const questionNumbInt = parseInt(questionNumber)
    const prevQuestion = questionNumbInt === 1 ? 1 : questionNumbInt - 1
    const nextQuestion = questionNumbInt + 1;
    const [surveyData, setSurveyData] = useState({});
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)
    // useEffect(()=>{
    //     setDataLoading(true)
    //     fetch("http://localhost:8000/survey")
    //     .then(response=>response.json())
    //     .then(({surveyData})=> {
    //         setSurveyData(surveyData)
    //         setDataLoading(false)
    //     })
    //     .catch(error => console.log(error))
    // },[]);

    useEffect(()=>{

        async function fetchSurvey(){
            setDataLoading(true)
            try {
                const response = await fetch("http://localhost:8000/survey");
                const {surveyData} = await response.json();
                setSurveyData(surveyData)
            } catch (error) {
                console.log(error)
                setError(true)    
            }
            finally{
                setDataLoading(false)
            }
        }
        fetchSurvey()
    },[])

    return (
        <ProfilsContainer>
            <h2>Question {questionNumber}</h2>

            {isDataLoading ? (
                <Loader/>
            ) : (   
                <p>{surveyData[questionNumber]}</p>
            )}

            <ButtonContainer>
                <ButtonAnswer>Oui</ButtonAnswer>
                <ButtonAnswer>Non</ButtonAnswer>
            </ButtonContainer>
           <LinkNext>
              
           <LinkTestButton to={`/survey/${prevQuestion}`}>Précédent</LinkTestButton>
            {surveyData[questionNumbInt+ 1] ? (

               <LinkTestButton to={`/survey/${nextQuestion}`}>Suivant</LinkTestButton>
            ) : (
              <LinkTestButton to='/survey/results'>Résultats</LinkTestButton>  
            )}
           
           </LinkNext>
          

        </ProfilsContainer>
    );
};

export default Survey;