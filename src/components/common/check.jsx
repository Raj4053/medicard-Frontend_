import React from "react";

const Check = ({ name, label, value, error, ...rest }) => {
  return (
    <div className="form-check">
      <input
        id={name}
        name={name}
        checked={value}
        {...rest}
        type="checkbox"
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Check;
