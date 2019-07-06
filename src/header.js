import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logo from "./Logo.png";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
class Layout extends Component {

    render() {

        const {classes} = this.props;
        return (
                <AppBar position="static" color='default'>
                    <Toolbar>
                        <img src={Logo} alt="logo" height='40px'/>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Green Innovations
                        </Typography>
                    </Toolbar>
                </AppBar>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
