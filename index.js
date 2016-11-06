import React from "react"
import { render } from "react-dom"
import App from "./frontend/containers/app"
import ProductsApp from "./frontend/components/app.js"
import ProductInfo from "./frontend/components/product-info.js"
import {IndexRoute, Route, Router, browserHistory} from "react-router";

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import reducer from "./frontend/reducers/appReducer"

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    (<Provider store={store}>
    	<Router history={browserHistory}>
	        <Route path="/" component={App}>
		         <IndexRoute component={ProductsApp} />
             <Route path="product/:id" component={ProductInfo} />
	        </Route>

	    </Router>
    </Provider>)
    , document.getElementById("root")
)
