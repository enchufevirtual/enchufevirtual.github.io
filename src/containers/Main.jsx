import React from "react";

import { database } from "@public/database";
import Card from "@containers/Card";

const Main = () => {
  const card = [];

  database.forEach((data) => {
    card.push(<Card key={data.id} data={data} />);
  });

  return (
    <div id="Main">
      {card}
    </div>
  );
}

export default Main;