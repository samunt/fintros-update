import * as React from 'react';
import App from 'next/app';
import '../styles/globals.css'
import {ThemeProvider} from "../contexts/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}
