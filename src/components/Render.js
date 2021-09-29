import React, { Component } from 'react'

export default class Render extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clicked: 0
        }
    }
    
    render() {
        const fun = ()=>{
            this.setState((pre)=>{
                return { clicked: pre.clicked + 1}
            });
        }
        return (
            <div>
                {this.props.render(this.state.clicked, fun)}
            </div>
        )
    }
}
