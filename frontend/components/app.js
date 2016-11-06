import React, { Component } from "react";
import ProductsList from "./products-list";
import Header from "./header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";
import "../common/styles/scrollbar.css";

import {NOT_SORTED, SORTED_ASC, SORTED_DESC} from "../../backend/config/constants"; 

class ProductsListtApp extends Component {
   
    constructor(props) {
        super(props);
        this.sortingByTitle = this.sortingByTitle.bind(this)
    }

    render() {
        return (
            <div>
                <Header/>
                <div id="main-content-wrapper">

                    <h2 className="main-title">Products</h2>
                    <select id="sorting-by-title" onChange={this.sortingByTitle}>
                         <option className="not-display">Sorting by Title</option>
                         <option value={NOT_SORTED}>None</option>
                         <option value={SORTED_ASC}>Ascending</option>
                         <option value={SORTED_DESC}>Descending</option>
                    </select>
                    <ProductsList/>
                </div>
            </div>
        );
    }

    sortingByTitle() {
        this.props.setSortingByTitle(parseInt(document.querySelector("#sorting-by-title").value));
    }

    componentWillMount() {
        this.props.getAllProducts();
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const ProductsListAppConnected = connect(mapStateToProps, mapDispatchToProps)(ProductsListtApp);
export default ProductsListAppConnected