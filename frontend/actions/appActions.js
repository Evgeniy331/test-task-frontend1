import axios from "axios";

export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
export const GET_ALL_PRODUCTS_REQUEST_ERROR = "GET_ALL_PRODUCTS_REQUEST_ERROR";
export const RECEIVED_ALL_PRODUCTS = "RECEIVED_ALL_PRODUCTS";
export const GET_REVIEWS_FOR_PRODUCT_REQUEST = "GET_REVIEWS_FOR_PRODUCT_REQUEST";
export const GET_REVIEWS_FOR_PRODUCT_REQUEST_ERROR = "GET_REVIEWS_FOR_PRODUCT_REQUEST_ERROR";
export const RECEIVED_REVIEWS_FOR_PRODUCT = "RECEIVED_REVIEWS_FOR_PRODUCT";
export const GET_ALL_USERNAMES_REQUEST = "GET_ALL_USERNAMES_REQUEST";
export const GET_ALL_USERNAMES_REQUEST_ERROR = "GET_ALL_USERNAMES_REQUEST_ERROR";
export const RECEIVED_ALL_USERNAMES = "RECEIVED_ALL_USERNAMES";
export const CREATE_NEW_USER_REQUEST = "CREATE_NEW_USER_REQUEST";
export const NEW_USER_WAS_CREATED = "NEW_USER_WAS_CREATED";
export const CREATE_NEW_USER_REQUEST_ERROR = "CREATE_NEW_USER_REQUEST_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL";
export const LOGOUT_REQUEST_ERROR = "LOGOUT_REQUEST_ERROR";
export const SUBMIT_REVIEW_REQUEST = "SUBMIT_REVIEW_REQUEST";
export const REVIEW_SUCCESSFULLY_SUBMITTED = "REVIEW_SUCCESSFULLY_SUBMITTED";
export const SUBMIT_REVIEW_REQUEST_ERROR = "SUBMIT_REVIEW_REQUEST_ERROR";
export const SET_USERNAME = "SET_USERNAME";
export const WRONG_PASSWORD_MESSAGE_WAS_DISPLAYED = "WRONG_PASSWORD_MESSAGE_WAS_DISPLAYED";
export const SET_SORTING_BY_TITLE = "SET_SORTING_BY_TITLE";

export function setSortingByTitle(data) {
	return {
		type: SET_SORTING_BY_TITLE,
		data
	};
}

export function wrongPasswordMessageWasDispalyed() {
	return {
		type: "WRONG_PASSWORD_MESSAGE_WAS_DISPLAYED"
	};
}

export function setUsername(data) {
	return {
		type: SET_USERNAME,
		data
	};
}

export function submitReview(reqBody) {

	return (dispatch, getStore) => {

		dispatch({ type: SUBMIT_REVIEW_REQUEST });

		return axios.post("/api/reviews", reqBody)
		.then(response => {
			dispatch(reviewSubmitted(response.data));
		})
		.catch(response => {
			dispatch(submitReviewError(response.data));
		});
	};
}

export function reviewSubmitted(data) {
	return {
		type: REVIEW_SUCCESSFULLY_SUBMITTED,
		data
	};
}

export function submitReviewError(data) {
	return {
		type: SUBMIT_REVIEW_REQUEST_ERROR,
		data
	};
}

export function logout() {

	return (dispatch, getStore) => {

		dispatch({ type: LOGOUT_REQUEST });

		return axios.get("/api/logout")
		.then(response => {
			dispatch(logoutSuccesful(response.data));
		})
		.catch(response => {
			dispatch(logoutError(response.data));
		});
	};
}

export function logoutSuccesful(data) {
	return {
		type: LOGOUT_SUCCESSFUL,
		data
	};
}

export function logoutError(data) {
	return {
		type: LOGOUT_REQUEST_ERROR,
		data
	};
}

export function login(reqBody) {

	return (dispatch, getStore) => {

		dispatch({ type: LOGIN_REQUEST });

		return axios.post("/api/login", reqBody)
		.then(response => {
			dispatch(loginSuccesful(response.data));
		})
		.catch(response => {
			dispatch(loginError(response.data));
		});
	};
}

export function loginSuccesful(data) {
	return {
		type: LOGIN_SUCCESSFUL,
		data
	};
}

export function loginError(data) {
	return {
		type: LOGIN_REQUEST_ERROR,
		data
	};
}

export function createNewUser(reqBody) {

	return (dispatch, getStore) => {

		dispatch({ type: GET_ALL_USERNAMES_REQUEST });

		return axios.post("/api/register/", reqBody)
		.then(response => {
			dispatch(newUserWasCreated(response.data));
		})
		.catch(response => {
			dispatch(createNewUserError(response.data));
		});
	};
}

export function newUserWasCreated(data) {
	return {
		type: NEW_USER_WAS_CREATED,
		data
	};
}

export function createNewUserError(data) {
	return {
		type: CREATE_NEW_USER_REQUEST_ERROR,
		data
	};
}

export function getAllUsernames() {

	return (dispatch, getStore) => {

		dispatch({ type: GET_ALL_USERNAMES_REQUEST });

		return axios.get("/api/users/usernames")
		.then(response => {
			dispatch(receivedAllUsernames(response.data));
		})
		.catch(response => {
			dispatch(receivedAllUsernamesError(response.data));
		});
	};
}

export function receivedAllUsernames(data) {
	return {
		type: RECEIVED_ALL_USERNAMES,
		data
	};
}

export function receivedAllUsernamesError(data) {
	return {
		type: GET_ALL_USERNAMES_REQUEST_ERROR,
		data
	};
}

export function getReviewsForProduct(id) {
	
	return (dispatch, getStore) => {

		dispatch({ type: GET_REVIEWS_FOR_PRODUCT_REQUEST });

		return axios.get("/api/reviews/" + id)
		.then(response => {
			dispatch(receivedReviewsForProduct(response.data));
		})
		.catch(response => {
			dispatch(receivedReviewsForProductError(response.data));
		});
	};
}

export function receivedReviewsForProduct(data) {
	return {
		type: RECEIVED_REVIEWS_FOR_PRODUCT,
		data
	};
}

export function receivedReviewsForProductError(data) {
	return {
		type: GET_REVIEWS_FOR_PRODUCT_REQUEST_ERROR,
		data
	};
}

export function getAllProducts() {
	
	return (dispatch, getStore) => {

		dispatch({ type: GET_ALL_PRODUCTS_REQUEST });

		return axios.get("/api/products/")
		.then(response => {
			dispatch(receivedAllProducts(response.data));
		})
		.catch(response => {
			dispatch(receivedAllProductsError(response.data));
		});
	};
}

export function receivedAllProducts(data) {
	return {
		type: RECEIVED_ALL_PRODUCTS,
		data
	};
}

export function receivedAllProductsError(data) {
	return {
		type: GET_ALL_PRODUCTS_REQUEST_ERROR,
		data
	};
}