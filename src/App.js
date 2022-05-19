import logo from './logo.svg';
import './App.css';
import  React, { Component } from 'react';
import AuthButton from './AuthButton';
import AuthButton1 from './AuthButton1';
import HomePage from './HomePage';
class App extends Component {
constructor(props)
{
  super(props);
this.state=
{
  isLoggedIn:false
};
}
  render()
  {
  
     let{isLoggedIn} = this.state;
    
    // let AuthButton;
     
    //    if(isLoggedIn)
    //    {
    // AuthButton= <button> Logout </button>;
    //    }
    //    else 
    //    {
    //      AuthButton = <button> Login </button>;
    //    }

     



  return (
    <div className="App">

<h1>  This is a demo for showing several ways to implement 
  conditional rendeing 
</h1>
<HomePage/>
{/* {isLoggedIn && <button> Logout </button>}

{!isLoggedIn && <button> Login </button>} */}

 {/* {isLoggedIn ? <button> Logout</button> : <button> Login </button>} */}

{/* {AuthButton}  */}
{/* <AuthButton isLoggedIn={this.state.isLoggedIn}/>
<AuthButton1 isLoggedIn={this.state.isLoggedIn}/> */}

{/* <button> Login </button>
<button> Logout </button> */}
          </div>
  );
  }
}

export default App;
