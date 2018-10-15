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
                    <li><FontAwesome
        name='bed'
        size='x'
      />{bedrooms}</li>
                    <li><FontAwesome
        name='bath'
        size='x'
      />{bathrooms}</li>
                    <li><FontAwesome
        name='car'
        size='x'
      />{carSpaces}</li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
