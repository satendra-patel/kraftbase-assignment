import React from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const DetailSection = () => {
  return (
    <div>
    <header className='d-flex mt-3' style={{justifyContent: "space-between"}}>
    <LeftBox />
    <RightBox />
    </header>
    </div>
  );
};

export default DetailSection;
