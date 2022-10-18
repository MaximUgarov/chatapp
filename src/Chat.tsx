import {
    Container, Divider, Grid, Box,
    List, Paper, Typography
} from "@mui/material";
import { CircularProgress } from "@mui/material";

import { MessagesList } from "components/messagesList";
import { useAppSelector } from "store";
import { messagesSelector, isConnectedSelector } from "store/selectors";



export default function Chat() {
    const isConnected = useAppSelector(isConnectedSelector);
    const messages = useAppSelector(messagesSelector);

    return <Container>
        <Paper elevation={5}>
            <Box p={3}>
                <Typography variant="h4">
                    Входящие сообщения ChatApp
                </Typography>
                <Divider />
                <Grid container spacing={4} pb={6}>
                    <Grid xs={12} item sx={{ height: "80vh" }}>
                        {isConnected ?
                            <List sx={{ height: 1, overflowY: "auto" }}>
                                <MessagesList data={messages} />
                            </List> :
                            <Box sx={{
                                display: "flex",
                                width: 1,
                                height: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <CircularProgress size={90} />
                            </Box>
                        }
                        <Divider />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    </Container >;
}