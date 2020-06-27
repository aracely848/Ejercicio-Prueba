import firebase from "../config/firebase";

const SignIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export default {
    SignIn
}