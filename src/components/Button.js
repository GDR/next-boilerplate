import React from "react";
import injectSheet from "react-jss";

const styles = {
    button: {
        height: '300px',
        background: '#121232'
    }
};

const Button = ({classes, children}) => (
    <button className={classes.button}>
        {children}
    </button>
);

export default injectSheet(styles)(Button);