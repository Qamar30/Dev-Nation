import React from 'react'
import './App.css';

// Class Based Component
class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          todoList:[],
          activeItem:{
              id:null,
              title:"",
              completed:false,
          },
          editing:false,
      }
      this.fetchTasks = this.fetchTasks.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getCookie = this.getCookie.bind(this)
      this.startEdit = this.startEdit.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
      this.strikeUnstrike = this.strikeUnstrike.bind(this)
  };

  getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }

  componentDidMount(){
    this.fetchTasks()
  }

  // Making an API Call and rendering out that data
  fetchTasks(){
      console.log("FETCHING DATA...")

      fetch("http://127.0.0.1:8000/api/task-list/")
      // Convert data to json format
      .then(response => response.json())
      .then(data => 
          this.setState({
            todoList:data
          })  
      )
  }

  handleChange(e){
      let name = e.target.name
      let value = e.target.value

      console.log('NAME: ', name)
      console.log('VALUE: ', value)

      this.setState({
          activeItem:{
            ...this.state.activeItem,
            title:value,
          }
      })
  }

  handleSubmit(e){
      e.preventDefault()
      console.log('item', this.state.activeItem)

      let csrftoken = this.getCookie('csrftoken')
      let url = 'http://127.0.0.1:8000/api/task-create/'

      if (this.state.editing === true) {
          url = `http://127.0.0.1:8000/api/task-update/${this.state.activeItem.id}/`
          this.setState({
              editing: false,
          })
      }

      fetch(url, {
          method:'POST',
          headers: {
              'Content-type': 'application/json',
              'X-CSRFToken': csrftoken,
          },
          body: JSON.stringify(this.state.activeItem)
      }).then((response) => {
          this.fetchTasks()
          this.setState({
              activeItem:{
                  id:null,
                  title:"",
                  completed:false,
              }  
          })
      }).catch(function(error){
          console.log('ERROR: ', error)
      })
  }

  startEdit(task){
      this.setState({
          activeItem: task,
          editing: true,
      })
  }

  deleteItem(task){
    let csrftoken = this.getCookie('csrftoken')

    fetch(`http://127.0.0.1:8000/api/task-delete/${task.id}/`, {
        method:'DELETE',
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
    }).then((response) => {
        this.fetchTasks()
    })
  }

  strikeUnstrike(task){
      task.completed = !task.completed

      let csrftoken = this.getCookie('csrftoken')
      let url = `http://127.0.0.1:8000/api/task-update/${task.id}/`

      fetch(url, {
          method:'POST',
          headers: {
              'Content-type': 'application/json',
              'X-CSRFToken': csrftoken,
          },
          body: JSON.stringify({'title': task.title, 'completed': task.completed})
      }).then(response => {
          this.fetchTasks()
      })

      console.log('TASK', task.completed)
  }

  render() {
      let tasks = this.state.todoList
      let self = this

      return (
          <div className="container">
                <div className="center-column">
                    <div id="form-wrapper">
                        <form action="" id="form" onSubmit={this.handleSubmit}>
                            <div className="flex-wrapper">
                                <div style={{flex: 7, marginRight: 10}}>
                                    <input onChange={this.handleChange} className="form-control" type="text" name="title" id="id_title" value={this.state.activeItem.title} placeholder="Task..."/>
                                </div>

                                <div style={{flex: 1}}>
                                    <input className="btn btn-primary" name="Add" id="submit" type="submit"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="task-wrapper">
                        {tasks.map(function(task, index){
                            return(
                                <div key={index} className="item-row flex-wrapper">
                                    <div onClick={() => self.strikeUnstrike(task)} style={{flex:7}}>
                                        {task.completed === false ? (
                                            <span>{task.title}</span>
                                        ) : (
                                            <strike>{task.title}</strike>
                                        )}
                                    </div>

                                    <div style={{flex:1}}>
                                        <button onClick={() => self.startEdit(task)} className="btn btn-sm btn-warning">Edit</button>
                                    </div>

                                    <div style={{flex:1}}>
                                        <button onClick={() => self.deleteItem(task)} className="btn btn-sm btn-danger delete">Remove</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

              {/* <div id="task-container">
                  <div id="form-wrapper">
                      <form action="" id="form" onSubmit={this.handleSubmit}>
                          <div className="flex-wrapper">
                              <div style={{flex: 6}}>
                                  <input onChange={this.handleChange} className="form-control" type="text" name="title" id="id_title" value={this.state.activeItem.title} placeholder="Title..."/>
                              </div>

                              <div style={{flex: 1}}>
                                  <input className="btn btn-warning" name="Add" id="submit" type="submit"/>
                              </div>
                          </div>
                      </form>
                  </div>

                  <div id="list-wrapper">
                      {tasks.map(function(task, index){
                          return(
                              <div key={index} className="task-wrapper flex-wrapper">
                                  <div onClick={() => self.strikeUnstrike(task)} style={{flex:7}}>
                                      {task.completed === false ? (
                                          <span>{task.title}</span>
                                      ) : (
                                          <strike>{task.title}</strike>
                                      )}
                                  </div>

                                  <div style={{flex:1}}>
                                      <button onClick={() => self.startEdit(task)} className="btn btn-sm btn-outline-info">Edit</button>
                                  </div>

                                  <div style={{flex:1}}>
                                      <button onClick={() => self.deleteItem(task)} className="btn btn-sm btn-outline-dark delete">-</button>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div> */}
          </div>
            
      )
  }
}

export default App;