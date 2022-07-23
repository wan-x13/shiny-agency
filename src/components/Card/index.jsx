import React from 'react';
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/logo.png'


const  Card = ({label , title , picture}) => {
    return (
        <div style={{display:"flex",flexDirection:"column", padding:15}}>

            <span>{label}</span>
            <img src={picture} alt="freelance" hieght={80} width={80}/>
            <span>{title}</span>
            
        </div>
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