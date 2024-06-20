import React from 'react';

function ButtonLink(props) {

  const { title, altText, btnSize, url } = props;

  return (
      <a href={url} target="_blank" title={altText} rel="noopener noreferrer">
        <button type="button" className={btnSize + " btn btn-primary"}>{title}</button>
      </a> 
  );
}

export default ButtonLink;