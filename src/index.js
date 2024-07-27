import React from 'react';
import ReactDOM from 'react-dom/client';

import { TileMapEditor } from './apps';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TileMapEditor />
  </React.StrictMode>
);
