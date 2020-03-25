import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Header from './components/header/header';
/*==============================*/
/*PAGES*/
/*==============================*/
import Homepage from './pages/homepage/homepage';
import UserProfilePage from './pages/user-profile-page/user-profile-page';
import SignInPage from './pages/sign-in/sign-in-page';
import SignUpPage from './pages/sign-up/sign-up-page';
import Contactpage from './pages/contactpage/contactpage';
import Aboutpage from './pages/aboutpage/aboutpage';

class App extends React.Component {
  state = {
    isAvailableInYourCountry: false,
    isLoading: true
  };
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      this.setState({
        isLoading: false
      });
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    const { currentUser, history } = this.props;
    return (
      <div className="App">
        {history.location.pathname === '/signin' ? null : history.location
            .pathname === '/signup' ? null : (
          <Header />
        )}

        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route
            exact
            path="/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
          />
          <Route exact path="/user-profile" component={UserProfilePage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/contact" component={Contactpage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
