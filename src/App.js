import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import DashBoard from './components/DashBoard/DashBoard';
import ReduxToastr from 'react-redux-toastr';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="containerWraper">
            <Switch>
              <Route exact path="/" component={LoginContainer}/>
              {/* below line is the alternative way change route it's more usefull to pass data */}
              <Route path="/dashboard" render={() => <DashBoard title="DashBoard"/>} />
            </Switch> 
          </div> 
        </BrowserRouter>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar />
      </div>    
    );
  }
}

export default App;
