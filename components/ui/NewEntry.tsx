import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';
export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);

    const { isAddingEntry, changeIsAddingEntry } = useContext(UIContext);

    const [hasTouched, setHasTouched] = useState(false);
    const [inputText, setInputText] = useState('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const onSave = () => {
        if (inputText.length <= 0) return;

        addNewEntry(inputText);

        changeIsAddingEntry(false);
        setHasTouched(false);
        setInputText('')

    }

    return (
        <Box sx={{ marginBottom: 2, padding: 2 }}>
            {isAddingEntry ?
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder="Nueva entrada"
                        autoFocus
                        multiline
                        label="Nueva entrada"
                        helperText={inputText.length <= 0 && hasTouched && 'Ingresa un valors'}
                        value={inputText}
                        onChange={onInputChange}
                        error={inputText.length <= 0 && hasTouched}
                        onBlur={() => setHasTouched(true)}
                    />

                    <Box display='flex' justifyContent="space-between">
                        <Button variant='text' onClick={() => { changeIsAddingEntry(false); setHasTouched(false) }}>
                            Cancelar
                        </Button>
                        <Button variant='outlined' color='secondary' endIcon={<SaveIcon />} disabled={inputText.length <= 0} onClick={onSave}>
                            Agregar
                        </Button>
                    </Box>
                </>


                :
                <Button
                    startIcon={<AddIcon />}
                    fullWidth
                    variant='outlined'
                    onClick={() => changeIsAddingEntry(true)}
                >
                    Agregar Tarea
                </Button>
            }



        </Box >
    )
}
