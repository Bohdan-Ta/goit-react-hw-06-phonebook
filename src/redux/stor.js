import { createStore } from "redux";
const reduser = (state = {}, action) => state;
const store = createStore(reduser);
export default store;
