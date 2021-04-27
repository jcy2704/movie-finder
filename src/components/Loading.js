import React from 'react';

const Loading = () => (
  <div className="nothing">
    <div className="loading d-flex justify-content-center align-items-center">
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

export default Loading;
