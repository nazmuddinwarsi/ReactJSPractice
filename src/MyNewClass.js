import React, { Component } from 'react'

export   class MyNewClass extends Component {
  render() {
    return (
      <div>
        <h1>One Component</h1>
        {this.props.children}
        <MyNewClass2>
   
</MyNewClass2>
      </div>
    )
  }
}

 
export   class MyNewClass2 extends Component {
  render() {
    return (
      <div>
        <h1>Second Component</h1>
        {this.props.children}
      </div>
    )
  }
}

