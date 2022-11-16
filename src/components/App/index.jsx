import React from "react";
import { GlobalProvider } from "@context/GlobalContext";

import Hero from "@components/Hero/";
import Header from "@components/Header/";
import Radio from "@components/Radio/";
import Main from "@containers/Main";
import Loader from "@components/loader/";

const App = () => {
    return (
    <>
      <GlobalProvider>
        <Hero />
        <Loader />
        <Header />
        <Main />
        <Radio />
      </GlobalProvider>
    </>
    )
}

export default App;