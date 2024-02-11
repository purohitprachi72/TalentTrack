// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	setPersistence,
	browserSessionPersistence,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCP-w9xGgDA33OhtBOmSTEIG-dpQxz-bA4',
	authDomain: 'talenttrack-30c71.firebaseapp.com',
	projectId: 'talenttrack-30c71',
	storageBucket: 'talenttrack-30c71.appspot.com',
	messagingSenderId: '820089088507',
	appId: '1:820089088507:web:76be567b2e8d1f352f435e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
