import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cors from 'cors'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
   
 
);
// const corsOptions = {
//     origin: 'http://localhost:3000/',
//     optionsSuccessStatus: 200,
//     credentials: true
    
// }

// App.use(cors(corsOptions));


// App.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })


