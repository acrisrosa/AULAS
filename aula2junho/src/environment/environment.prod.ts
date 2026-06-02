import { keys } from './environment.keys';

export const environment = {
    production: true,
    firebaseConfig: {
        apiKey: keys.apiKey,
        authDomain: 'frontend-cinel-cris.firebaseapp.com',
        projectId: 'frontend-cinel-cris',
        storageBucket: 'frontend-cinel-cris.firebasestorage.app',
        messagingSenderId: '983963187561',
        appId: '1:983963187561:web:8ec88ecac494b32cc865f8'
},
}