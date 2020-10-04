import React from "react";
import Chair from "../components/Chair";

export const Booking = () => {
  return (
    <div style={styles}>
      <Chair />
    </div>
  );
};

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "red",
  height: 500,
  width: 500,
};
