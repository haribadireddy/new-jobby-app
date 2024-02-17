import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import JobsPage from './components/JobsPage'

import JobItemDetails from './components/JobItemDetails'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={JobsPage} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
  </Switch>
)

export default App
