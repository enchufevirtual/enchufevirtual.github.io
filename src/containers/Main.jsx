import { useContext } from "react";
import { faker } from '@faker-js/faker'
import { GlobalContext } from "@context/GlobalContext";

import { database } from "database/database";
import Card from "@containers/Card";

const Main = () => {
  const card = [] ;
  const { load } = useContext(GlobalContext);

  database.forEach((data) => {
    card.push(<Card key={faker.datatype.uuid()} data={data} id={faker.datatype.uuid()} />);
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
