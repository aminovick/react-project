import React from 'react'
import {connect} from 'react-redux'
import{signIn,signOut}from '../acions'
class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'364609148146-nnl1tjhrmnb0o01rpk1fm8sj926d7sq1.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                 this.auth=window.gapi.auth2.getAuthInstance();
                 this.onchangeSignIn (this.auth.isSignedIn.get())
                 this.auth.isSignedIn.listen(this.onchangeSignIn)
            })
        })
    }
    onchangeSignIn=(isSignedIn)=>{
        if(isSignedIn){
            return this.props.signIn(this.auth.currentUser.get().getId())
        }
        else 
        return this.props.signOut()

    }
    signInClick=()=>{
        this.auth.signIn()
    }
    singOutClick=()=>{
        this.auth.signOut()
    }
    renderButton(){
        if(this.props.isSignedIn===null){
         return null;
        }
        else if(this.props.isSignedIn){
            return(  
            <button className="ui red google button"
                     onClick={this.singOutClick}>
                <i className="google icon"/>
                Sign Out
            </button>
            )
        }
        else
        return(  
            <button className="ui red google button"
                    onClick={this.signInClick}>
                <i className="google icon"/>
                SIgn In
            </button>
            )
        
    }
    render(){
        return(
            <div>{this.renderButton()}</div>
        )
    }
}
const mapStateToprops =(state)=>{
      return{
        isSignedIn:state.auth.isSignedIn
    }
}
export default connect(mapStateToprops,{signIn,signOut} )(GoogleAuth)