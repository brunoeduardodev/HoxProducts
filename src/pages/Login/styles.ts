import styled from 'styled-components'

import { TextField, Button as MButton } from '@material-ui/core'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 16px;
  }
`

export const LoginPanel = styled.form`
  background-color: #fff;
  width: 40vw;
  height: 60vh;

  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  justify-content: center;
  align-items: center;
  display: flex;

  flex-direction: column;

  padding: 24px 60px;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 512px) {
    width: 100vw;
  }

  @media (max-width: 440px) {
    padding: 24px 8px;
  }
`

export const Input = styled(TextField)`
  margin-bottom: 16px;
`

export const Button = styled(MButton)`
  margin-top: 32px;
  padding: 6px 48px;
`

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 16px;
`
