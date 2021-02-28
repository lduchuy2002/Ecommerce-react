import React from "react";

import "./LoadMore.scss";
function LoadMore({ HandleFunction, Text }) {
  return (
    <div className="load-more" onClick={HandleFunction}>
      {Text}
    </div>
  );
}

export default LoadMore;
