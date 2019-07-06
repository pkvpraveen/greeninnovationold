import React, {Component} from 'react';
import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './layout';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Layout/>
            </React.Fragment>
        );
    }
}

export default App;
