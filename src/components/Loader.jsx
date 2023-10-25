import React from 'react';
import { SyncLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="spinner">
      <SyncLoader size={40} color="#CC9933" />
    </div>
  );
};

export default Spinner;
