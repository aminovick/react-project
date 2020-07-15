import React from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../acions'
import {Link} from 'react-router-dom'
class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
adminRender(stream){
    if(stream.currentId===this.props.currentId){
       return (<div className="right floated content">
                <Link to={`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                <Link to={`/stream/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>)
    }

}
renderList(){
 return this.props.streams.map((stream)=>{
      return(
        <div className="item" key={stream.id}>
             {this.adminRender(stream)}
        <i className="large middle aligned icon camera "/>
        <div className="content">
            <Link  to={`/stream/${stream.id}`} className="header">
            {stream.title}
            </Link>
        <div className="description">{stream.description}</div>
        </div>
        </div>
    )
})
}
renderCreatStream(){
    if(this.props.isSignedIn){
    return(
        <div style={{textAlign:'right'}}>
        <Link to ='/stream/new' className="ui button primary">
             Create Stream</Link>
     </div>
    )
    }
}
    render(){
   
    return(
        <div>
            <h2> Streams</h2>
        <div className="ui celled list ">
           {this.renderList()}
        </div>
        {this.renderCreatStream()}
        </div>
    )
}
}
const mapStatToprops=(state)=>{
    return {streams:Object.values(state.streams),
            currentId:state.auth.currentId,
            isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStatToprops,{fetchStreams})(StreamList)