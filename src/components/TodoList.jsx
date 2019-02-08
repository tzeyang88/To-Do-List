import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.createTask = this.createTask.bind(this);
    }

    createTask(item, i) {
        const cls = item.checked ? "color1"  : "color2"
        return (
            <div key={i}>
                <div className="list__container">
                    <div className="radio__button">
                        <div onClick={() => {this.props.onChecked(i)}} className={cls}></div>
                    </div>  
                    <div className="list__container--item">{item.text}</div>
                    <div onClick={() => this.props.onDelete(i)} className="delete__icon">
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let newEntries = this.props.entries;
        let listsItems = newEntries.map(this.createTask);
        return(
            <div>
                {listsItems}
            </div>
        );
    }
}

export default TodoList




