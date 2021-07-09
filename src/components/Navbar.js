import React, { PureComponent } from 'react'
import NavButton from './NavButton'

export default class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            buttons : ["Home", "Education", "Skills", "Experiences", "Projects", "Contact"]
        };
    }
    render() {
        return (
            <div className="nav-bar">
                {this.state.buttons.map((x, i) => {
                    return (<NavButton text={x} key={i} />);
                })}
            </div>
        )
    }
}
