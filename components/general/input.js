import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={props?.labelClass}></label>
      <input {...props} ref={ref} />
    </div>
  );
});

export default Input;
