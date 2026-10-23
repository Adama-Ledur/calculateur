const nom_client = "Awa"
const nom_produit = "Ordinateur"
const prix_unitaire = 250000
const quantite = 2
const frais_livraison = 5000
const taux_tva = 18

const montant_total_produits = prix_unitaire * quantite
const montant_tva = (18 * montant_total_produits)/100
const montant_ttc = montant_total_produits + montant_tva
const total_payer = montant_ttc + frais_livraison
const montant_remise = 10000

const prix_moyen_ttc = montant_ttc/quantite

console.log("")
console.log("===== REÇU DE COMMANDE =====")
console.log(`Client : ${nom_client}`)
console.log(`Produit : ${nom_produit}`)
console.log(`Prix unitaire : ${prix_unitaire} FCFA`)
console.log(`Quantité : ${quantite}`)

console.log("")
console.log(`Montant des produits : ${montant_total_produits} FCFA`)
console.log(`TVA (${taux_tva} %) : ${montant_tva} FCFA`)
console.log(`Montant TTC : ${montant_ttc} FCFA`)
console.log(`Livraison : ${frais_livraison} FCFA`)
console.log(`TOTAL A PAYER : ${total_payer} FCFA`)

console.log("")
console.log("BON DE REDUCTION : LEDUR")
console.log(`MONTANT DE LA REMISE : ${montant_remise} FCFA`)
console.log(`NET A PAYER : ${total_payer - montant_remise} FCFA`)

console.log("")
console.log(`Prix moyen TTC par produit : ${prix_moyen_ttc} FCFA`)
console.log(`Type du Nom : ${typeof nom_client}`)
console.log(`Type du prix : ${typeof prix_unitaire}`)
console.log(`Type de la quantité : ${typeof quantite}`)