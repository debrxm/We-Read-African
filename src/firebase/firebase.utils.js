import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBfDAO2wKANNUfLRU-e-sP8XKCrXBgyJdw',
  authDomain: 'remedi-clothing.firebaseapp.com',
  databaseURL: 'https://remedi-clothing.firebaseio.com',
  projectId: 'remedi-clothing',
  storageBucket: 'remedi-clothing.appspot.com',
  messagingSenderId: '873842050532',
  appId: '1:873842050532:web:2449a71520a76c302233f1',
  measurementId: 'G-9ZVJLLP1N7'
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => console.log('Sign In With Facebook');

export default firebase;
