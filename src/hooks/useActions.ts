import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
  // { searchRepositories: dispatch(searchRepositories)}
};

// bindActionCreators의 형태

// function bindActionCreator(actionCreator, dispatch) {
//   return function () {
//     return dispatch(actionCreator.apply(this, arguments));
//   };
// }
