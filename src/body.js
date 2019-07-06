import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Corosel from './corosel';
import MediaCard from './mediacard';
import Images from './images';
import ImageGridList from './ImageGridList';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function Body(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <MediaCard
                            imagePath={Images[0]}
                            title={'GrownGreen Self-Watering Pots/Containers'}
                            text={'• 	Self-watering containers/pots provide a uniform point of moisture directly to plants •	Plants have continuous access to water through transpiration pull •	Water is added to the reservoir through the pipe opening at corner •	Water soluble plant nourishments can also be added through the opening •	Water level indicator helps avoid over watering or under watering •	Watering of plants can be limited to an interval of 7-10 days •	Can be placed Indoor or Outdoor maintaining tidiness of the place •	Potting mixture provided on request' }
                        />
                    </Paper>
                </Grid>
                {/*{Images.map(image => <Grid item xs={3}>*/}
                {/*<Paper className={classes.paper}><MediaCard imagePath={image} title=""*/}
                {/*text="GrownGreen Self-Watering Pots/Containers"/></Paper>*/}
                {/*</Grid>)}*/}
                <Grid item xs={12}>
                    <Paper className={classes.paper}><ImageGridList/></Paper>
                </Grid>
            </Grid>
        </div>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);
