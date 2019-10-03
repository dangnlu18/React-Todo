import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      things: [
      {
        task: "brush teeth",
        id: 2424,
        completed: false
      },
      {
        task: "shave mustache",
        id: 2425,
        completed: false
      }
      ]

    }
  }

  toggleItem = (event, itemId) => {
    this.setState({
      things: this.state.things.map(item => {
        if(item.id === itemId){
          return {
            ...item,
            completed: !item.completed
          }
        } else{
          return item
        }
      })
    })
  }


  addTask = (event, taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      things: [...this.state.things, newTask]
    })
  }

  clearCompleted = (event) =>{
    event.preventDefault()
    this.setState({
      things: this.state.things.filter(item => {
        return !item.completed
      })
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>

        <div className="todo-list">
          {this.state.things.map(item => (
            <Todo 
            key={item.id} 
            item={item} 
            onClick ={(e) => this.toggleItem(e, item.id)} 
            />
          ))}
        </div>
        <button onClick ={this.clearCompleted}> Clear Copmpleted </button>
      </div>
    );
  }
}

export default App;
