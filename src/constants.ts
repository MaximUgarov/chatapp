export const chatAppConfig = {
    wsHost: "socket.chatapp.online",
    wssPort: 6001,
    disableStats: true,
    authEndpoint: "https://api.chatapp.online/broadcasting/auth",
    auth: {
        headers: {
            "Authorization": "$2y$10$Ety66Z0UO15FRHJDgELQqO7X2rKNGtc1YUkPBLvNPznECOwMczU.C"
        }
    },
    enabledTransports: ["ws"],
    forceTLS: true,
    chanels: ["private-v1.licenses.22295.messengers.telegram", "private-v1.licenses.22295.messengers.grWhatsApp"]
};

export const mediaFormats = [
    { type: "image", fromats: ["png", "jpg", "jpeg"] },
    { type: "audio", fromats: ["acc", "amr", "mpeg", "ogg"] },
    { type: "video", fromats: ["mp4", "oga"] },
    { type: "application", fromats: ["pdf", "txt"] }
];