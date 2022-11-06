import React from "react";
import { GlobalProvider } from "@context/GlobalContext";

import Header from "@components/Header/";
import Radio from "@components/Radio/";
import Main from "@containers/Main";
import Loader from "@components/loader/";

const App = () => {
    return (
    <>
      <GlobalProvider>
        <Loader />
        <Header />
        <Main />
        <Radio />
      </GlobalProvider>
    </>
    )
}

export default App;