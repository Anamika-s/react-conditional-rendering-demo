import React from "react";
export default class Foo extends React.Component{
  constructor( props ){
    super( props );
    this.state=
    {
      name :"Ajay",
      address:"Delhi"
    }
    this.handleClick = this.handleClick.bind(this);

  }
    
  handleClick(event){
    console.log("Button is clicked");
    console.log(this); // 'this' is undefined
  }
    
  render(){
    return (
      <div>
      Name : <input type="text" value={this.state.name}/>
      <br/>
      Address : <input type="text" value={this.state.address}/>
      <button type="button" onClick={this.handleClick}>
        Click Me
      </button>
      </div>
    );
  }
}
// import React from "react";

// export default class Foo extends React.Component{
//   constructor( props ){
//     super( props );
//     this.handleClick = this.handleClick.bind(this);
//   }
  
//   handleClick(event){
//     console.log(this)
// ;  }
  
//   render(){
//     return (
//       <button type="button" 
//       onClick={this.handleClick}>
//       Click Me
//       </button>
//     );
//   }
// }