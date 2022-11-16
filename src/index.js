/*-----------------------------------------------------------------------------------

    Name: Enchufe Virtual
    Theme URI: @enchufevirtual
    Description: Open Source Projects - Enchufe virtual
    Author: @chendoio - chendo | developer and web designer
    Author URI: https://facebook.com/chendoio
    Github: https://github.com/chendoio
    Youtube: https://youtube.com/chendoio

-----------------------------------------------------------------------------------*/
import React from 'react';
import ReactDom from "react-dom/client";
import App from '@components/App/';
import '@styles/style.scss';

const root = ReactDom.createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)