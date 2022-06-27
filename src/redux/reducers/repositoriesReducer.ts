import { Action } from "../actions";
import { ActionType } from "../actionTypes";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//   type: string;
//   payload?: any;
// }

// 리듀서를 설계할 때 타입스크립트 정의
// - 초기 상태 및 상태가 가질 타입(또는 인터페이스)를 정의한다.
// - 각 액션에 대한 타입(또는 인터페이스)를 정의한다.
// - 각 액션 타입은 enum 타입으로 정리한다.

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
