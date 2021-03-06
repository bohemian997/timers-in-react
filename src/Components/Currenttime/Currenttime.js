import React from "react";
import Box from "../Box/Box"

export default class Currenttime extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    
    render(){
        return (
            <div style={{paddingLeft:"32em"}}>
                <Box>
                    <h1>Current Time</h1>
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                </Box>
            </div>
        )
    }

    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState({date : new Date()});
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
}