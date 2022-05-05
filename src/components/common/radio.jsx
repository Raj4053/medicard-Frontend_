import React from "react";

const Radio = ({ name, label, value, options, error, ...rest }) => {
  return (
    <div className="form-group col-4 my-3">
      <label className="me-2" htmlFor={name}>
        {label}
      </label>
        {options.map((option, index) => (
          <div key={index} className="form-check form-check-inline">
            <input
              value={option}
              name={name}
              checked={value === option}
              type="radio"
              {...rest}
            />
            <label>{option}</label>
          </div>
        ))}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Radio;
