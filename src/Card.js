import React from 'react';
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
                    <li>{bedrooms}</li>
                    <li>{bathrooms}</li>
                    <li>{carSpaces}</li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
