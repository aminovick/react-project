import React from 'react';
import {Route,Router,Switch} from 'react-router-dom';
import StreamList from '../component/streams/StreamList';
import StreamEdit from '../component/streams/StreamEdit';
import StreamShow from '../component/streams/StreamShow';
import StreamDelete from '../component/streams/StreamDelete';
import StreamCreate from '../component/streams/StreamCreate';
import Header from './Header'
import history from '../history'

const App=()=>{
    return(
        <div className = "ui container">
           <Router history={history}>
           <Header/>
           <div>
               <Switch>
               <Route path="/" exact component={StreamList}/>
               <Route path="/stream/edit/:id" exact component={StreamEdit}/>
               <Route path="/stream/:id" exact component={StreamShow}/>
               <Route path="/stream/delete/:id" exact component={StreamDelete}/>
               <Route path="/stream/new" exact component={StreamCreate}/>
               </Switch>
           </div>
           </Router>
        </div>
    )
}
export default App