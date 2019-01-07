import { ThunkAction } from "redux-thunk";
import { ActionType } from "typesafe-actions";
import { SET_SEARCH_RESULTS } from "~/actions";
import { RootState } from "~/types";
import { ILastFMSearchResults } from "~/types/lastfm";

type ThunkResult = ThunkAction<Promise<void>,
    RootState,
    undefined,
    ActionType<typeof SET_SEARCH_RESULTS>>;

export const getSearchResults = (track: string): ThunkResult =>
    async (dispatch) => {
        const baseURL = "http://ws.audioscrobbler.com/2.0";
        const apiKey = process.env.LAST_FM_API_KEY;
        try {
            const results = await fetch(`${baseURL}/?method=track.search&track=${track}&api_key=${apiKey}&format=json`)
                .then((res) => res.json())
                .then((res: ILastFMSearchResults) => res.results.trackmatches.track);
            dispatch(SET_SEARCH_RESULTS(results));
        } catch (err) {
            // Handle err
        }
    };
