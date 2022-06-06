import React from 'react'
import Dashboard from './githubdashboard';
import Battle from './battle';
import { Switch ,Route } from 'react-router-dom';
function App () {
   return (
       <>
       <Switch>

           <Route path='/' exact>
            <Dashboard/>
           </Route>
           <Route path='/battle' exact>
            <Battle/>
           </Route>
       </Switch>
       
       </>
   )
}

export default App;