export interface ILastFMSearchResults {
    results: {
        "@attr": {};
        "opensearch:Query": {
            "#text": string;
            role: string;
            startPage: string;
        }
        "opensearch:itemsPerPage": string;
        "opensearch:startIndex": string;
        "opensearch:totalResults": string;
        trackmatches: {
            track: ILastFMSearchResult[];
        };
    };
}

export interface ILastFMSearchResult {
    name: string;
    artist: string;
    url: string;
    streamable: string;
    listeners: string;
    image: ILastFMImage[];
    mbid: string;
}

export interface ILastFMImage {
    "#text": string;
    size: string;
}
