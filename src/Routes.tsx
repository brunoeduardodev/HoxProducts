import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSafeSelector } from './hooks/useSafeSelector'
import Add from './pages/Add'
import Index from './pages/Index'
import Login from './pages/Login'
import Update from './pages/Update'

const Routes: React.FC = () => {
  const auth = useSafeSelector(state => state.auth)

  if (!auth.signed) {
    return (
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/add" exact component={Add} />
      <Route path="/update/:id" exact component={Update} />
      <Route path="/" component={Index} />
    </Switch>
  )
}

export default Routes
