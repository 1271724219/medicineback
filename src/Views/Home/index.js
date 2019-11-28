import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                index
                {this.props.children}
            </div>
        )
    }
}
