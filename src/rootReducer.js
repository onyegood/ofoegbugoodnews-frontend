import { combineReducers } from "redux";
import customers from "./store/reducers/customers";
import users from "./store/reducers/users";
import auth from "./store/reducers/auth";
import portfolios from "./store/reducers/portfolios";
import profile from "./store/reducers/profile";
import experiences from "./store/reducers/experiences";
import schools from "./store/reducers/schools";
import stacks from "./store/reducers/stacks";
import blogs from "./store/reducers/blogs";
import contactme from "./store/reducers/contactme";
import formErrors from "./store/reducers/formErrors";
import authErrors from "./store/reducers/serverErrors/authErrors";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  customers,
  users,
  auth,
  portfolios,
  formErrors,
  profile,
  experiences,
  schools,
  stacks,
  blogs,
  contactme,
  authErrors,
  form: formReducer
});