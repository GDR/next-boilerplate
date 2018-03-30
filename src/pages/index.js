import React from "react";
import withRedux from "next-redux-wrapper";
import {makeStore} from "../lib/makeStore";

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                Hello, world!
            </div>
        )
    }
}

export default withRedux(makeStore)(IndexPage);