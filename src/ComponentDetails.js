import React from 'react';
import { faker } from '@faker-js/faker';

const ComponentDetails = props => {
    return(
        <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={faker.image.avatar()}/>
    </a>
    <div className="content">
      <a className="author">{props.author}</a>
      <div className="metadata">
        <span className="date">{props.time}</span>
      </div>
      <div className="text">
        {props.blog}
      </div>
      
    </div>
           
    </div>

    );
};

export default ComponentDetails;
