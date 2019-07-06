import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ContactMail from "@material-ui/icons/Mail";
import Call from "@material-ui/icons/Call";

const styles = {
    root: {
    },
};

class Footer extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        if(value === 0){
            window.open('mailto:info@greeninnovations.in');
        }else{
            window.open('tel:9446605978');
        }
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
            >
                <BottomNavigationAction label="Email" icon={<ContactMail />} />
                <BottomNavigationAction label="Call us" icon={<Call />} />
            </BottomNavigation>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
