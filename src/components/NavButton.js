import React, { PureComponent } from 'react'

export default class NavButton extends PureComponent {
    render() {
        return (
            <button>{this.props.text}</button>
        )
    }
}
