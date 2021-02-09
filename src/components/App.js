import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from '../components/Home';

const styles = {
    root: {
        flexGrow: 1,
    }
};

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;

        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography variant="title" className="title" color="inherit">
                                E- Commerce Application
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </div>
          </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);