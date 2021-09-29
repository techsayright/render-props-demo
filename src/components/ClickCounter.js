import React, { Component } from 'react'

export default class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.setVal()}>Clicked {this.props.val} times</button>
            </div>
        )
    }
}
