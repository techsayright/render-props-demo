import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        return (
            <div>
                this word is displayed by render props '{this.props.render(true)}'
            </div>
        )
    }
}
