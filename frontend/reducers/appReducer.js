import {
    PRODUCTS_FILTER,
    GET_ALL_PRODUCTS_REQUEST_ERROR,
    RECEIVED_ALL_PRODUCTS,
    GET_REVIEWS_FOR_PRODUCT_REQUEST_ERROR,
    RECEIVED_REVIEWS_FOR_PRODUCT,
    GET_ALL_USERNAMES_REQUEST_ERROR,
    RECEIVED_ALL_USERNAMES,
    NEW_USER_WAS_CREATED,
    CREATE_NEW_USER_REQUEST_ERROR,
    LOGIN_SUCCESSFUL,
    LOGIN_REQUEST_ERROR,
    LOGOUT_SUCCESSFUL,
    LOGOUT_REQUEST_ERROR,
    REVIEW_SUCCESSFULLY_SUBMITTED,
    SUBMIT_REVIEW_REQUEST_ERROR,
    SET_USERNAME,
    WRONG_PASSWORD_MESSAGE_WAS_DISPLAYED,
    SET_SORTING_BY_TITLE
} from "../actions/appActions";

import {NOT_SORTED, SORTED_ASC, SORTED_DESC} from "../../backend/config/constants";

const initialState = {
    products: [],
    visibleProducts: [],
    currentReviews: [],
    currentUsername: "",
    usernames: [],
    logged: false,
    wrongPasswordEntered: false
};

export default function appReducer(state = initialState, action) {
    
    switch (action.type) {

        case SET_SORTING_BY_TITLE: {
           
           const {data} = action;

           return Object.assign({}, state, {
                visibleProducts: updateProducts(state.products, data)
            })
        }

        case WRONG_PASSWORD_MESSAGE_WAS_DISPLAYED: {

           return Object.assign({}, state, {
                wrongPasswordEntered: false
            })
        }

        case REVIEW_SUCCESSFULLY_SUBMITTED: {

            const {data} = action;

            let reviews = [];
            let review = {};

            for (let i = 0; i < state.currentReviews.length; i++) 
                reviews.push(state.currentReviews[i]);

            review.id = data._id;
            review.comment = data.text;
            review.rate = data.rate;
            review.author = state.currentUsername;
            review.authorId = data.idUser;

            reviews.push(Object.assign({}, review));    
            
            return Object.assign({}, state, {
                currentReviews: reviews
            })
            
        }

        case SET_USERNAME: {


            const {data} = action;
            
            return Object.assign({}, state, {
                currentUsername: data
            })
        }

        case LOGOUT_SUCCESSFUL: {

            const {data} = action;

            let logged = true;

            if (data.success)
                logged =false;
            
            return Object.assign({}, state, {
                logged: logged
            })
        }

        case LOGIN_SUCCESSFUL: {

            const {data} = action;

            let logged = false;
            let wrongPasswordEntered = false;

            if (data.success)
                logged = true;
            else
                wrongPasswordEntered = true;
            
            return Object.assign({}, state, {
                logged: logged,
                wrongPasswordEntered: wrongPasswordEntered
            })
        }

        case NEW_USER_WAS_CREATED: {

            const {data} = action;

            let usernames = [];

            for (let i = 0; i < state.usernames.length; i++)
                usernames.push({username: state.usernames[i].username});

            usernames.push({username: data.username});
            
            return Object.assign({}, state, {
                usernames: usernames
            })
        }

         case RECEIVED_ALL_USERNAMES: {

            const {data} = action;
            
            return Object.assign({}, state, {
                usernames: data
            })
        }

        case RECEIVED_REVIEWS_FOR_PRODUCT: {

            const {data} = action;

            let reviews = [];
            let review = {};

            for (let i = 0; i < data.length; i++) {
                review.id = data[i]._id;
                review.comment = data[i].text;
                review.rate = data[i].rate;
                review.author = data[i].idUser.username;
                review.authorId = data[i].idUser._id;
                reviews.push(Object.assign({}, review));
            }           
            
            return Object.assign({}, state, {
                currentReviews: reviews
            })
        }

        case RECEIVED_ALL_PRODUCTS: {

            const {data} = action;
            
            let newProducts = [];

            for (let i = 0; i < data.length; i++) 
                newProducts.push(Object.assign({}, data[i], {id: data[i]._id}));
            

             return Object.assign({}, state, {
                products: newProducts,
                visibleProducts: newProducts
            })
        }

        case SUBMIT_REVIEW_REQUEST_ERROR: {

            console.log("SUBMIT_REVIEW_REQUEST_ERROR");

            return state;
        }

        case LOGOUT_REQUEST_ERROR: {

            console.log("LOGOUT_REQUEST_ERROR");

            return state;
        }

        case LOGIN_REQUEST_ERROR: {

            console.log("LOGIN_REQUEST_ERROR");

            return state;
        }

        case CREATE_NEW_USER_REQUEST_ERROR: {

            const {data} = action;

            console.log("CREATE_NEW_USER_REQUEST_ERROR");

            return state;
        }

        case GET_REVIEWS_FOR_PRODUCT_REQUEST_ERROR: {

            const {data} = action;

            console.log("GET_REVIEWS_FOR_PRODUCT_REQUEST_ERROR");

            return state;
        }

        case GET_ALL_USERNAMES_REQUEST_ERROR: {

            const {data} = action;

            console.log("GET_ALL_USERNAMES_REQUEST_ERROR");

            return state;
        }

        case GET_ALL_PRODUCTS_REQUEST_ERROR: {

            const {data} = action;

            console.log("GET_ALL_PRODUCTS_REQUEST_ERROR");

            return state;
        }

        default: {
            return state;        
        }
    }
}

function updateProducts(products, sortingByTitle) {
    
    //get copy of products
    let copyProducts = JSON.parse(JSON.stringify(products));

    if (sortingByTitle === SORTED_ASC) 
        copyProducts.sort(function(a, b) {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;
        });
    
    if (sortingByTitle === SORTED_DESC) 
        copyProducts.sort(function(a, b) {
            if(a.title < b.title) return 1;
            if(a.title > b.title) return -1;
            return 0;
        });

    return copyProducts;
}