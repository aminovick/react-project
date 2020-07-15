import React, { Component } from 'react'
import Modal from '../../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import{Link} from 'react-router-dom'
import {fetchStream,deleteStream} from '../../acions'
class StreamDelete extends Component {
    componentDidMount (){
        this.props.fetchStream(this.props.match.params.id)
    }
    action(){
        const id=this.props.match.params.id;
        return(
            <React.Fragment>
            <button onClick={()=>this.props.deleteStream(id)} className="ui primary button">Delete</button>
            <Link to='/'className="ui  button">Cancel</Link>
            </React.Fragment>
            
   )
}
renderContent(){
    if(!this.props.stream){
        return 'Voulez vous supprimmer ce Stream ?';
    }
    return `Voulez vous supprimmer ${this.props.stream.title}`
}
    render(){
    return(
        <div>
            <Modal title="Delete Stream"
                   content={this.renderContent()}
                   action={this.action()}
                   onDismiss={()=>history.push('/')}/>
        </div>
    )
}
}
const mapStateToProps=(state,ownProps)=>{
    return {stream :state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream,deleteStream}) (StreamDelete)