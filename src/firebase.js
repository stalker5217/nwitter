import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCsemTuy2kKFgVqPVMLFEdV1MD2J7z1ANE",
    authDomain: "nwitter-78b40.firebaseapp.com",
    databaseURL: "https://nwitter-78b40.firebaseio.com",
    projectId: "nwitter-78b40",
    storageBucket: "nwitter-78b40.appspot.com",
    messagingSenderId: "769345128176",
    appId: "1:769345128176:web:c9e759a845ff20c493a435"
  };

export default firebase.initializeApp(firebaseConfig);