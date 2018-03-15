import React, {Component} from 'react';
import {Provider} from 'react-redux';
import TabListComponent from './components/TabList';

import store from './store';
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='main-div'>
                    <div className="container">
                        <TabListComponent/>
                    </div>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

export default App;
