import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router";

export default class ProductItem extends React.Component {

    render() {

        const linkPath = "/product/" + this.props.product.id;
  
        return (
              <li>
                  <Link to={linkPath} >
                      <img src={this.props.product.image}/>
                      <span>{this.props.product.title}</span>
                  </Link>
              </li>
        );
    }

}