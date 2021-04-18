import React from 'react';

function Testimonial(props) {
  const { content: { content, author: { name, designation } } } = props;
  return (
    <div className="mi-testimonial-slideritem">
      <div className="mi-testimonial">
        <div className="mi-testimonial-content">
          <p>
            {content}
          </p>
        </div>
        <div className="mi-testimonial-author">
          <h5>{name}</h5>
          <h6>{designation}</h6>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
