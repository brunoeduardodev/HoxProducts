import React, { useCallback } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'

import { Title } from './styles'
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/modules/auth/actions'

const Navbar: React.FC = () => {
  const dispatch = useDispatch()

  const handleLogout = useCallback(() => {
    dispatch(signOut())
  }, [])

  return (
    <AppBar position="static">
      <Toolbar>
        <Title>Hox Products</Title>
        <Button onClick={handleLogout} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
