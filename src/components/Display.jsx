import React from 'react'
import Column1 from './Column/Column1';
import Column2 from './Column/Column2';
import Column3 from './Column/Column3';
import Column4 from './Column/Column4';
import Column5 from './Column/Column5';

const Display = () => {
  return (
    <div>
      <ul style={{marginTop: "85px",marginLeft:'10px'}}>
        <li className="d-flex" style={{margin:"0px -5px"}}>
            <Column1 />
            <Column2/>

        </li>
        <li className="d-flex" style={{margin:"0px -5px"}}>
            <Column3 />
            <Column4/>

        </li>
        <li className="d-flex" style={{margin:"0px -5px"}}>
            <Column5 />
            

        </li>
       
      </ul>
    </div>
  )
}

export default Display