import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RequestStore from './Store/RequestStore';
import StatsStore from './Store/StatsStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'>
    <React.StrictMode>
    <RequestStore>
      <StatsStore>
        <App />
      </StatsStore>
    </RequestStore>
    </React.StrictMode>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
