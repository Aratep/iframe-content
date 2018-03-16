import React, {Component} from 'react';

import {AppRouter} from '../router/app-router';
import KnowledgeBase from './knowledge-base/KnowledgeBase';

class TabListComponent extends Component {
    render() {
        return (
            <div className='margin-top'>
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#knowladge_base">
                            <i className="fas fa-pencil-alt"/> База знаний
                        </a>
                    </li>
                    <li className="nav-item">

                        <a className="nav-link" data-toggle="tab" href="#authorization">
                            <i className="fas fa-user"/> Авторизация
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="knowladge_base" className="container tab-pane active"><br/>
                        <KnowledgeBase/>
                    </div>
                    <div id="authorization" className="container tab-pane fade"><br/>
                        <AppRouter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabListComponent;
