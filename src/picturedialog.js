import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import PictureCard from './pictureonlycard';
import Images from './images';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Corosel from './corosel';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    img:{
        height:'100%',
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

function PictureDialog(props) {
    return (
        <div>
            <Dialog
                fullScreen
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <AppBar className={props.classes.appBar}>
                    <Toolbar>

                        <Typography variant="h6" color="default" className={props.classes.flex}>

                        </Typography>
                        <IconButton color="inherit" onClick={props.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <DialogContent>
                    <img src={props.content} className={props.classes.img}/>
                    {/*<Corosel initialStep={props.initialStep} images={Images}/>*/}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(PictureDialog);
