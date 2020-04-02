import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZSP7CF1qWOUtI7710O6eT_SJPzm2ow1k',
  authDomain: 'blog-test-cf27d.firebaseapp.com',
  databaseURL: 'https://blog-test-cf27d.firebaseio.com',
  projectId: 'blog-test-cf27d',
  storageBucket: 'blog-test-cf27d.appspot.com',
  messagingSenderId: '712716765117',
  appId: '1:712716765117:web:757aed783e2814d70eb4d4',
  measurementId: 'G-3E2DRSVVNM'
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL, emailVerified } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        emailVerified,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const getAllComments = async title => {
  const commentRef = firestore.doc(`blog_comments/${title}`);
  const snapShot = await commentRef.get();
  if (snapShot.exists) {
    try {
      return commentRef;
    } catch (error) {
      console.log('error creating user', error.message);
    }
  } else {
    return null;
  }
};
export const sendNewTopicToDatabase = async topicData => {
  const newTopicRef = firestore.doc(`forum/${topicData.title}`);
  const snapShot = await newTopicRef.get();
  if (!snapShot.exists) {
    try {
      await newTopicRef.set({
        topic_data: topicData
      });
      return newTopicRef;
    } catch (error) {
      console.log('error adding comment to database', error.message);
    }
  } else {
    return 'This topic already exist';
  }
};
export const addAComment = async commentData => {
  const addCommentRef = firestore.doc(`blog_comments/${commentData.post}`);
  const newComment = [];
  newComment.push(commentData);
  const snapShot = await addCommentRef.get();
  if (!snapShot.exists) {
    try {
      await addCommentRef.set({
        comments: newComment
      });
      return addCommentRef;
    } catch (error) {
      console.log('error adding comment to database', error.message);
    }
  } else {
    let oldComment = [];
    oldComment = snapShot.data().comments;
    oldComment.push(commentData);
    try {
      await addCommentRef.update({
        comments: oldComment
      });
      return addCommentRef;
    } catch (error) {
      console.log('error adding comment to database', error.message);
    }
  }
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: 'popup'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
