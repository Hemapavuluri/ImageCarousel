import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`}>
            <img src={picture} alt={city} />
            <div>
                <span>{index+1}</span>
                <p>
                    {city}<br />
                    {address}
                </p>
                <ul>
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
