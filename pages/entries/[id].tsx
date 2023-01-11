import { Layout } from "../../components/layouts";
import { capitalize, CardHeader, Grid, Card, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import { EntryStatus } from '../../interfaces/entries';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const EntryPage = () => {

    const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

    return (
        <Layout title="blabla">
            <>
                <Grid
                    container
                    justifyContent='center'
                    sx={{ marginTop: 2 }}
                >
                    <Grid item xs={12} sm={8} md={6}>
                        <Card>
                            <CardHeader
                                title="Entrada"
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
                                />

                                {/* RADIO */}
                                <FormControl>
                                    <FormLabel>Estado:</FormLabel>
                                    <RadioGroup
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
                                >
                                    Guardar
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>

                <IconButton sx={{
                    position:'fixed',
                    bottom:30,
                    right:30,
                    backgroundColor:'error.dark'
                }}>
                    <DeleteOutlinedIcon />
                </IconButton>
            </>
        </Layout>
    )
}

export default EntryPage;