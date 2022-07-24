import { Link } from "react-router-dom";
import styled from "styled-components"
import colors from '../../utils/style/color'
import darkLogo from '../../assets/dark-logo.png'


const StyledLink = styled(Link)`
    padding : 10px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    text-align: center;

    &:last-child{
        background-color: #5843E4;
        border-radius: 29px;
        width: 174px;
        color : #FFFFFF;
        text-align: center
    }

    ${(props)=>
        props.$isFullLink &&
        `color: white;
         border-radius: 30px;
         background-color: ${colors.primary}`
    } `

const HeaderImg = styled.img`
    height : 70px
    text-align: center`
   
const StyleHeader = styled.header`
    display :flex;
    justify-content: space-between ;
  `

  
const NavBar = styled.nav`
     
     width : 500px;
     display : flex;
     justify-content: space-around;
     align-items : center;
     margin-right: 35px` 

function Header(){

    return(
        <StyleHeader>
              <Link to="/">
                   <HeaderImg src= {darkLogo}/>
              </Link>
            

          <NavBar>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/freelances">Profils</StyledLink>
            <StyledLink to="/survey/1">Faire le test</StyledLink>
          </NavBar>


        </StyleHeader>

     
    )
}

export default Header