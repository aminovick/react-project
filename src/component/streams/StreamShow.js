import React, { Component } from 'react'
import {connect} from 'react-redux'
import{fetchStream } from './../../acions'
import flv from 'flv.js'
class StreamShow extends Component{
    constructor(props){
         super(props)
        this.videoref=React.createRef()
    }
    componentDidMount(){
    const {id}=this.props.match.params 
    this.props.fetchStream(id)
    this.renderPlayer();   
    }
    componentDidUpdate(){
        this.renderPlayer()
    }
    componentWillUnmount(){
        this.renderPlayer()
    }
    renderPlayer(){
        const {id}=this.props.match.params 
        if (this.player || !this.props.stream)
        return ;
        this.player=flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoref.current)
        this.player.load();

    }
    render(){
        if(!this.props.stream)
            return<div>Loading..</div>
        
    return(
       
        <div>
            <video ref={this.videoref} style={{width:'100%'}} controls/>
            <h2>{this.props.stream.title}</h2>
            <h5>{this.props.stream.description}</h5>
        </div>
    )
}
}
const mapStateToProps= (state,ownProps)=>{
    return {stream :state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream}) (StreamShow)