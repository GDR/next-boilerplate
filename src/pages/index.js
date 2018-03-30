import React from "react";
import withRedux from "next-redux-wrapper";
import configureStore from "../lib/configureStore";
import Button from "../components/Button";
import {withTheme} from "../hocs/withTheme";

@withRedux(configureStore)
@withTheme
class IndexPage extends React.Component {
    render() {
        return (
            <div>
                Hello, world!
                <Button>Asd</Button>
            </div>
        )
    }
}

export default IndexPage;