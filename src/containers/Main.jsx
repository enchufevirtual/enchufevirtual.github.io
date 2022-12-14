import { useContext } from "react";
import { faker } from '@faker-js/faker'
import { GlobalContext }  from "../context/GlobalContext";

import { database } from "@/database/database";
import Card from "@/containers/Card";
import Options from "@/containers/Options";

const Main = () => {
  const card = [] ;
  const { load, globalValue, data } = useContext(GlobalContext);

  // validated categories && push cards
  if (globalValue == "CATEGORIES") {
    database.forEach(data => {
      card.push(<Card key={faker.datatype.uuid()} data={data} id={faker.datatype.uuid()} />);
    });
  } else {
    let db = database.filter(type => type.type == globalValue);
    db.forEach(data => {
      card.push(<Card key={faker.datatype.uuid()} data={data} id={faker.datatype.uuid()} />);
    });
  }

  return (
    <div className={{myAnimation: load}} id="Main">
      <div className="title"><p>{data.main.p}</p></div>
      <Options />
      <div className="Main_content">
        {card.length ? card : <p className="messageError">No results, try another category</p>}
      </div>
    </div>
  );
}

export default Main;
