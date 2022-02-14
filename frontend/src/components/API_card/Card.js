import React from 'react';
import PropTypes from 'prop-types';
import './card.css'

function Card(value)
 {
const{img,name,desc} =value;

  return (
      <div className='cards'>

          <img src={img}/>
          <span>{name}</span>
          <p>{desc}</p>

      </div>
  );

}

Card.propTypes = {
    img:PropTypes.string,
    name:PropTypes.string,
    desc:PropTypes.string
}

export default Card;