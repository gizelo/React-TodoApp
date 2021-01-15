import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpened: false
    }

    render() {
        return (
            <React.Fragment>
                <button className="modal-btn" onClick={() => this.setState({isOpened: true})}>Open modal</button>

                {this.state.isOpened && <div className="modal">
                    <div className="modal-body">
                        <h1 className="modal-header">Modal title</h1>
                        <p className="modal-text">I'm awesome modal window</p>
                        <button className="modal-btn" onClick={() => this.setState({isOpened: false})}>Close modal
                        </button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}