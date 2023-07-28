import React ,{useState}from 'react'

const RightBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#000000' : '#ffff',
    color: isHovered?'#ffff':'#000000',
    padding: "15px 27px 15px 17px", 
    border: "1px solid #242424", 
    boxShadow: "inset 0 0 0 1px #242424", 
    background: "transparent", 
    borderRadius: "40px", 
    display: "flex", 
    alignItems: "center", 
    whiteSpace: 'nowrap'
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    
    <div style={{paddingLeft: "25px"}}>
      <h2 style={{maxWidth: "9.375em", fontWeight: "400", fontSize: "60px", lineHeight: "1.125",  letterSpacing: "-.03em", color: "#242424"}}>We don't do cookie-cutter solutions</h2>
      <div className='d-flex align-items-center mt-4' style={{fontWeight: "500", fontSize: "16px", lineHeight: "1.2", fontFamily: "Inter"}}>
        <button  style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>  <span data-class="text" style={{whiteSpace: "nowrap", userSelect: 'none', display: "flex", flexDirection: "column", height: "1.2em", overflow: "hidden", position: "relative", zIndex: "3"}}>
           
            {isHovered ?<span>Check Full Portfolio→</span>:<span>Check Full Portfolio  •</span>  }
        </span>
        </button>
        <button style={{marginLeft: "28px", letterSpacing: "-.02em",background: "transparent",color: "rgba(36, 36, 36, .7)", border: "none",outline: "none", boxShadow: "none",}}>Schedule Meeting</button>
      </div>
    </div>
    
  )
}

export default RightBox
