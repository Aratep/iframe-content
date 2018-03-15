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
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col ">
                                    <h4>Heading 1</h4>
                                    What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typese
                                    tting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unkn
                                    own printer took a galley of type and scrambled it to make a typ
                                    e specimen book. It has survived not only five centuries, but also the
                                    leap into electronic typesetting, remaining essentially unchanged. It was popu
                                    larised in the 1960s with the release of Letraset sheets containing Lorem Ipsu
                                    m passages, and more recently with desktop publishing software like Aldus PageMak
                                    er including versions of Lorem Ipsum
                                </div>
                                <div className="col ">
                                    <h4>Heading 2</h4>
                                    Why do we use it?
                                    It is a long establis
                                    hed fact that a reader will be dis
                                    tracted by the readable content of a page when
                                    looking at its layout. The point of using Lorem Ipsu
                                    m is that it has a more-or-less normal distribution of l
                                    etters, as opposed to using 'Content here, content here', m
                                    aking it look like readable English. Many desktop publishing
                                    packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will
                                    uncover many web sites still in their infancy. Various versions
                                    have evolved over the years, sometimes by accident, sometimes on purpose
                                    (injected humour and the like).


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default KnowledgeBase;
