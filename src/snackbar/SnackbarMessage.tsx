import React, { Component, Fragment } from 'react';
import clsx from 'clsx';
import { Severity } from '../recipe/RecipeList';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import './SnackbarMessage.scss';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface ISnackbarProps {
    classes: any;
    open: boolean;
    severity: Severity;
    message: string;
    undo: boolean;
    closeSnackbar(): void;
}

class SnackbarMessage extends Component<ISnackbarProps, any> {
    render() {
        const {classes, open, severity, message, undo, closeSnackbar} = this.props;
        
        let undoButton;
        if(undo) {
            undoButton = <Button color="inherit" size="small">Undo</Button>;
        }

        return (        
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={closeSnackbar}
                autoHideDuration={6000}>
                <Alert
                    onClose={closeSnackbar}
                    action={ 
                        <Fragment>
                            {undoButton}
                            <IconButton
                                onClick={closeSnackbar}
                                aria-label="close"
                                color="inherit"
                                size="small">
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </Fragment>                       
                    }
                    className={clsx(classes.root)} 
                    elevation={6}
                    variant="filled"
                    severity={severity}>
                    {message}
                </Alert>
            </Snackbar>                         
        );
    }
}

export default withStyles(theme => ({
    root: {
        borderRadius: '2px'
    }
  }))(SnackbarMessage);