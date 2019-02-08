import React, {Component} from 'react';
import TodoList from "./TodoList"

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        if(this.target.value !== "") {
            let newObj = {
                text: this.target.value,
            };
            this.setState(prevState => {
                return {
                    lists: prevState.lists.concat(newObj)
                };
            });
        }
        this.target.value = "";
        e.preventDefault();
    }

    handleDelete = (listsIndex) => {
        const lists = [...this.state.lists];
        lists.splice(listsIndex, 1);
        this.setState({lists:lists});
    }

    handleChecked = (selected) => {
        const lists = [...this.state.lists];
        let checked;
        checked = lists[selected].checked;
        lists[selected].checked = !checked;
        this.setState({lists});
    }

     render() {
        return(
            <form className="container">
                <nav className="navbar">
                    <h6 className="headline">To do list</h6>
                </nav>
                <div className="list-background">
                    <TodoList entries={this.state.lists}
                    onDelete={this.handleDelete}
                    onChecked={this.handleChecked}
                    />
                </div>
                <div className="text-field__container">
                    <input ref={a => this.target = a}  type="text" className="text-field" placeholder="Enter task"></input>
                    <button onClick={this.handleAdd}  className="add__button"><span>Add</span></button>
                </div>
            </form>
        );
    }
}

export default Create;

