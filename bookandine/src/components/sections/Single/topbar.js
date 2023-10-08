import React from 'react';

function ResponsiveTopbar() {
  return (
    <div className="responsive-topbar">
      <div className="select-wrp">
        <select data-placeholder="Feel Like Eating">
          <option>FEEL LIKE EATING</option>
          <option>Burger</option>
          <option>Pizza</option>
          <option>Fried Rice</option>
          <option>Chicken Shots</option>
        </select>
      </div>
      <div className="select-wrp">
        <select data-placeholder="Choose Location">
          <option>CHOOSE LOCATION</option>
          <option>New York</option>
          <option>Washington</option>
          <option>Chicago</option>
          <option>Los Angeles</option>
        </select>
      </div>
    </div>
  );
}

export default ResponsiveTopbar;
