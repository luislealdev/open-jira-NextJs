import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';

const menuItems: string[] = ['Home', 'About us', 'Starred'];

export const SideBar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => console.log("Closing")}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {menuItems.map((text, index) => (
                        <ListItem key={text}>
                            <ListItemIcon>
                                {index % 2 ? <StarBorderOutlinedIcon /> : <StartOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <List>
                    {menuItems.map((text, index) => (
                        <ListItem key={text}>
                            <ListItemIcon>
                                {index % 2 ? <StarBorderOutlinedIcon /> : <StartOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
