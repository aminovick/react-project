import React from 'react'
import {connect} from 'react-redux'
import {creatStream} from '../../acions'
import StreamForm from './StreamFom'
class StreamCreate extends React.Component{

    onSubmit=(formValues)=>{
    this.props.creatStream(formValues)
    }
   render(){
   
     return (
       <div>
           <h2>Stream Create</h2>
           <StreamForm onSubmit={this.onSubmit} />

       </div>
    )
}
}


export default connect(null,{creatStream})(StreamCreate)
