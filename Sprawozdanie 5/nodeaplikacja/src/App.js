import React, { useEffect, useState } from 'react';
import './App.css';
import List from './Lista';
import withListLoading from './withListLoading';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Head from "./Head";
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `127.0.0.1:8000/admin/hello/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <Router>
      <div className='container'>
        <h1>Lista</h1>
        <Route path='/Head.js' component={Head} />
      </div>
      </Router>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          <p>Create by Kamil</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
