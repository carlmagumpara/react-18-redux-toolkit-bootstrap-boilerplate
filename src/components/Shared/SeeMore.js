import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SeeMore({ string = '', count = 30, onClick = null, textStyle= {}, textClass = '' }) {
  const [truncate, setTruncate] = useState(true);

  if (string.length < count) return string;

  return (
    <span style={textStyle} className={textClass}>
      {truncate ? (
        <>
          {`${string.substring(0, count)} `}
          <a
            className="text-muted"
            onClick={event => {
              event.preventDefault();
              if (onClick) {
                onClick();
              } else {
                setTruncate(prevState => !prevState);
              }
            }}
            hreh="#">
            See More...
          </a>
        </>
      ) : (
        <>
          {`${string} `}
          <a
            className="text-muted"
            onClick={event => {
              event.preventDefault();
              if (onClick) {
                onClick();
              } else {
                setTruncate(prevState => !prevState);
              }
            }}
            hreh="#">
            Hide...
          </a>
        </>
      )}
    </span>
  );
}

export default SeeMore;