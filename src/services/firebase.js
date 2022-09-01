import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import itemsData from '../data/data'

const firebaseConfig = {
  apiKey: "AIzaSyAqAlSGKZeKsRCmMPe4tz_Ums3u3myclRM",
  authDomain: "my-react-app-f1edd.firebaseapp.com",
  projectId: "my-react-app-f1edd",
  storageBucket: "my-react-app-f1edd.appspot.com",
  messagingSenderId: "856389624825",
  appId: "1:856389624825:web:602aafc35c28a1112c1328"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export async function saveProductsToFirebase() {
  const collectionSandwichs = collection(firestoreDB, "sandwichs");

  for (let item of itemsData) {
    const docref = await addDoc(collectionSandwichs, item);
    console.log("documento creado con id:", docref.id);
  }
}

export default firestoreDB;