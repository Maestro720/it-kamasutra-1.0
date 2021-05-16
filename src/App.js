import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ContentContainer from './components/Content/ContentContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from './components/Users/usersContainer';
import Login from './components/Login/Login';
import Photo from './components/Photo/PhotoContainer';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';
import {Provider} from 'react-redux';
import store from './redux/reduxStore';

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized){
      return (
        <Preloader />
      )
    }
    
    
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Nav />
          <div className='app-wrapper-content'>

            <Route path='/Dialogs' render={() => <DialogsContainer />}/>
            <Route path='/Content/:userId?' render={() => <ContentContainer />}/>
            <Route path='/Users'render={() => <UsersContainer />}/>

            <Route path='/News' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Photo/:url?' render={() => <Photo/>}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/Login' render={() => <Login/>}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = connect(mapStateToProps, {initializeApp})(App);

let MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default MainApp;
