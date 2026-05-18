import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function CustomersList() {
  const [customers, setCustomers] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    let isMounted = true

    fetch('https://api.faustocintra.com.br/v2/customers')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro ao carregar clientes: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (isMounted) {
          setCustomers(Array.isArray(data) ? data : [])
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const columns = [
    {
      field: 'id',
      headerName: 'Cód.',
      width: 90,
    },
    {
      field: 'name',
      headerName: 'Nome',
      width: 250,
    },
    {
      field: 'birth_date',
      headerName: 'Data nasc.',
      width: 150,
      valueFormatter: (params) => {
        if (params.value) {
          const date = new Date(params.value)
          return date.toLocaleDateString('pt-BR')
        }
        return ''
      },
    },
    {
      field: 'municipality',
      headerName: 'Município/UF',
      width: 250,
      valueGetter: (params) => {
        const municipality = params?.row?.municipality || ''
        const state = params?.row?.state || ''
        return municipality || state ? `${municipality}/${state}` : ''
      },
    },
    {
      field: 'phone',
      headerName: 'Celular',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 250,
    },
  ];


  return <>
    <Typography variant="h1" gutterBottom>
      Listagem de clientes
    </Typography>
    {error && (
      <Typography color="error" sx={{ mb: 2 }}>
        {error}
      </Typography>
    )}
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  </>
}
