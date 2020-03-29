import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  auth,
  firestore,
  createUserProfileDocument
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { updateCategories } from './redux/blog/blog.actions';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Loader from './components/loader/loader';
/*==============================*/
/*PAGES*/
/*==============================*/
import Homepage from './pages/homepage/homepage';
import UserProfilePage from './pages/user-profile-page/user-profile-page';
import SignInPage from './pages/sign-in/sign-in-page';
import SignUpPage from './pages/sign-up/sign-up-page';
import Contactpage from './pages/contactpage/contactpage';
import Aboutpage from './pages/aboutpage/aboutpage';
import Blogpage from './pages/blogpage/blogpage';
import './App.css';

import NotFound from './pages/notfoundpage/NotFoundPage';

class App extends React.Component {
  state = {
    isAvailableInYourCountry: false,
    isLoading: true
  };
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { updateCategories, setCurrentUser } = this.props;
    const blogs = [];
    this.setState({ isLoading: true });
    // const collectionRef = firestore.collection('blog_temp');
    // collectionRef.onSnapshot(async snapshot => {
    //   snapshot.docs.forEach(doc => {
    //     blogs.push(doc.data());
    //   });
    //   updateCategories(blogs);
    // });
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
        <div className="wrapper">
          {history.location.pathname === '/signin' ? null : history.location
              .pathname === '/signup' ? null : (
            <Header />
          )}
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInPage />
                }
              />
              <Route
                exact
                path="/signup"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignUpPage />
                }
              />
              <Route path="/blog" component={Blogpage} />
              <Route exact path="/user-profile" component={UserProfilePage} />
              <Route exact path="/about" component={Aboutpage} />
              <Route exact path="/contact" component={Contactpage} />
              <Route exact path="/notfound" component={NotFound} />
            </Switch>
          )}
        </div>
        {history.location.pathname === '/signin' ? null : history.location
            .pathname === '/signup' ? null : history.location.pathname ===
          '/user-profile' ? null : history.location.pathname.includes(
            '/blog'
          ) ? null : (
          <Footer />
        )}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  updateCategories: collectionsMap =>
    dispatch(updateCategories(collectionsMap)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
