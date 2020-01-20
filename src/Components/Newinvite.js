import React, {Component} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'


class Newinvite extends Component{
    constructor(props){
    super(props)
        this.state = {
             
            // name: this.props.friends.name,
            // email: this.props.friends.email,
            // number: this.props.friend.number,
            // message: this.props.friends.message
        }
    }
     
    render(){
        let {friends, name, email, number, message, friendsObj,friend} = this.props
        let list = friends.map((e,i) => {
            return ( <Sidebar
                friends={friends} 
                name={this.state.name}
                email={this.state.email}
                number={this.state.number}
                message={this.state.message}
                key={i} 
                friend={e} 
                id={e.id}
                editToggle={this.props.editToggle} 
                handleToggle = {this.handleToggle}
                handleInputfn = {this.props.handleInputfn}
                deleteFriendfn ={this.props.deleteFriendfn}
                handleEditfn= {this.props.handleEditfn}
                handleTogglefn= {this.props.handleTogglefn}
                editFriend = {this.props.editFriend}
                 />
                
                 ) 
                     
        })
        const {handleInputfn,addFriendfn} = this.props
        return(
            <div className="main">
                <div id='side-bar'>
                    <h2 id='scrollbar-header'>People Invited</h2>
                    <div id='invited'>
                    {list}
                    </div>
                </div>
                    <div className='main-container'>
                        <Header/>
                        <div id='input-container'> 
                            <input placeholder='name'className='text' onChange={(e) => handleInputfn(e.target)} name='name'value={name}/>
                            <input placeholder='email' className='text' onChange={(e) => handleInputfn(e.target)} name='email'value={email}/>
                            <input placeholder='phone number'className='text' onChange={(e) => handleInputfn(e.target)} type='number'name='number'value={number}/>
                            <button placeholder='message'onClick={() => addFriendfn()}>add to list</button>
                        </div>
                        <div id='message-container'>
                            <textarea placeholder='Leave a note' id='message-input'className='text' onChange={(e) => handleInputfn(e.target)} name='message'value={message}/>
                        </div>
                        <Footer/>
                    </div>
                
            </div>
        )
    }
}
export default Newinvite