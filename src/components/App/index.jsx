import React from "react";
import { GlobalProvider } from "@/context/GlobalProvider";

import Hero from "@/components/Hero/";
import Header from "@/components/Header/";
import Radio from "@/components/Radio/";
import Main from "@/containers/Main";
import Loader from "@/components/loader/";
import Footer from "@/components/Footer";

const App = () => {
    return (
    <>
      <GlobalProvider>
        <Hero />
        <Loader />
        <Header />
        <Main />
        <Radio />
        <Footer />
      </GlobalProvider>
    </>
    )
}

export default App;
