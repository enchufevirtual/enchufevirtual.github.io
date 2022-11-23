import { useContext, useEffect } from "react";
import { faker } from '@faker-js/faker'
import { GlobalContext } from "@context/GlobalContext";

import { database } from "@database/database";
import Card from "@containers/Card";
import Options from "@containers/Options";

const Main = () => {
  const card = [] ;
  const d = []; // Description Save
  const { load, data, category } = useContext(GlobalContext);

  useEffect(() => {}, [data])

  data?.cards?.forEach(item => d.push(item.description));

  // validated categories && push cards
  if (category == "CATEGORIES" || category == "LIBRARY" || !category) {
    database.forEach((datos, index) => {
      card.push(<Card key={faker.datatype.uuid()} datos={datos} id={faker.datatype.uuid()} description={d[index]} />);
    });
  } else {
    let db = database.filter(type => type.type == category);
    db.forEach((datos, index) => {
      card.push(<Card key={faker.datatype.uuid()} datos={datos} id={faker.datatype.uuid()} description={d[index]} />);
    });
  }
  return (
    <div className={{myAnimation: load}} id="Main">
      <div className="title">Open Source <span>Projects</span></div>
      <Options />
      <div className="Main_content">
        {card}
      </div>
    </div>
  );
}

export default Main;
