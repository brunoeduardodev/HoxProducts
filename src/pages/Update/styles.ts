import {
  TextField,
  Switch,
  Button as MButton,
  FormControlLabel
} from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  width: 80vw;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px;

  @media (max-width: 640px) {
    width: 100vw;
  }

  h1 {
    margin: 16px;
    text-align: center;
  }
`
export const Input = styled(TextField)`
  margin-bottom: 24px;
`

export const Perishable = styled(Switch)``

export const PerishableLabelControl = styled(FormControlLabel)`
  margin-bottom: 24px;
`

export const Button = styled(MButton)`
  margin-top: 32px;
  padding: 6px 48px;
  align-self: center;
`

export const ErrorMessage = styled.span`
  color: red;
  text-align: center;
  margin-top: 8px;
`
