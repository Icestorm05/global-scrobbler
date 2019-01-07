import { ActionType, StateType } from "typesafe-actions";
import * as actionCreators from "~/actionCreators";
import * as actions from "~/actions";
import rootReducer from "~/reducers";

export type RootAction = ActionType<typeof actions>;
export type RootActionCreator = typeof actionCreators;
export type RootState = StateType<typeof rootReducer>;
