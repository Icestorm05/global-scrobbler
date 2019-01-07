import React, { FormEvent, SyntheticEvent } from "react";
import { RootActionCreator, RootState } from "~/types";
import css from "./SearchForm.module.scss";

import ProgressBar from "~/components/ProgressBar/ProgressBar";

interface ISearchFormProps {
    setSearch: RootActionCreator["getSearchResults"];
    results: RootState["searchResults"];
}

interface ISearchFormState {
    searching: boolean;
    value: string;
}

class SearchForm extends React.Component<ISearchFormProps, ISearchFormState> {
    public readonly state: ISearchFormState = {
        searching: false,
        value: "",
    };
    public render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className={css["search-container"]}>
                    <input type="search"
                        className={css["search-input"]}
                        placeholder="Search"
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)} />
                    <button type="submit"
                        className={css["search-btn"]}>&#x1F50D;</button>
                </div>
                <ProgressBar display={this.state.searching} />
                <div className={css["results-container"]}>
                    {this.props.results.map((result) => {
                        const lastImg = result.image[result.image.length - 1];
                        return (
                            <a key={result.url}
                                className={css.result}
                                href={result.url}>
                                <img src={lastImg["#text"] ? lastImg["#text"] : ""}
                                     height="300"
                                     width="300"
                                     className={css["result-image"]} />
                                <div className={css["result-text"]}>
                                    <b className={css["result-text-name"]}>{result.name}</b>
                                    <span className={css["result-text-artist"]}>{result.artist}</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </form>
        );
    }
    private handleChange(e: SyntheticEvent<HTMLInputElement, Event>) {
        this.setState({ value: e.currentTarget.value });
    }
    private async handleSubmit(e: FormEvent) {
        e.preventDefault();
        this.setState({ searching: true });
        await this.props.setSearch(this.state.value);
        this.setState({ searching: false });
    }
}

export default SearchForm;
