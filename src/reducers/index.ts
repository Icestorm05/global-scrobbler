import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";

import { RootAction } from "~/types";
import searchResults from "./searchResults";

export interface IRootReducer {
    readonly searchResults: StateType<typeof searchResults>;
}

const rootReducer = combineReducers<IRootReducer, RootAction>({
    searchResults,
});

export default rootReducer;
