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
import { updateRequest } from '../../store/modules/products/actions'
import { useHistory, useParams } from 'react-router-dom'
import { useSafeSelector } from '../../hooks/useSafeSelector'

interface IForm {
  name: string
  price: string
  production: string
  perishable: boolean
  expiration?: string
}

const Update: React.FC = () => {
  const { control, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  const { products, loading } = useSafeSelector(state => state.products)
  const product = products.filter(product => product._id === id)[0]

  const [error, setError] = useState('')
  const [perishable, setPerishable] = useState(product.isPerishable)

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
        updateRequest({
          product: {
            name: data.name,
            price: Number(data.price),
            productionDate: new Date(data.production),
            isPerishable: perishable,
            expirationDate: data.expiration
              ? new Date(data.expiration)
              : undefined
          },
          id
        })
      )

      history.push('/')
    },
    [perishable, dispatch, history, id]
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
          defaultValue={product.name}
          fullWidth
          required
          rules={{ required: true }}
        />

        <Controller
          as={Input}
          control={control}
          name="production"
          defaultValue={product.productionDate.toISOString().slice(0, 10)}
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
            rules={{ required: true }}
            type="date"
            defaultValue={product.expirationDate?.toISOString().slice(0, 10)}
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
          defaultValue={product.price}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
          rules={{
            required: true
          }}
        />

        <Button type="submit" variant="contained" color="primary">
          {loading ? <CircularProgress size={24} /> : 'Adicionar'}
        </Button>

        <ErrorMessage>{error}</ErrorMessage>
      </Form>
    </Container>
  )
}

export default Update
