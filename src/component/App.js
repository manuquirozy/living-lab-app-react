import React, { Component } from 'react';
import './App.css';
import Table from './Table/Table';
import Footer from './Footer/Footer'
import Devices from './Devices/Devices'
import Home from './Home/Home'
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 500);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('https://living-lab-2.herokuapp.com/api/retrieveData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="main">
      <BrowserRouter>
      <div>
        <Navigation/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/devices" component={Devices}/>
        <Route exact path="/stats" component={Estadisticas}/>
        <Route exact path="/alarms" component={Alarmas}/>
        <Footer/>
      </div>       
      </BrowserRouter>      
    </div>
    );
  }
}

const Navigation=(props)=>{
  return(
    <nav>
      <ul className="navigation">
        <li><Link className="site" style={{ textDecoration: 'none', color: "rgb(78, 46, 101)"}} to={`/`}>HOME</Link></li>
        <li><Link className="site" style={{ textDecoration: 'none', color: "rgb(78, 46, 101)" }} to={`/devices`}>DISPOSITIVOS</Link></li>
        <li><Link className="site" style={{ textDecoration: 'none', color: "rgb(78, 46, 101)" }} to={`/stats`}>ESTADÍSTICAS</Link></li>
        <li><Link className="site" style={{ textDecoration: 'none', color: "rgb(78, 46, 101)" }} to={`/alarms`}>ALARMAS</Link></li>
      </ul>
    </nav>
  );
}

const Alarmas = (props)=>{
  return (
    <div className="alarms">
      <List day="This Week" />    
    </div>    
  );
};

const Estadisticas = (props)=>{
  return (
    <div className="stats">
      <List day="This Month" />    
    </div>    
  );
};

  class Tasks extends Component {

    constructor(props){
      super(props);
      this.onClickTask=this.onClickTask.bind(this);
      this.onClickDelete=this.onClickDelete.bind(this);
    }
  
    onClickTask(){
      this.props.completeTask(this.props.task);
    }
  
    onClickDelete(){
      this.props.deleteTask(this.props.task);
    }
  
    render(){
      return(
        <div className="to-do-list"> 
          <button onClick={this.onClickTask}>Done</button>
          <button onClick={this.onClickDelete}>Delete</button>
          <div className="task">{this.props.task}</div>
        </div>
      );
    }
  }

  const TaskList = (props)=>{
    return (
      <div className="contact-list">
        <h2 className="title">{props.title}</h2>
        {props.tasks.map(task =><Tasks key={task} task={task} completeTask={props.completeTask} deleteTask={props.deleteTask}/>)}      
      </div>
      
    );
  };

  class List extends Component {
    constructor(props){
      super(props);
      this.state = {
        all:[],
        completed:[],
        value: " "
      };
    
      this.completeTask=this.completeTask.bind(this);
      this.deleteTask=this.deleteTask.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    completeTask(task){
      if(this.state.all.indexOf(task)===-1){
        const newComplete=this.state.completed.filter(c => c!==task);
        const newAll=this.state.all.concat(task);
        this.setState({
          all:newAll,
          completed: newComplete
        });
      }
      else{
        const newAll=this.state.all.filter(c => c!==task);
        const newComplete=this.state.completed.concat(task);
        this.setState({
          all:newAll,
          completed: newComplete
        });
      }
    }
  
    deleteTask(task){
      if(this.state.all.indexOf(task)===-1){
        const newComplete=this.state.completed.filter(c => c!==task);
        this.setState({
           completed: newComplete
        });
      }
      else{
        const newAll=this.state.all.filter(c => c!==task);
        this.setState({
          all:newAll
        });
      }
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const newAll=this.state.all.concat(this.state.value);
      this.setState({ 
        all: newAll,
        value: ""
      });
    }
  
    render() {
        return (
          <div className="App">
            <h1>{this.props.day}</h1>
            <TaskList className="all" tasks={this.state.all} title="All Tasks" key="1" completeTask={this.completeTask} deleteTask={this.deleteTask}/>
            <form onSubmit={this.handleSubmit}>
              <label>New Task</label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
            <TaskList className="completed" tasks= {this.state.completed} title="Completed Tasks" key="2" completeTask={this.completeTask} deleteTask={this.deleteTask}/>
          </div>
        );
      }
    }

export default App;
