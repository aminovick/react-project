import React from 'react'
import{Field, reduxForm} from 'redux-form'
class StreamForm extends React.Component{
    inputComponenet=({input,label,meta})=>{
       console.log(meta)
        return(
            <div className="field">
                <label>{label}</label>
          <input {...input} autoComplete="off"/>
          <div>{this.erroMessage(meta)}</div>
          </div>
        )
    }
    erroMessage({error,touched}){
        if(error && touched){
            return<div className="ui error message">
            <div className="header">{error}
            </div>
            </div>
        }

    }
    onSubmit=formValues=>{
    this.props.onSubmit(formValues)
    }
   render(){

     return (
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="title" component={this.inputComponenet} label="Enter Name :"/>
            <Field name="description" component={this.inputComponenet} label="Enter Description :"/>
            <button className=" ui button primary">Submit</button>
        </form>
    )
}
}
const validate=formValues=>{
    const error={}
    if(!formValues.title){
        error.title="Please Enter the Title"
    }
    if(!formValues.description){
        error.description="please Enter the Description"
    }
    return error
}
export default reduxForm({form:'reduxForm',
                          validate})(StreamForm)
