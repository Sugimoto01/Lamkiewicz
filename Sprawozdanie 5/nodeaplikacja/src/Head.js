import React, { useEffect, useState } from 'react';
import './App.css';
import List from './Lista';
import withListLoading from './withListLoading';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Head() {
  
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
      loading: false,
      repos: null,
    });
  
    useEffect(() => {
      setAppState({ loading: true });
      const apiUrl = `https://swapi.dev/api/people/1`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
    }, [setAppState]);
    return (
      <div className='App'>
        <div className='container'>
          <h1>Lista</h1>
        </div>
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

export default Head;