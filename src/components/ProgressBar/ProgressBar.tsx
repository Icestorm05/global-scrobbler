import classNames from "classnames";
import React, { FunctionComponent } from "react";
import css from "./ProgressBar.module.scss";

interface IProgressBarProps {
    display: boolean;
}

const ProgressBar: FunctionComponent<IProgressBarProps> = ({ display }) => {
    const containerClasses = classNames(css.slider, { [css.display]: display });
    return (
        <div className={containerClasses}>
            <div className={css.line} />
            <div className={`${css.subline} ${css.inc}`} />
            <div className={`${css.subline} ${css.dec}`} />
        </div>
    );
};

export default ProgressBar;
