import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";

import { database } from "@public/database";
import Card from "@containers/Card";

const Main = () => {
  const card = [];
  const { load } = useContext(GlobalContext);

  database.forEach((data) => {
    card.push(<Card key={data.id} data={data} />);
  });

  return (
    <div className={{myAnimation: load}} id="Main">
      <div className="title">Open Source Projects</div>
      <div className="Main_content">
        {card}
      </div>
    </div>
  );
}

export default Main;