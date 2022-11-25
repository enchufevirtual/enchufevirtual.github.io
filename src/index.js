/*-----------------------------------------------------------------------------------

    Name: Enchufe Virtual
    Theme URI: @enchufevirtual
    Description: Open Source Projects - Enchufe virtual
    Author: @chendodev - chendo | developer and web designer
    Author URI: https://facebook.com/chendoio
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev

-----------------------------------------------------------------------------------*/
import React from 'react';
import ReactDom from "react-dom/client";
import App from '@/components/App/';
import '@/styles/style.scss';

const root = ReactDom.createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
