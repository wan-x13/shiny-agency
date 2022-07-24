import { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultPicture from '../../assets/logo.png';
import Card from "../../components/Card";
import colors from "../../utils/style/color";
import { Loader } from "../../utils/style/Atoms";


const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
];



const CardsContainer = styled.div`
        display: grid;
        gap: 24px;
        grid-template-rows: 350px 350px;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        `;

const  TitleSeach = styled.h2`
       
       font-size : 30px;
       font-weight: bold;

     `
const  TextHomeAgency = styled.p`
        color : ${colors.secondary};
        font-size: 20px;
        margin-top: 30px;
        `
const ProfilsContainer = styled.div`
        display: flex;
        flex-direction : column;
        justify-content : center;
        align-items: center;
     
`

const Profils = () => {

    const [freelancersList, setProfils] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(()=>{
        async function profilFetch(){

            setDataLoading(true)
         
            try {
                const response = await fetch("http://localhost:8000/freelances")
                const {freelancersList} = await response.json();
                setProfils(freelancersList)
                
            } catch (error) {
                console.log(error)
                
            }
            finally{
                setDataLoading(false)

            }

        }
        profilFetch()


    }, [])

    return (
        <ProfilsContainer>
            <TitleSeach>Trouvez votre prestataire</TitleSeach>
            <TextHomeAgency>  Chez Shiny nous réunissons les meilleurs profils pour vous.</TextHomeAgency>

    <CardsContainer>
        {isDataLoading ?  (  
           <Loader/> ): 
           (   
            freelancersList.map((profile, index)=>( 
            <Card
            
            key={`${profile.id}-${index}`}
            label ={profile.job}
            picture={profile.picture}
            title ={profile.name}
            />
         )) )
        
    }
           

            </CardsContainer>


            
        </ProfilsContainer>
    );
};

export default Profils;