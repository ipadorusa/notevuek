import Firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyB17qDOwrrJDVX1xAY5mqw5wSAo8jhlbqU',
  authDomain: 'vuenote-aa0fb.firebaseapp.com',
  databaseURL: 'https://vuenote-aa0fb.firebaseio.com',
  projectId: 'vuenote-aa0fb',
  storageBucket: '',
  messagingSenderId: '918795143470'
}

const app = Firebase.initializeApp(config)
const db = app.database()
const notesRef = db.ref('notes')

export default { app, db, notesRef }
