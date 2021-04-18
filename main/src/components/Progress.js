import React from 'react';

function Progress({ title, percentage, isVisible }) {
  const winWidth = window.innerWidth;
  const progressQuery = () => {
    if (winWidth && winWidth > 767) {
      return (
        <span
          className="mi-progress-active"
          style={isVisible ? { width: `${percentage}%` } : { width: 0 }}
        />
      );
    }
    return (<span className="mi-progress-active" style={{ width: `${percentage}%` }} />);
  };
  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{title}</h6>
      <div className="mi-progress-inner">
        <div className="mi-progress-percentage">{`${percentage}%`}</div>
        <div className="mi-progress-container">
          {progressQuery()}
        </div>
      </div>
    </div>
  );
}

export default Progress;
