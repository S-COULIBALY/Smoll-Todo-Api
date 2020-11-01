import { Client, LatLngString } from '@googlemaps/google-maps-services-js';
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
  calculDistance = () => {
    let depart = this.data['adresseDepart'];
    let arrivee = this.data['adresseArrivee'];

    let origin: LatLngString[] = ['place_id:ChIJd2aIwalx5kcRnVseQUHAYvM'];
    let destination: LatLngString[] = ['place_id:ChIJd2aIwalx5kcRnVseQUHAYvM'];

    const client = new Client({});

    client.distancematrix({
      params: {
        origins: [41.40338, 2.17403],
        destinations: destination,
      },
    });

    return console.log(client);
  };
}

export default Relocation;
