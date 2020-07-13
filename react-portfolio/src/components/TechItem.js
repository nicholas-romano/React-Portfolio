import React from 'react';

function TechItem(props) {

  const image = props.techImg;
  const name = props.techName;

  return (
    <div className="tech-icons">
        <img src={process.env.PUBLIC_URL + "images/icons/" + image} width="70" alt={name} />
        <br />
        {name}
    </div>
)
}

export default TechItem;