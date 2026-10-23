const nom_client = "Awa"
const nom_produit = "Ordinateur"
const prix_unitaire = 250000
const quantite = 2
const frais_livraison = 5000
const taux_tva = 18
const montant_tva = (18 * prix_unitaire * quantite)/100

console.log("")
console.log("===== REÇU DE COMMANDE =====")
console.log(`Client : "${nom_client}"`)
console.log(`Produit : "${nom_produit}*`)
console.log(`Prix unitaire : ${prix_unitaire} FCFA`)
console.log(`Quantité : ${quantite}`)

console.log("")
console.log(`Livraison : ${frais_livraison} FCFA`)
console.log(`TVA (${taux_tva} %) : ${montant_tva} FCFA`)