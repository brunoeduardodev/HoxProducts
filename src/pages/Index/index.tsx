import React, { useCallback, useMemo, useState } from 'react'
import Navbar from '../../components/Navbar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Paper,
  Checkbox
} from '@material-ui/core'
import {
  Container,
  TablePanel,
  EditIcon,
  RemoveIcon,
  AddButton
} from './styles'
import { useSafeSelector } from '../../hooks/useSafeSelector'
import { Product } from '../../store/modules/products/types'
import { useDispatch } from 'react-redux'
import { deleteRequest } from '../../store/modules/products/actions'
import { useHistory } from 'react-router-dom'

const headCells = [
  { id: 'name', numeric: false, date: false, boolean: false, label: 'Nome' },
  {
    id: 'production',
    numeric: false,
    date: true,
    boolean: false,
    label: 'Data de Fabricação'
  },
  {
    id: 'perishable',
    numeric: false,
    date: false,
    boolean: true,
    label: 'Perecível?'
  },
  {
    id: 'expiration',
    numeric: false,
    date: true,
    boolean: false,
    label: 'Data de Vencimento'
  },
  {
    id: 'price',
    numeric: true,
    date: false,
    boolean: false,
    label: 'Preço (R$)'
  }
]

type OrdersTypes = 'name' | 'production' | 'perishable' | 'expiration' | 'price'

const Index: React.FC = () => {
  const { products } = useSafeSelector(state => state.products)
  const [orderBy, setOrderBy] = useState<OrdersTypes>('name')
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSort = useCallback(
    (headId: string) => {
      if (orderBy === headId) {
        setOrder(order === 'asc' ? 'desc' : 'asc')
        return
      }

      setOrderBy(headId as OrdersTypes)
      setOrder('asc')
    },
    [order, orderBy]
  )

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(Number(event.target.value))
      setPage(0)
    },
    []
  )

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage)
  }, [])

  const productsFixed = useMemo(() => {
    const newProducts = products.sort((a, b) => {
      let result = false
      if (orderBy === 'name') {
        result = a.name > b.name
      } else if (orderBy === 'perishable') {
        result = a.isPerishable
      } else if (orderBy === 'production') {
        result = a.productionDate > b.productionDate
      } else if (orderBy === 'expiration') {
        if (a.expirationDate) {
          if (b.expirationDate) {
            result = a.expirationDate > b.expirationDate
          } else {
            result = true
          }
        } else {
          result = false
        }
      } else if (orderBy === 'price') {
        result = a.price > b.price
      }

      if (order === 'desc') result = !result

      return result ? 1 : -1
    })

    const pageProducts = newProducts.slice(
      rowsPerPage * page,
      rowsPerPage * (page + 1)
    )

    return pageProducts
  }, [orderBy, order, products, page, rowsPerPage])

  const handleDelete = useCallback(
    (product: Product) => {
      const confirmation = window.confirm(
        `Tem certeza que deseja deletar ${product.name}`
      )

      if (!confirmation) return

      dispatch(deleteRequest({ id: product._id }))
    },
    [dispatch]
  )

  const handleEdit = useCallback(
    (id: string) => {
      history.push(`/update/${id}`)
    },
    [history]
  )

  const handleAdd = useCallback(() => {
    history.push('/add')
  }, [history])

  return (
    <Container>
      <Navbar />
      <h1>Listagem de Produtos</h1>
      <TablePanel as={Paper}>
        <AddButton onClick={handleAdd} variant="contained" color="primary">
          Adicionar Produto
        </AddButton>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map(cell => (
                <TableCell
                  sortDirection={orderBy === cell.id ? order : false}
                  align={cell.numeric || cell.date ? 'right' : 'left'}
                  key={cell.id}
                >
                  <TableSortLabel
                    onClick={() => handleSort(cell.id)}
                    active={orderBy === cell.id}
                    direction={orderBy === cell.id ? order : 'asc'}
                  >
                    {cell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productsFixed.map(product => (
              <TableRow key={product._id}>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="right">
                  {product.productionDate.toISOString().slice(0, 10)}
                </TableCell>
                <TableCell align="left">
                  <Checkbox checked={product.isPerishable} />
                </TableCell>
                <TableCell align="right">
                  {product.expirationDate
                    ? product.expirationDate.toISOString().slice(0, 10)
                    : '--------'}
                </TableCell>
                <TableCell align="right">
                  R${product.price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <EditIcon onClick={() => handleEdit(product._id)} />
                  <RemoveIcon onClick={() => handleDelete(product)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TablePanel>
    </Container>
  )
}

export default Index
