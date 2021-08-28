import React, { useState, useEffect } from "react";

function CleanUp() {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      <h1>Window</h1>
      <h2>{width}</h2>
    </>
  );
}

export default CleanUp;
