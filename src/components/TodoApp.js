import React from 'react';
import {TodoList} from './TodoList';
import DatePicker from 'react-datepicker';
import logo from './../logo.svg';
import Login from './Login';
export default class TodoApp extends React.Component{

    constructor(){
        super();
        var item = [{text:"Learn React", priority:5, dueDate: new Date(2020,1,10) },
        {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
        {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];
        this.state = {text:'',priority:0,dueDate:null,items:item};
        this.handleTextChange=this.handleTextChange.bind(this);
        this.handlePriorityChange=this.handlePriorityChange.bind(this);
        this.handleDateChange=this.handleDateChange.bind(this);
        this.add = this.add.bind(this);
    }

    handleTextChange(e){
        this.state.text = e.target.value;
        this.setState(this.state);
    }

    handlePriorityChange(e){
        this.state.priority = e.target.value;
        this.setState(this.state);
    }

    handleDateChange(date){
        this.state.dueDate = date;
        this.setState(this.state);
    }

    add(e){
        this.state.items.push({text:this.state.text,priority:this.state.priority,dueDate:this.state.dueDate});
        this.setState(this.state);
    }
    render(){
        if(localStorage.getItem("isLoggedIn")==null){
            return <Login/>;
        }
        return(
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">TODO React App</h1>
            </header>

            <br/>
            <br/>
                <h3>New TODO</h3>
                <label htmlFor="text" className="right-margin">
                    Text:
                </label>

                <input
                    id="text"
                    onChange={this.handleTextChange}
                    value={this.state.text}>
                </input>

                <br/>
                <br/>
                <label htmlFor="priority" className="right-margin">
                    Priority:
                </label>

                <input
                    id="priority"
                    type="number"
                    onChange={this.handlePriorityChange}
                    value={this.state.priority}>
                </input>
                <br/>
                <br/>

                <DatePicker
                    id="due-date"
                    selected={this.state.dueDate}
                    placeholderText="Due date"
                    onChange={this.handleDateChange}>
                </DatePicker>
                <br/>
                <button onClick={this.add}>
                    Add #{this.state.items.length + 1}
                </button>
            <br/>
            <br/>
            <TodoList todoList={this.state.items}/>
        </div>);
    }
}