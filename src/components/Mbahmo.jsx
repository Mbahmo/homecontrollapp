import React, { useState } from 'react';
const Mbahmo = () => {
    const [ is_dark, setIsDark ] = useState(false);
  
    const containerStyle = { 
      display: "flex", 
      height: "100vh", 
      alignItems: "center",
      justifyContent: "center", 
      flexDirection: "column",
      color: is_dark ? "red" : "blue",
    };
  
    const buttonStyle = {
      padding: "8px",
      background: "white",
      borderRadius: "8px",
    }
  
    function toogleMode() {
      setIsDark(!is_dark);
    }
  
    return (<div style={containerStyle}>
      <h2>Anthony Lee</h2>
      <button style={buttonStyle} onClick={toogleMode}>{
          is_dark ? "https://web.facebook.com/profile.php?id=100009797193405" : "github.com/Mbahmo"
          }</button>
    </div>)
  }

export default Mbahmo; 