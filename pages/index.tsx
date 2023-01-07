import { Inter } from '@next/font/google'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes"/>
              <CardContent>
                {/* AGREGAR UNA NUEVA ENTRADA */}
                {/* LISTADO DE ENTRADAS */}
                <EntryList/>
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En progreso"/>
              <CardContent>
                {/* AGREGAR UNA NUEVA ENTRADA */}
                {/* LISTADO DE ENTRADAS */}
                <EntryList/>
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completado"/>
              <CardContent>
                {/* AGREGAR UNA NUEVA ENTRADA */}
                {/* LISTADO DE ENTRADAS */}
                <EntryList/>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
