import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  const basicTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>


  )
}
