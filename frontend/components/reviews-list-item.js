import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export default class ReviewItem extends React.Component {

    render() {
  
        return (
              <li>
                  <span className="author">{this.props.review.author}</span>
                  <span className="rate">Rate: <span className="rate-value">{this.props.review.rate}</span></span>
                  <p className="comment">{this.props.review.comment}</p>
              </li>
        );
    }

}