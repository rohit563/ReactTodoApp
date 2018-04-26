import React from "react"
import update from 'immutability-helper';
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import '../../styles/style.scss'

export default class Layout extends React.Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.state = {
      todoList: []
    }
  }

  addTodo(val){
    const todo = {text: val, id: this.state.todoList.length, completed: false}
    this.state.todoList.push(todo);
    this.setState({
      todoList: this.state.todoList
    });
    console.log(this.state.todoList);
  }

  removeTodo(id){
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    });
    console.log(this.state.todoList);
  }

  handleCheckBoxChange(id){
    const changeCompleted = !this.state.todoList[id].completed
    const newUpdate = update(this.state.todoList, {[id]: {completed: {$set: changeCompleted}} })
    this.setState({
      todoList: newUpdate
    });
    console.log("This is the newUpdate " + JSON.stringify(newUpdate));
    console.log("This is the todoList " + JSON.stringify(this.state.todoList));
  }

  render() {
    return(
      <div>
      <TodoForm addTodo={this.addTodo}/>
      <TodoList list={this.state.todoList} removeTodo={this.removeTodo} handleCheckBoxChange={this.handleCheckBoxChange}/>
      </div>
    )

  }
}
