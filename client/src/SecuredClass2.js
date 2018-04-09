import React, { Component } from "react";

export default class SecuredClass2 extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    fetch("./SecuredClass2");
  }
  render(){
    return(
      <h2>This is secured Class 2</h2>
    );
  }
}