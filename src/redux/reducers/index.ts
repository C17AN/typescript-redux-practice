import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  // 어떻게 보면 "repositories" 키가 react query의 queryKey가 될지도?
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
