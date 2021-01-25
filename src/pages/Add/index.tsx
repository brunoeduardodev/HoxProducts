import React, { useCallback, useState } from 'react'
import {
  Container,
  Form,
  Input,
  Perishable,
  Button,
  ErrorMessage,
  PerishableLabelControl
} from './styles'
import { CircularProgress, InputAdornment } from '@material-ui/core'
import Navbar from '../../components/Navbar'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addRequest } from '../../store/modules/products/actions'
import { useHistory } from 'react-router-dom'
import { useSafeSelector } from '../../hooks/useSafeSelector'

interface IForm {
  name: string
  price: string
  production: string
  perishable: boolean
  expiration?: string
}

const Add: React.FC = () => {
  const [perishable, setPerishable] = useState(false)
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const products = useSafeSelector(state => state.products)
  const [error, setError] = useState('')

  const onSubmit = useCallback(
    (data: IForm) => {
      if (
        data.expiration &&
        new Date(data.production) > new Date(data.expiration)
      ) {
        setError('A data de fabricação não pode ser maior que a de vencimento')
        return
      }

      dispatch(
        addRequest({
          product: {
            name: data.name,
            price: Number(data.price),
            productionDate: new Date(data.production),
            isPerishable: perishable,
            expirationDate: data.expiration
              ? new Date(data.expiration)
              : undefined
          }
        })
      )

      history.push('/')
    },
    [perishable, dispatch, history]
  )

  return (
    <Container>
      <Navbar />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro de Produto</h1>

        <Controller
          as={Input}
          control={control}
          name="name"
          label="Nome"
          fullWidth
          required
          rules={{ required: true }}
        />

        <Controller
          as={Input}
          control={control}
          name="production"
          label="Data de Fabricação"
          type="date"
          required
          rules={{ required: true }}
          InputLabelProps={{
            shrink: true
          }}
        />

        <PerishableLabelControl
          control={
            <Perishable
              checked={perishable}
              onChange={event => setPerishable(event.target.checked)}
              color="primary"
            />
          }
          label="Perecível?"
        />

        {perishable && (
          <Controller
            as={Input}
            control={control}
            name="expiration"
            label="Data de Vencimento"
            type="date"
            rules={{ required: true }}
            InputLabelProps={{
              shrink: true
            }}
          />
        )}

        <Controller
          as={Input}
          control={control}
          name="price"
          label="Preço"
          required
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
          rules={{
            required: true
          }}
        />

        <Button
          disabled={products.loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          {products.loading ? <CircularProgress size={24} /> : 'Adicionar'}
        </Button>

        <ErrorMessage>{error}</ErrorMessage>
      </Form>
    </Container>
  )
}

export default Add
