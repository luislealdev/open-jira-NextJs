import { useState, ChangeEvent, useMemo, FC } from 'react';
import { GetServerSideProps } from 'next'
import { Layout } from "../../components/layouts";
import { capitalize, CardHeader, Grid, Card, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import { EntryStatus, Entry } from '../../interfaces/entries';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { dbEntries } from '../../database';

interface Props {
    entry: Entry
}
export const EntryPage: FC<Props> = ({ entry }) => {

    const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

    const [inputText, setInputText] = useState(entry.description);
    const [status, setStatus] = useState(entry.status);

    const [hasTouched, setHasTouched] = useState(false);

    const isValid = useMemo(() => !(inputText.length <= 0 && hasTouched), [inputText, hasTouched]);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const onChangeRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value)
    }

    const onSave = () => {
        console.log({ inputText, status });
    }


    return (
        <Layout title={inputText}>
            <>
                <Grid
                    container
                    justifyContent='center'
                    sx={{ marginTop: 2 }}
                >
                    <Grid item xs={12} sm={8} md={6}>
                        <Card>
                            <CardHeader
                                title={`Entrada: ${inputText}`}
                                subheader={`Creada hace ... minutos`}
                            />
                            <CardContent>
                                <TextField
                                    sx={{ marginTop: 2, marginBottom: 1 }}
                                    fullWidth
                                    placeholder="Nueva entrada"
                                    autoFocus
                                    multiline
                                    label="Nueva entrada"
                                    onChange={onInputChange}
                                    helperText={!isValid && 'Ingresa un valor'}
                                    onBlur={() => setHasTouched(true)}
                                    error={!isValid}
                                />

                                {/* RADIO */}
                                <FormControl>
                                    <FormLabel>Estado:</FormLabel>
                                    <RadioGroup
                                        value={status}
                                        onChange={onChangeRadioButton}
                                        row>
                                        {validStatus.map(status => (
                                            <FormControlLabel
                                                key={status}
                                                value={status}
                                                control={<Radio />}
                                                label={capitalize(status)}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </CardContent>


                            <CardActions>
                                <Button
                                    startIcon={<SaveOutlinedIcon />}
                                    variant="contained"
                                    fullWidth
                                    onClick={onSave}
                                    disabled={inputText.length <= 0}
                                >
                                    Guardar
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>

                <IconButton sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'error.dark'
                }}>
                    <DeleteOutlinedIcon />
                </IconButton>
            </>
        </Layout>
    )
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string }

    const entry = await dbEntries.getEntryById(id);



    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}




export default EntryPage;