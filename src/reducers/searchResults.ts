import { Reducer } from "redux";
import { ActionType } from "typesafe-actions";
import { ILastFMSearchResult } from "~/types/lastfm";

import * as searchResultActions from "~/actions/searchResults";

export default ((state = [], action) => {
    switch (action.type) {
        case "SET_SEARCH_RESULTS":
            return action.payload;
        default:
            return state;
    }
}) as Reducer<ILastFMSearchResult[], ActionType<typeof searchResultActions>>;
