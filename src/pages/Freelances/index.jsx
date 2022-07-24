

import Card from '../../components/Card';
import styled from 'styled-components'
import colors from '../../utils/style/color';
import { Link } from 'react-router-dom';




const PhrasingProfils = styled.p`
     font-family: Comfortaa;
     font-size: 31px;
     text-align: center;
     width : 40%;
     font-weight : bold;`

const SkillsNeed = styled.span`
    color : #5843E4`
const FreelancesContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items : center;
    `

const ProfilsContainer = styled.div`
      width : 90%;
      display : flex;
      flex-direction : column;
      align-items: center;
      justify-content : center;
      margin : 0 20px 0 20px;
      height: 700px;
      background-color: ${colors.backgroundLight};

`
const DiscoverProfils = styled(Link)`
        width : 317px;
        background-color : ${colors.thirdColor};
        height : 40px;
        color : ${colors.white};
        font-family : ${colors.secondFontFamily};
        text-decoration : none;
        border-radius: ${colors.corner};
        text-align: center;
        font-size: 20px;
        padding-top: 10px;
        
`

const SkillTitle =  styled.h3`
        color : ${colors.thirdColor};
       
      `
const SkillContainer = styled.div`
        font-family : ${colors.secondFontFamily};
        font-size: 20px;
        width : 700px;
        height : 370px;
`
const DescriptSkills = styled.p`
        color : ${colors.secondary};
`
const  Freelances = () => {
    return (
        <FreelancesContainer>
            <ProfilsContainer>
             <PhrasingProfils>
              Les compétences dont vous avez besoin : 
              <SkillsNeed>UX Design, frontend, backend</SkillsNeed>  
             </PhrasingProfils>
             <DiscoverProfils to="/profils">Découvrez nos profils</DiscoverProfils>

             <SkillContainer>
                <SkillTitle>UX Design</SkillTitle>
                 <DescriptSkills>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magnam et 
                    sequi reprehenderit ipsum voluptate nemo quae eaque Facere tenetur animi quasi minus sequi 
  
                 </DescriptSkills>
                <SkillTitle>Frontend</SkillTitle>
                  <DescriptSkills>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magnam et 
                    sequi reprehenderit ipsum voluptate nemo quae eaque Facere tenetur animi quasi minus sequi 
  
                  </DescriptSkills>
                <SkillTitle>Backend</SkillTitle>
                <DescriptSkills>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magnam et 
                    sequi reprehenderit ipsum voluptate nemo quae eaque Facere tenetur animi quasi minus sequi 
  
                </DescriptSkills>


             </SkillContainer>

            
       
            
        </ProfilsContainer>
        </FreelancesContainer>
    );
};



export default  Freelances;