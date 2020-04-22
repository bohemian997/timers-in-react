import React from "react";
import Box from "../Box/Box"

export default class Currenttime extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
        this.updateTime = this.updateTime.bind(this)
    }

    updateTime(){
        setInterval(()=>{
            this.setState({date : new Date()});
        }, 1000)
    }
    
    render(){
        return (
            <div style={{paddingLeft:"32em"}}>
                <Box>
                    <h1>Current Time</h1>
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                    {this.updateTime()}
                </Box>
            </div>
        )
    }
}