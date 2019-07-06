import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Header from "./header";
import Body from './body';
import Footer from './footer';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
};
class Layout extends Component {

    render() {

        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
