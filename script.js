/**
 * Récupère l'input avec l'id Mypass
 */
const Mypass = document.querySelector("#mypass");
/**
 * Récupère l'input avec l'id Lengthpass
 */
const Lengthpass = document.querySelector("#lengthpass");

/**
 * Récupère le boutton avec l'id button
 */
const button = document.querySelector("button");

/**
 * Génére un nombre random de caratère pour le mot de passe
 * @param {*} min 
 * @param {*} max 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

/**
 * Génére un MDP random
 * @param {Number} [length] taille du MDP
 * @return {String} Génére un MDP (password)
 */


function GeneratePassword(length) {
    /**
     * Listes des caractères utilisée pour le MDP
     * @type {String}
     */
    length = getRndInteger(8, 90);
    //console.log(length);

    const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const min = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const specialchar = "@#$*-/+.,;$€éèçà'(){}=ù§_&°µ%!:?[~%^&[]<>|]";
    const charset = maj + min + number + specialchar;
    /**
     * Generated Characters as String
     * @type {String}
     */
    let password = "";

    /**
     * boucle de génération du MDP
     */
    for (let i = 0; i < length; ++i) {

        let at = Math.floor(Math.random() * (charset.length + 1));


        password += charset.charAt(at);

        Lengthpass.value = length.toString();
    }


    return password;
}

button.addEventListener("click", () => {
    Mypass.value = GeneratePassword(length);

});