import React, {Component, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Newinvite from './Components/Newinvite'
import axios from 'axios'
 

class App extends Component{
  constructor(){
    super()
    this.state = {
        friends: [],
        id: 0,
        name: '',
        email: '',
        number: null,
        message: '',
        friendsObj: {},
        editToggle: true,
        
    }
  }
   
  componentDidMount = () => {
    axios.get(`/api/people`).then(res => {
      this.setState({friends: res.data})
    }).catch(err => console.log(err))
  }
  addFriend = () => {
    const {friends,name,email,number,message} = this.state
    axios.post('http://localhost:4000/api/people', {friends,name,email,number,message}).then(res => {
      this.setState({friends: res.data})
    }).catch(err => console.log(err))
     
  }
  deleteFriend = (id) => {
    axios.delete(`/api/people/${id}`).then(res => {
      this.setState({friends: res.data})
      console.log(this.state.friends)
    }).catch(err => console.log(err))
  }
  editFriend = (body) => {
    const {id} = body
    axios.put(`/api/people/${id}`,body).then(res => {
       this.setState({friends: res.data})
    }).catch(err => console.log(err))
  }
  handleInput = ({name,value}) => {
    console.log(this.state.nameEdit)
    this.setState({
      [name]: value
    })
     
  }
  handleToggle = () => {
    this.setState({
        editToggle: !this.state.editToggle
    })
}
   
  
   

  render(){
    // console.log(this.state.friends)
    return(
      <div className='App_div'>
         
        <Newinvite 
        friends={this.state.friends}
        name={this.state.name}
        email={this.state.email}
        number={this.state.number}
        message={this.state.message}
        friendsObj={this.state.friendsObj}
        handleInputfn={this.handleInput}
        addFriendfn={this.addFriend}
        handleInput= {this.handleInput}
        deleteFriendfn={this.deleteFriend}
        handleTogglefn={this.handleToggle}
        editToggle={this.state.editToggle}
        editFriend = {this.editFriend}
         />
          
      </div>
    )
  }
}
   

export default App;
