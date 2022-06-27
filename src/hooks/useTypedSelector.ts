import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux";

// RootState 타입은 ReturnType<typeof combinedReducer> 로 구성된다.
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
