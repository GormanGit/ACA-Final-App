import React, { Component } from "react";

export default class SecuredClass3 extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    fetch("./SecuredClass3");
  }
  render(){
    return(
      <h2>This is secured class 3</h2>
    );
  }
}