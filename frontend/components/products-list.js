import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProductsListItem from "./products-list-item";
import * as actions from "../actions/appActions";

class ProductsList extends React.Component {
   
    render() {

    const { visibleProducts } = this.props.stateFromReducer;

        return (
              <ul className="product-list">
                {visibleProducts.map(function(product) {
                    return <ProductsListItem key={product.id} product={product} />;
                })}
              </ul>
        );
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
const ProductsListConnected = connect(mapStateToProps, mapDispatchToProps)(ProductsList);
export default ProductsListConnected 
