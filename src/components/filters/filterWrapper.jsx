import React, { Children } from "react";
import { DelimiterFilter } from "./filters";

function FilterWrapper(props) {
  const {children} = props;
  
  return (
    <div>
      {children}
    </div>
  )
}

export default FilterWrapper;