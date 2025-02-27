function motOuPhrase() {
    let choix = prompt("Avec quelle liste voulez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste voulez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

function boucleJeu(nbMotsPropose) {
    let score = 0
    for (let i = 0; i < nbMotsPropose.length; i++) {
        let motUtilisateur = prompt("Veuillez entrer le mot : " + nbMotsPropose[i])
        if (motUtilisateur === nbMotsPropose[i]) {
            score++
        }
    }
    return score
}

function afficherScore(score,nbMotsPropose) {
    console.log("Votre score est de " + score + "/" + nbMotsPropose);
}

function lancerJeu() {
    let choix = motOuPhrase()
    let score = 0
    let nbMotsPropose = 0
    if (choix === "mots") {
        score = boucleJeu(listeMots)
        nbMotsPropose = listeMots.length
        afficherScore(score,nbMotsPropose) 
    } else {
        score = boucleJeu(listePhrase)
        nbMotsPropose = listePhrase.length
        afficherScore(score,nbMotsPropose) 
    }
}