import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ nothing }) => (

  <div className={`${nothing ? 'nothing' : ''}`}>
    <div className="loading d-flex justify-content-center align-items-center">
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

Loading.propTypes = {
  nothing: PropTypes.bool.isRequired,
};

export default Loading;
