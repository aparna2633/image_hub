import React from "react";
import useStorage from "../hooks/useStorage";
import { useEffect } from "react";

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
  
    useEffect(() => {
      console.log("Progress:", progress);
      console.log("URL:", url);
      if (url && progress >= 100) {
        setFile(null);
      }
    }, [url, progress, setFile]);
  
    return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
  };
  
  export default ProgressBar;
  