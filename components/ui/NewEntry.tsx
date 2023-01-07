import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
export const NewEntry = () => {
    return (
        <Box sx={{ marginBottom: 2, padding: 2 }}>
            <Button
                startIcon={<AddIcon />}
                fullWidth
                variant='outlined'
            >
                Agregar Tarea
            </Button>

            <TextField
                fullWidth
                sx={{marginTop:2,marginBottom:1}}
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                helperText="Ingrese un valor"
            />   

            <Box display='flex' justifyContent="space-between">
                <Button variant='text'>
                    Cancelar
                </Button>
                <Button variant='outlined' color='secondary' endIcon={<SaveIcon/>}>
                    Agregar
                </Button>
            </Box>
        </Box>
    )
}
