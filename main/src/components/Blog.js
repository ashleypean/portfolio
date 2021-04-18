import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import { Link } from 'react-router-dom';

function Blog({ data }) {
  const {
    id, featuredImage, title, createDay, createMonth, filesource,
  } = data;
  const getShortMonth = (month) => month.slice(0, 3);
  // eslint-disable-next-line no-shadow
  const getNospaceTitle = (filesource) => {
    const tempArr = filesource.split('/');
    const fileName = tempArr[tempArr.length - 1];
    const getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link to={`blog/blog-details/${id}/${getNospaceTitle(filesource)}`}>
          <ProgressiveImage
            src={featuredImage}
            placeholder="/images/blog-image-placeholder.png"
          >
            {(src) => <img src={src} alt={title} />}
          </ProgressiveImage>
        </Link>
        <div className="mi-blog-date">
          <span className="date">{createDay}</span>
          <span className="month">{getShortMonth(createMonth)}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link to={`blog/blog-details/${id}/${getNospaceTitle(filesource)}`}>
            {title}
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default Blog;
