/**
 * Función para validar si existe el jwt y es válido
 * @param token
 * @return
 */

function isAuth(token) {
    if (token === '' || token === undefined || token === null) {
        return false;
    } else {
        return true;
    }
}

module.exports = { isAuth };