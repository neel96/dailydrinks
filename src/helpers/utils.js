export const shortenString = (string, maxLength) => string && string.length <= maxLength
    ?
    string
    :
    string.substring(0, maxLength - 2) + '..'

