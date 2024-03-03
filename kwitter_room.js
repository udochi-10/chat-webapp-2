// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9DWPyI0SJ_e0NuxKKIDrOed495hldM-4",
    authDomain: "chat-webapp-f1abd.firebaseapp.com",
    databaseURL: "https://chat-webapp-f1abd-default-rtdb.firebaseio.com",
    projectId: "chat-webapp-f1abd",
    storageBucket: "chat-webapp-f1abd.appspot.com",
    messagingSenderId: "237330982356",
    appId: "1:237330982356:web:c043f3aec8090c5a086241",
    measurementId: "G-M3R9GK8PRP"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);