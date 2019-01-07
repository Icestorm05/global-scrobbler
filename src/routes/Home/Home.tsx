import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getSearchResults } from "~/actionCreators";
import { RootActionCreator, RootState } from "~/types";

import SearchForm from "~/components/SearchForm/SearchForm";

const mapStateToProps = (state: RootState) => ({
    results: state.searchResults,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setSearch: getSearchResults,
}, dispatch);

interface IHomeProps {
    results: RootState["searchResults"];
    setSearch: RootActionCreator["getSearchResults"];
}

const Home: FunctionComponent<IHomeProps> = ({ results, setSearch }) => (
    <SearchForm
        results={results}
        setSearch={setSearch} />
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
