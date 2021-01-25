/* eslint-disable multiline-ternary */
import React, { useCallback } from 'react'

import { InputAdornment, CircularProgress } from '@material-ui/core'

import { EmailOutlined, LockOutlined } from '@material-ui/icons'

import { Container, LoginPanel, Input, Button, ErrorMessage } from './styles'

import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signInRequest } from '../../store/modules/auth/actions'
import { useSafeSelector } from '../../hooks/useSafeSelector'

interface IForm {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { control, handleSubmit, errors } = useForm()

  const auth = useSafeSelector(state => state.auth)
  const dispatch = useDispatch()

  const onSubmit = useCallback((data: IForm) => {
    console.log('Dispachando')
    dispatch(signInRequest(data))
  }, [])

  return (
    <Container>
      <LoginPanel onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <Controller
          as={Input}
          control={control}
          rules={{ required: true }}
          fullWidth
          name="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined htmlColor="#DADADA" />
              </InputAdornment>
            )
          }}
          label="EMAIL"
        />
        {errors.email && 'Preencha o email!'}
        <Controller
          as={Input}
          control={control}
          rules={{ required: true }}
          fullWidth
          name="password"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined htmlColor="#DADADA" />
              </InputAdornment>
            )
          }}
          label="SENHA"
        />

        <Button
          disabled={auth.loading}
          variant="contained"
          color="primary"
          type="submit"
        >
          {auth.loading ? (
            <CircularProgress color="primary" size={24} />
          ) : (
            'ENTRAR'
          )}
        </Button>

        <ErrorMessage>{auth.error}</ErrorMessage>
      </LoginPanel>
    </Container>
  )
}

export default Login
