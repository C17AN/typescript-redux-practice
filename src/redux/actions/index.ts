import { ActionType } from "../actionTypes";

interface SearchRepositoryAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepsitoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoryErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoryAction
  | SearchRepsitoriesSuccessAction
  | SearchRepositoryErrorAction;
