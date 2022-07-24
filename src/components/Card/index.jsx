import React from 'react';
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/logo.png'
import styled from 'styled-components'
import colors from '../../utils/style/color';


const CardLabel = styled.span`
        color: #5843e4;
        font-size: 22px;
        font-weight: bold;`

const CardImage = styled.img`
       height : 80px;
       width:80px;
       border-radius: 50%;`

const CardWrapper = styled.div`
      display :flex;
      flex-direction: column;
      align-items: center;
      justify-content : center;
      gap: 30px;
     
      background-color: ${colors.backgroundLight};
      border-radius: 30px;
      width: 350px;
      height: 350px;
      transition: 200ms;
      &:hover{
         cursor: pointer;
         box-shadow: 2px 2px 10px #e2e3e9
      }`     
const  Card = ({label , title , picture}) => {
    return (
        <CardWrapper >

            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{title}</span>
            
        </CardWrapper>
    );
};

Card.propTypes ={
    label : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    title: "",
    label : "",
    picture : DefaultPicture
}
export default  Card;