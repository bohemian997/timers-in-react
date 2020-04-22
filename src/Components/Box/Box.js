import React from "react";
import "./Box.css"

export default class Countdown extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return (
            <div className="box">
                {this.props.children}
            </div>
        )
    }
}