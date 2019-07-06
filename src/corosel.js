import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    imageContainer:{
        height: 400,
    },
    img: {
        height:400,
        width:'100%',
        display: 'block',
        overflow: 'hidden',
        margin: 'auto',
    },
});

class Corosel extends React.Component {
    state = {
        activeStep: 0,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.initialStep !== this.props.initialStep) {
            this.setState({activeStep: this.props.initialStep});
        }
    }

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({activeStep});
    };

    render() {
        const {classes, theme} = this.props;
        const activeStep = this.state.activeStep;
        const maxSteps = this.props.images.length;

        return (
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{'GrownGreen Self-Watering Pots/Containers'}</Typography>
                </Paper>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {this.props.images.map((step, index) => (
                        <div key={index} className={classes.imageContainer}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                    <img className={classes.img} src={step} alt={''}/>
                                ) : null}
                        </div>
                    ))}
                </SwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}

Corosel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Corosel);
