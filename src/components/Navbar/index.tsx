import React, { useCallback } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'

import { Title } from './styles'
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/modules/auth/actions'
import { useHistory } from 'react-router-dom'

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = useCallback(() => {
    dispatch(signOut())
  }, [])

  return (
    <AppBar position="static">
      <Toolbar>
        <Title onClick={() => history.push('/')}>Hox Products</Title>
        <Button onClick={handleLogout} color="inherit">
          SAIR
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
