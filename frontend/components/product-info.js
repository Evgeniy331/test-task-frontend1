import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "./header";
import * as actions from "../actions/appActions";
import ReviewsList from "./review-list";

class ProductInfo extends React.Component {

    render() {

        let productId = this.props.routeParams.id;
        let products = this.props.stateFromReducer.products;
        let product = {};

        for (let i = 0; i < products.length; i++) {
    
            if (products[i].id == productId) {

                product = Object.assign({}, products[i], {});
                break;
            }
        }

        //if product not found
        if (JSON.stringify(product) === JSON.stringify({}))
            return this.notFoundRender();

        return (
            <div>
                <Header/>
                <div id="main-content-wrapper" >
                    <div className="product-info">
                        <img src={product.image}/>
                        <div className="description">
                            <h2>{product.title}</h2>
                            <p>{product.text}</p>
                        </div>
                    </div>
                    <ReviewsList productId={product.id}/>
                </div>   
            </div>
        );
    }

    notFoundRender() {
        return (
            <div>
                <Header/>
                <div id="main-content-wrapper">
                    <h1 className="not-found">Product not found!</h1>
                </div>
            </div>
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
const ProductInfoConnected = connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
export default ProductInfoConnected