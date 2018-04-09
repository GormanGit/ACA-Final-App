import React, { Component } from "react";

export default class SecuredClass1 extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    fetch("./SecuredClass1");
  }
  render(){
    return(
      <h2>This is SecuredClass1</h2>
    );
  }
}