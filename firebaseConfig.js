// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase (usa la que Firebase te dio)
const firebaseConfig = {
  apiKey: "AIzaSyB20H5LNd6ymOhjKRwhg-iBQnLnmS3J2no",
  authDomain: "freelancer-marketplace-6efdc.firebaseapp.com",
  projectId: "freelancer-marketplace-6efdc",
  storageBucket: "freelancer-marketplace-6efdc.appspot.com",
  messagingSenderId: "334056073940",
  appId: "1:334056073940:web:de3316af461f1376b12941",
  measurementId: "G-FF8512L8LW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Exportar para usar en otros archivos
export { app, db, auth, provider };
