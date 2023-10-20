import React from "react";
import cardsList from "./CardList";
import Cards from "./cards";
function Cardy() {
  return (
    <div>
      {cardsList.map((e) => (
        <Cards e={e} />
      ))}
    </div>
  );
}

export default Cardy;
