import React, { Component } from 'react'

export default class HoverCounter extends Component {
    render() {
        return (
            <div>
                <button onMouseEnter>Hovered {this.props.clicked} times</button>
            </div>
        )
    }
}
