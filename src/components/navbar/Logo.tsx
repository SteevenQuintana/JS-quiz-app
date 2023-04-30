import { Stack, Typography } from '@mui/material'
import JavaScriptLogo from '../icons/JavaScriptLogo'

const Logo = () => {
  return (
    <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
      <JavaScriptLogo />
      <Typography variant='h3' component='h2'>
        IQ
      </Typography>
    </Stack>
  )
}

export default Logo
