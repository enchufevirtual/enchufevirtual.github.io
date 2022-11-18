import { useContext, useEffect, useState } from "react";
import { faker } from '@faker-js/faker'
import { GlobalContext } from "@context/GlobalContext";

import { database } from "database/database";
import Card from "@containers/Card";

const Main = () => {
  const card = [] ;
  const d = []; // Description Save
  const { load, data } = useContext(GlobalContext);

  useEffect(() => {}, [data])

  data?.cards?.forEach(item => d.push(item.description));

  database.forEach((datos, index) => {
    card.push(<Card key={faker.datatype.uuid()} datos={datos} id={faker.datatype.uuid()} description={d[index]} />);
  });

  return (
    <div className={{myAnimation: load}} id="Main">
      <div className="title">Open Source <span>Projects</span></div>
      <div className="Main_content">
        {card}
      </div>
    </div>
  );
}

export default Main;
