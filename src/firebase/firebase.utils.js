import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfOZTme6RWsZUzxwaMi0f3yYWMrDF-1S8',
  authDomain: 'we-read-african.firebaseapp.com',
  databaseURL: 'https://we-read-african.firebaseio.com',
  projectId: 'we-read-african',
  storageBucket: 'we-read-african.appspot.com',
  messagingSenderId: '1057818585153',
  appId: '1:1057818585153:web:dfa8c3fc20bafb0d957ec0',
  measurementId: 'G-3J9N7K0V7B',
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyBZSP7CF1qWOUtI7710O6eT_SJPzm2ow1k',
//   authDomain: 'blog-test-cf27d.firebaseapp.com',
//   databaseURL: 'https://blog-test-cf27d.firebaseio.com',
//   projectId: 'blog-test-cf27d',
//   storageBucket: 'blog-test-cf27d.appspot.com',
//   messagingSenderId: '712716765117',
//   appId: '1:712716765117:web:757aed783e2814d70eb4d4',
//   measurementId: 'G-3E2DRSVVNM',
// };

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const convertTrendingForumSnapshotToMap = (collections) => {
  const compare = (a, b) => {
    if (a.view.views.length < b.view.views.length) return 1;
    if (a.view.views.length < b.view.views.length) return -1;
    return 0;
  };

  return collections.sort(compare).filter((item, index) => index < 24);
};
export const convertFeaturedForumSnapshotToMap = (collections) => {
  const compare = (a, b) => {
    if (a.view.views.length < b.view.views.length) return 1;
    if (a.view.views.length < b.view.views.length) return -1;
    return 0;
  };

  return collections.sort(compare).filter((item, index) => index < 9);
};
export const convertFavSnapshotToMap = (collections) => {
  const compare = (a, b) => {
    if (a.view.views.length < b.view.views.length) return 1;
    if (a.view.views.length < b.view.views.length) return -1;
    return 0;
  };

  return collections.sort(compare).filter((item, index) => index < 4);
};

export const getAllComments = async ({ collection, documente }) => {
  const commentRef = firestore.doc(`${collection}/${documente}`);
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
export const updateViews = async ({ collection, title, userIp }) => {
  const viewRef = firestore.doc(`${collection}/${title}`);
  const newView = [];
  newView.push(userIp);
  const snapShot = await viewRef.get();
  if (!snapShot.exists) {
    try {
      await viewRef.set({
        views: newView,
      });

      return viewRef;
    } catch (error) {
      console.log('error adding view to database', error.message);
    }
  } else {
    let oldView = [];
    oldView = snapShot.data().views;
    oldView.push(userIp);
    try {
      if (snapShot.data().views.includes(userIp) === false) {
        await viewRef.update({
          views: oldView,
        });
      }
      return viewRef;
    } catch (error) {
      console.log('error adding view to database', error.message);
    }
  }
};
export const sendNewTopicToDatabase = async (topicData) => {
  const newTopicRef = firestore.doc(`forum/${topicData.title}`);
  const snapShot = await newTopicRef.get();
  if (!snapShot.exists) {
    try {
      await newTopicRef.set({
        ...topicData,
      });
      return newTopicRef;
    } catch (error) {
      console.log('error adding comment to database', error.message);
    }
  } else {
    return 'This topic already exist';
  }
};
export const addAReply = async ({ collection, d_ata, commentId, blogName }) => {
  // const addReplyRef =
  // console.log(collection, d_ata, commentId, blogName);
  const addReplyRef = firestore.doc(`${collection}/${blogName}`);
  const snapShot = await addReplyRef.get();
  // snapShot.forEach((doc) => {
  //   console.log(doc);
  // });
  const { comments } = snapShot.data();
  const updatedComment = [];
  comments.forEach(async (item) => {
    if (item.id === commentId) {
      // console.log(item);
      // console.log(comments.indexOf(item));

      const { replies } = item;
      let oldReply = [];
      oldReply = replies;
      oldReply.push(d_ata);
      updatedComment.push(item);
    }
    if (item.id !== commentId) {
      updatedComment.push(item);
    }
  });
  // console.log(updatedComment);
  try {
    await addReplyRef.update({
      comments: updatedComment,
    });
    return addReplyRef;
  } catch (error) {
    console.log('error Updating comment', error.message);
  }
};
export const addAComment = async ({ collection, d_ata }) => {
  // console.log(collection, d_ata);
  const addCommentRef = firestore.doc(`${collection}/${d_ata.post}`);
  const newComment = [];
  newComment.push(d_ata);
  const snapShot = await addCommentRef.get();
  if (!snapShot.exists) {
    try {
      await addCommentRef.set({
        comments: newComment,
      });
      return addCommentRef;
    } catch (error) {
      console.log('error adding comment to database', error.message);
    }
  } else {
    let oldComment = [];
    oldComment = snapShot.data().comments;
    oldComment.push(d_ata);
    try {
      await addCommentRef.update({
        comments: oldComment,
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
  prompt: 'select_account',
});
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: 'popup',
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
