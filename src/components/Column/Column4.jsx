import React from "react";
import './Column4.css';

const Column4 = () => {
  return (
    <div>
      <div style={{ flex: "1 0 60%", height: "auto", padding: "5px",width:'650px' }}>
        <a className="col1-a" href="/">
          <div className="item_image">
            <div className="item_video" style={{transform: "translate3d(0px, 21.3647px, 0px)"}}>
             
              <img
              src="https://api.awsmd.com/uploads/img_04_47445bbcac.png"
              alt="Item Image"
              
            />
            
            </div>
          </div>
          <span style={{transform: "translate(-50%,100%)", opacity: "1"}}></span>
          <div>
            <div className="item_info">
              <p className="item_item">Web Application</p>
              <p className="item_item_1">Full-cycle</p>
            </div>
            <div style={{flexGrow: "1", paddingInline: "25px 15px"}}>
              <h3>Contemprary Interface Design for E-commerce Marketplace with shoping Dashboard</h3>
              <p>
                Apr 11, 2023
                <span></span> Full-cycle{" "}
              </p>
            </div>
            <div className="item_link">
              <svg
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.09375 6.229H17.4467M17.4467 6.229L12.4467 1.229M17.4467 6.229L12.4467 11.229"
                  data-stroke="true"
                ></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Column4;