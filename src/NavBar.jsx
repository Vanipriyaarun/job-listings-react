import React from "react";

function NavBar(props) {
  return (
    <div className="filter">
      <ul>
        {props.catagories.map((item, index) => (
          <li key={index} className="filter-catagories">
            {item}
            <button onClick={() => props.removeOneFilter(item)}>X</button>
          </li>
        ))}
      </ul>
      <span className="clear" onClick={() => props.clearAllFilter()}>
        clear
      </span>
    </div>
  );
}

export default NavBar;
