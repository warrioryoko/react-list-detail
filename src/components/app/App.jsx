import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterDetail from './avatar-characters/CharacterDetail';
import CharacterList from './avatar-characters/CharacterList';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Switch>
              <Route
                path="/" exact render={(routerProps) => <CharacterList {...routerProps} />}
              />
              <Route
                path="/:_id" exact render={(routerProps) => <CharacterDetail {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}