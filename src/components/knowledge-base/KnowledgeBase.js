import React, {Component} from 'react';

const linkStyle = {
    fontSize: 16 + 'px'
}

class KnowledgeBase extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='margin-bottom'>
                            <div className="input-group">
                                <input type="text" className="form-control search-input" placeholder="Поиск"/>
                                    <button className='search-button'>
                                    <i className="fas fa-search"/>
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col ">
                                    <div className='no-decor'>
                                        <i className="fas fa-book"/> <a href='#'>
                                            <span className='link-style'>
                                                Начало работы
                                            </span>
                                        </a>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Обзор системы, общие возможности
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Создание заявки и отправка письма клиенту
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Удобство использования
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="col ">
                                    <div  className='no-decor'>
                                    <i className="fas fa-book"/> <a style={linkStyle} href='#'>
                                        <span className='link-style'>
                                            Базовая настройка системы
                                        </span>
                                    </a>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Группы, Права доступа
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                  Использование собственного SMTP сервера
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Управление департаментами (отделами компании)
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                  Создание Базы знаний
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Статусы пользователей в системе
                                                </span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <div className='margin-top'>
                                        <div className='no-decor'>
                                            <i className="fas fa-book"/> <a href='#'>
                                                <span className='link-style'>
                                                     Продвинутая настройка системы
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Тестовая категори
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                  	Диспетчер, Автоматизация
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    	Индивидуальные отчёты, выгрузка заявок в Excel
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    	Экспорт и импорт пользователей
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Фильтры в системе HelpDeskEddy
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="col ">
                                    <div className='margin-top'>
                                        <div className='no-decor'>
                                            <i className="fas fa-book"/> <a style={linkStyle} href='#'>
                                            <span className='link-style'>
                                                Работа с заявками
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    	клиентские компании, организации
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                  Макросы
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                    Распечатка заявок
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                  Модуль оборудования, управление оборудованием клиента
                                                </span>
                                            </a>
                                        </div>
                                        <div className='no-decor'>
                                            <i className="fas fa-file"/>&nbsp;
                                            <a href='#'>
                                                <span className='sub-link'>
                                                   Инструкция по использованию системы для сотрудника
                                                </span>
                                            </a>
                                        </div>

                                    </div>
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
