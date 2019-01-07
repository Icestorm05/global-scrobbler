import { createAction } from "typesafe-actions";
import { ILastFMSearchResult } from "~/types/lastfm";

export const SET_SEARCH_RESULTS = createAction("SET_SEARCH_RESULTS", (resolve) => {
    return (results: ILastFMSearchResult[]) => resolve(results);
});
