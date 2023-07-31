import React from "react";  
import {ThreeDots} from  'react-loader-spinner';
import "./Weather.css";


export default function LoadingContainer () {
  return (
      <div className="loading-container">      
        <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#0D6AF4" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    )
}