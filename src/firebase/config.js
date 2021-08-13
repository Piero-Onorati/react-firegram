import * as firebase from 'firebase/app';

// Import the servers: storage and firestore(database)
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAregyYsfvucmLGGTsRXeQxXRW2JJv-b80",
    authDomain: "react-firegram-a101b.firebaseapp.com",
    projectId: "react-firegram-a101b",
    storageBucket: "react-firegram-a101b.appspot.com",
    messagingSenderId: "377323885047",
    appId: "1:377323885047:web:1e7154825c1e305689def2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the servers
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

// Export the servers
export { projectStorage, projectFirestore };