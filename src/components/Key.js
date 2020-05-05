import React, { Component } from 'react';
import SoundFontPlayer from "soundfont-player";

let ac = new AudioContext();
let sfp = SoundFontPlayer.instrument(ac, 'acoustic_grand_piano');


export default class WhiteKey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying : false
        }

        this.handleKeyDownUp = this.handleKeyDownUp.bind(this);
    }

    handleKeyDownUp(note) {
        if (!this.state.isPlaying) {
        sfp.then(function (acoustic_grand_piano) {
            acoustic_grand_piano.play(note)
          })
        }
        
        this.setState({ isPlaying : !this.state.isPlaying});
    }


    render() {
        return (
            <div className={ this.state.isPlaying ? "KeyDown" : "KeyUp"} onMouseDown={() => this.handleKeyDownUp(this.props.note)} onMouseUp={() => this.handleKeyDownUp(this.props.note)}
            type={ this.props.type }>
                {this.props.note.includes('C') && this.props.type === 'white' ? <text>{this.props.note}</text> : null}
            </div>
        )
    }
}
