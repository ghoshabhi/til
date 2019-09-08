import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import Log from "../Log";

import { logShape } from "../../common/propTypes";

export default function Logs(props) {
  const { logs } = props;
  return (
    <section className="logs">
      {logs.map(log => (
        <Log key={log.id} log={log} />
      ))}
    </section>
  );
}

Logs.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape(logShape)),
};

Logs.defaultProps = {
  logs: [],
};
