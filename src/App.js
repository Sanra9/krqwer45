import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  handleChange(event){
    this.setState({
      newTask: event.target.value
    })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState({
        tasks: this.state.tasks.concat({id:this.state.tasks.length + 1, name:this.state.newTask, done:false}),
        newTask: '',
      });
      event.preventDefault();
    }
  }

  updateTasksDone(taskId){
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if(task.id === taskId) task.done = !task.done;
        return task;
      })
    })
  }
  
  render() {
    console.log(this.state.tasks)
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => 
            <li key={task.id} className={task.done == true ? 'done': null} onClick={() => this.updateTasksDone(task.id)}>{task.name}</li>)}
          </ul>
          <form>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" name="name" value={this.state.newTask} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
