import React, {Component} from 'react';

class KnowledgeBase extends Component {
    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Поиск"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default KnowledgeBase;
