import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";
import ReviewsListItem from "./reviews-list-item";
import CreateReview from "./create-review";

class RiviewsList extends React.Component {
   
    render() {

        const reviews = this.props.stateFromReducer.currentReviews;

        if (reviews.length === 0)
            return this.noReviewsRender();

        return (

            <div className="reviews">

                <CreateReview reviews={reviews} productId={this.props.productId}/>

                <h3>Reviews</h3>
                <ul>
                    {reviews.map(function(review) {
                        return <ReviewsListItem key={review.id} review={review} />;
                    })}
                </ul>
            </div>
        );
    }


    componentWillMount() {
        this.props.getReviewsForProduct(this.props.productId);
    }

    noReviewsRender() {

        return (
            <div className="reviews">

                <CreateReview productId={this.props.productId}/>

                <h3>This product has no reviews</h3>
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
const RiviewsListConnected = connect(mapStateToProps, mapDispatchToProps)(RiviewsList);
export default RiviewsListConnected 
