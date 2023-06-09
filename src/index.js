import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Auth0Provider
    domain="dev-6iyoy77dvebkf2vw.us.auth0.com"
    clientId="HZ69wj14SjBdTSLAaT9ZhU6l5gLEO9Vw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>

);

reportWebVitals();
