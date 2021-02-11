import firebase from  'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCr9DccVTa5sWJg9I0JoPNc_KoOiPuqyEM",
        authDomain: "hesinburger.firebaseapp.com",
        projectId: "hesinburger",
        storageBucket: "hesinburger.appspot.com",
        messagingSenderId: "245806598392",
        appId: "1:245806598392:web:2c115eebad203ceb6b130d",
        measurementId: "G-9PL3LDBQE1"
      }
)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}