/** @format */

import React from 'react';


import { Switch, Route } from "react-router-dom";
import ListProduct from "../../components/ListProduct";
import Single from "../../components/SingleProduct.js";



const Product = () => (
	<React.Fragment>
	<Switch>
	
	  <Route exact path="/products" component={ListProduct} />
	  <Route path="/products/:number" component={Single} />
	</Switch>
	</React.Fragment>
  );
  
  export default Product;
