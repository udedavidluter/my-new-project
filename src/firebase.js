import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA4dYMdq2vmUDfeGKW2SrWfFAbvEjmAXe4',
  authDomain: 'my-portifolio-website-eb0f5.firebaseapp.com',
  projectId: 'my-portifolio-website-eb0f5',
  
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)