import React from "react";
import Box from "../Box/Box"

export default class CountUp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 1,
        }
    }
    
    render(){
        return (
            <div style={{paddingLeft:"32em"}}>
                <Box>
                    <h1>Count Up</h1>
                    <p style={{fontSize : "40px"}}>{this.state.count}</p>
                </Box>
            </div>
        )
    }

    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState(prev => ({
                count : prev.count + 1
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
}