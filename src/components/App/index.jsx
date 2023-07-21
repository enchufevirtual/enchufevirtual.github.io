import React from "react";
import { GlobalProvider } from "@/context/GlobalProvider";

import Hero from "@/components/Hero/";
import Header from "@/components/Header/";
import Main from "@/containers/Main";
import Loader from "@/components/loader/";
import Footer from "@/components/Footer";
import { ContainerLayout } from "@/layout/ContainerLayout"

const App = () => {
    return (
    <>
      <GlobalProvider>
        <ContainerLayout>
          <Hero />
          <Loader />
          <Header />
          <Main />
          <Footer />
        </ContainerLayout>
      </GlobalProvider>
    </>
    )
}

export default App;
