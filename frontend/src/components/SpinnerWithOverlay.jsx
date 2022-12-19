import React from "react";
import Spinner from "./Spinner";

function SpinnerWithOverlay() {
  return (
    <div className="loadingSpinnerContainer">
      <Spinner />
    </div>
  );
}

export default SpinnerWithOverlay;
