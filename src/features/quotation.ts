import { Client, LatLng, LatLngString } from '@googlemaps/google-maps-services-js';
// Ici on implémente les fonctionnalitées de traitement des données
// je commence l'implementation demain (classe ou fonction ?????????)

/*  CALCUL DU COÛT - PARTIE 1
- traitement des jours feriés
- calcul de la distance entre l'addresse de DÉPART et d'ARRIVÉE
- calcul du coût du trajet
- traitement de la pénibilité (avec => 0€ 
  ou sans ascenceur => Prise en compte du nommbre d'étage à monter)
- traitement du volume
- traitement de la distance de portage
*/

class Relocation {
  public data;
  constructor(data) {
    this.data = data;
  }
  public async calculDistance() {
    let depart = this.data['adresseDepart'];
    let arrivee = this.data['adresseArrivee'];
    const client = new Client({});

    /*
    async () => {
      try {
        const resultat_1 = client.distancematrix({
          params: {
            origins: [depart],
            destinations: [arrivee],
            key: 'AIzaSyDZCkywa7zTJxqPj3dhtvIIMnpNALVCmmo',
          },
        });
        const resultat_2 = await resultat_1 => resultat_1.data.rows[0].elements;
        console.log(resultat_2);
      } catch (error) {
        console.log(error.response.data.error_message);
      }
    };
*/

    client
      .distancematrix({
        params: {
          origins: [depart],
          destinations: [arrivee],
          key: 'AIzaSyDZCkywa7zTJxqPj3dhtvIIMnpNALVCmmo',
        },
      })

      .then(r => {
        return r.data.rows[0].elements;
      })
      .catch(e => {
        console.log(e.response.data.error_message);
      });
  }
}

export default Relocation;
// key: 'AIzaSyDZCkywa7zTJxqPj3dhtvIIMnpNALVCmmo', => {resultat_1.data.rows[0].elements };
