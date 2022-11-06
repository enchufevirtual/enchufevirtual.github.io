import React from "react";
import { GlobalProvider } from "@context/GlobalContext";

import Header from "@components/Header/";
import Radio from "@components/Radio/";
import Main from "@containers/Main";

const App = () => {
    return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
        <Radio />
      </GlobalProvider>
    </>
    )
}

export default App;