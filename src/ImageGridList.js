import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './images';
import PictureDialog from './picturedialog';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {},
    subheader: {
        width: '100%',
    },
});

class ImageGridList extends Component {
    state = {
        open: false,
        tile: '',
        initialStep: 0
    };
    openDialog = (tile,initialStep) => () => {
        this.setState({
            open: true,
            tile,
            initialStep
        });

    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {tileData.map((tile, index) => (
                        <GridListTile key={tile} cols={tile.cols || 1}>
                            <img src={tile} alt='' onClick={this.openDialog(tile,index)}/>
                        </GridListTile>
                    ))}
                </GridList>
                <PictureDialog
                    open={this.state.open}
                    content={this.state.tile}
                    handleClose={() => this.setState({open: false})}
                    initialStep={this.state.initialStep}
                />
            </div>
        );
    }
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
