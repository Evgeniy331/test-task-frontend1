import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/appActions";
import sweetalert from "sweetalert";
import "../common/styles/sweetalert.css";
import {COMMENT_MIN_LENGTH} from "../../backend/config/constants";

import cookie from "react-cookie";

class CreateReview extends React.Component {

    constructor(props) {
        super(props);
        this.sendReview = this.sendReview.bind(this)
    }
   
    render() {

        return (

            <div className="create-review">
                
                    <div className="rating">
                        <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Perfect!">5 stars</label>
                        <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                        <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="It could be better">3 stars</label>
                        <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Not the worst but very close">2 stars</label>
                        <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Very bad">1 star</label>
                    </div>

                    <textarea name="comment" placeholder="Type your review..." defaultValue=""></textarea>
                    <button onClick={this.sendReview}>Submit Review</button>

            </div>
        );
    }

    sendReview() {

        const userId = cookie.load("current-user-id");
        
        if (userId === undefined || userId === null) {
            sweetalert({
                 title: "To send review you need to first go into your account",
                 type: "warning"
             });
            return;
        }
            
        let rating = document.querySelector("input[name=rating]:checked");

        if (!rating || rating === null || rating === undefined ) {
            sweetalert({
                 title: "Please select an assessment",
                 type: "warning"
            });
            return;
        }

        rating = rating.value;

        let comment = document.querySelector("textarea[name=comment]").value;

        if (comment.length < COMMENT_MIN_LENGTH) {
            sweetalert({
                 title: "Comment cannot be less than " + COMMENT_MIN_LENGTH + " characters!",
                 type: "warning"
            });
            return;
        }

        let isExist = false;

        const {reviews} = this.props;

        if (reviews != null && reviews != undefined) {

            for (let i = 0; i < reviews.length; i++)
                if (reviews[i].authorId === userId) {
                    isExist = true;
                    break;
                }
        }

        document.querySelector("textarea[name=comment]").value = "";
        document.querySelector("input[name=rating]:checked").checked = false;

        if (isExist) {
            
            sweetalert({
                 title: "You can't send more than 1 review for one product",
                 type: "warning"
            });

            return;
        }

        this.props.setUsername(cookie.load("current-username"));
        
        this.props.submitReview({text: comment, rate: rating, idUser: userId, idEntry: this.props.productId});
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
const CreateReviewConnected = connect(mapStateToProps, mapDispatchToProps)(CreateReview);
export default CreateReviewConnected 
