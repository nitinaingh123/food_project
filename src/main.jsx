import React from 'react';
import ReactDOM from 'react-dom/client'; // Import correctly from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import Storecontextprovider from './context/Storecontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Storecontextprovider>
  <App/>
</Storecontextprovider>


</BrowserRouter>
)



