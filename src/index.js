import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class Hello extends Component {
    render() {
        return <p>hello ctt</p>
    }
}

const main = document.getElementById("main");

ReactDOM.render(<Hello />, main)