import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google"
import App from "./App"; // Make sure to import your App component

// Render the App component to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // <GoogleOAuthProvider clientId='643005025731-d0kiljlbqnqqllto4s4ik3kqno87rfqb.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  {/* </GoogleOAuthProvider> */}
);
