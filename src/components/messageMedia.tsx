import type { ChatMessageMedia } from "types";
import { Box, Link, Typography } from "@mui/material";



interface Props {
    media: ChatMessageMedia | null,
}

const styles = {
    "width": "100%",
    "borderRadius": "20px"
};

const Image = ({ link, name }: ChatMessageMedia) => <Box>
    <img
        src={link}
        alt={name}
        loading="lazy"
        style={styles}
    />
</Box>;

const Audio = ({ link }: ChatMessageMedia) => <audio
    controls
    src={link}
    style={styles} />;

const Video = ({ link }: ChatMessageMedia) => <video style={styles}><source src={link} /></video>;

const Application = ({ link, name }: ChatMessageMedia) =>
    <Link href={link} target="__blank" color="#fff">
        <Typography color="#fff" fontSize="14px">
            {name}
        </Typography>
    </Link>;

export function MessageMedia({ media }: Props) {
    return <Box mb={1}>
        {
            media?.contentType === "image" ?
                <Image {...media} /> :
                media?.contentType === "audio" ?
                    <Audio {...media} /> :
                    media?.contentType === "video" ?
                        <Video {...media} /> :
                        media?.contentType === "application" ?
                            <Application {...media} /> : null
        }
    </Box>;
}