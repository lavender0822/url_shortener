const BASE_62_CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

module.exports = (shortenURL_Length) => {
    let result = ''

    for (let i = 0; i < shortenURL_Length; i++) {
        const randomIndex = Math.floor(Math.random() * BASE_62_CHAR.length)

        const chooseChar = BASE_62_CHAR[randomIndex]

        result += chooseChar
    }

    return result
}