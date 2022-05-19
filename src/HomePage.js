import React, {Component} from "react";

// Message Component 

function Message(props)
{
  if(props.isLoggedIn)
   return <h1> Welcome User</h1>
   else 
   return <h1> Please Login </h1>
}

// Login Component
function Login (props)
{
return(
    <button onClick={props.clickFunction}> Login </button>
);
}

// Logout Component
function Logout (props)
{
  return (
    <button onClick={props.clickFunction}> Logout </button>
  );
}

export default class HomePage extends Component
{
  constructor(props)
  {
    super(props);
    this.state= {isLoggedIn:false};
    this.ifLoginButtonClicked =  this.ifLoginButtonClicked.bind(this);
    this.ifLogoutButtonClicked =  this.ifLogoutButtonClicked.bind(this);
    
  }

  ifLoginButtonClicked()
  {
    this.setState({isLoggedIn:true})
  }

  
  ifLogoutButtonClicked()
  {
    this.setState({isLoggedIn:false})
  }

  
  render()
  {
    return (
    <div>
     <Message isLoggedIn={this.state.isLoggedIn}/>
          {
          (this.state.isLoggedIn) ? (<Logout clickFunction={this.ifLogoutButtonClicked}/>
     ): (<Login clickFunction={this.ifLoginButtonClicked}/>
    )
          }
   </div>
    );
  }
}
   