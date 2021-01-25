import styled from 'styled-components'
import { TableContainer, Button, Table as MTable } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  h1 {
    margin: 16px;
  }
`

export const TablePanel = styled(TableContainer)`
  width: 80vw;
  background-color: #fff;
  overflow-x: scroll;

  @media (max-width: 1024px){
    width: 100vw;
  }
}
`

export const EditIcon = styled(Edit)`
  cursor: pointer;
`

export const RemoveIcon = styled(Delete).attrs({
  htmlColor: '#F00'
})`
  cursor: pointer;
  margin-left: 8px;
`

export const AddButton = styled(Button)`
  display: flex;
  flex: auto;
  padding: 6px 48px;
  margin: 8px 8px 8px auto;

  @media (max-width: 1024px) {
    margin: 8px auto;
  }
`

export const Table = styled(MTable)`
  min-width: 800px;
`
