import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/css/vendors_css.css";
import "./Assets/css/style.css";
import "./Assets/css/skin_color.css";
// import "./Assets/css/style_rtl.css";
// import "./Assets/css/color_theme.css";
// import "./index.css";



import "./Assets/js/vendors.min.js"
import "./Assets/js/pages/chat-popup.js"
import "./Assets/icons/feather-icons/feather.min.js"
import "./Assets/vendor_components/apexcharts-bundle/dist/apexcharts.js"
import "./Assets/vendor_components/progressbar.js-master/dist/progressbar.js" 
import "./Assets/vendor_components/jquery-ui/jquery-ui.js"
// import "./Assets/js/template.js"
import "./Assets/js/pages/dashboard2.js"
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
