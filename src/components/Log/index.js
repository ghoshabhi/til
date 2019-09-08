import React from "react";

import "./styles.css";

export default function Log(props) {
  const { log } = props;
  return <div style={{ color: "white" }}>Log: {JSON.stringify(log)}</div>;
}
