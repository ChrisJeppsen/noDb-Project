import React, {Component} from 'react'

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.friend.name || '',
            email: this.props.friend.email || '',
            number: this.props.friend.number || '',
            message: this.props.friend.message || ''
        }
    }

    handleInput = ({name,value}) => {
        console.log(this.state.nameEdit)
        this.setState({
          [name]: value
        })
         
      }
      handleEdit = () => {
        const {name,email,number,message} = this.state
        this.props.editFriend({
          id: this.props.friend.id,
          name,
          email,
          number,
          message
      })
        this.props.handleTogglefn()
    
      }
    render(){
        const {editToggle} = this.props
        let view = ''
        

    
    if(editToggle === true) {
        view = (
            <div> 
            <div>{this.props.friend.name}</div>
            <button id='deleteInvite' onClick={() => this.props.deleteFriendfn(this.props.id)}>delete</button>
            <button id='editInvite' onClick = {() => this.props.handleTogglefn()}>edit</button>
            
        </div>
        )
    } else {
        
      view =  ( <div> 
           
        <input placeholder='name' onChange={(e) => this.handleInput(e.target)} value={this.state.name} name='name'/> 
        <input placeholder='email' onChange={(e) => this.handleInput(e.target)} value={this.state.email} name='email'/> 
        <input placeholder='number' onChange={(e) => this.handleInput(e.target)} value={this.state.number} name='number'/> 
        <input placeholder='message' onChange={(e) => this.handleInput(e.target)} value={this.state.message} name='message'/> 
        <button onClick={() => this.handleEdit()}>submit changes</button>
        </div>
        )

    }
            return(
            <div>{view}</div>  
        
        )
    }
}

export default Sidebar