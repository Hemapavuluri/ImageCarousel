import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    <li><FontAwesome name='bed' /><span>{bedrooms}</span></li>
                    <li><FontAwesome name='bath'/><span>{bathrooms}</span></li>
                    <li><FontAwesome name='car' /><span>{carSpaces}</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
