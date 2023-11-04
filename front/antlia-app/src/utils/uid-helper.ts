export const getCode = (uuid: string | undefined) => {
    return uuid ? "#" + uuid.split("-")[0] : "";
} 