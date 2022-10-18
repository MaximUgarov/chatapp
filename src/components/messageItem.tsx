import type { ChatMessage } from "types";
import { ListItem, ListItemAvatar, Avatar, Box, Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";

import { MessageMedia } from "./messageMedia";



interface Props {
    data: ChatMessage,
}

function enumIcon(type: string): JSX.Element {
    switch (type) {
        case "telegram": return <TelegramIcon fontSize="small" />;
        case "grWhatsApp": return <WhatsAppIcon fontSize="small" />;
        default: return <ChatIcon fontSize="small" />;
    }
}

export function MessageItem({ data }: Props) {
    const { username, name } = data.fromUser;
    const { text, file, caption, messager } = data;

    return <ListItem>
        <Box sx={{ pt: 1, pb: 1, pl: 2, pr: 2, backgroundColor: "#3f50b5", borderRadius: "20px", maxWidth: "70%" }}>
            <Stack direction="row" mb={2} sx={{ alignItems: "center" }}>
                <ListItemAvatar>
                    <Avatar>
                        {enumIcon(messager)}
                    </Avatar>
                </ListItemAvatar>
                <Typography color="#fff" fontSize="16px">
                    {name || username}
                </Typography>
            </Stack>
            {Boolean(file) && <MessageMedia media={file} />}
            <Typography color="#fff" fontSize="14px">
                {text || caption}
            </Typography>
        </Box>
    </ListItem >;
}