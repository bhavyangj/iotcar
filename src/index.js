import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";

import Layout from "./components/layout/Layout";
import { ContextProvider } from "./context";

const store = createStore(rootReducer);

document.title = "IoT Car Monitoring";

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ContextProvider>
				<Layout />
			</ContextProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
