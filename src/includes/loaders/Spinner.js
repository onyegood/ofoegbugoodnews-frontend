import React from "react";
import classes from "./css/Spinner.css";

const DotLoader = () => {
    return (
        <div className={classes.spinner}>
            <div className={classes.doubleBounce1}></div>
            <div className={classes.doubleBounce2}></div>
        </div>
    );
}

export default DotLoader;