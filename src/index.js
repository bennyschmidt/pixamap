import React from 'react';
import ReactDOM from 'react-dom/client';
import { Editor } from './pages';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);
