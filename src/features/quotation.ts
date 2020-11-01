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
  calculDistance = () => {
    let depart = this.data['adresseDepart'];
    let arrivee = this.data['adresseArrivee'];

    const client = new Client({});

    client.distancematrix({
      params: {
        key: 'SET API KEY',
        //origins: ['Paris'],
        //destinations: ['Lyon']
        origins: ['place_id:ChIJd2aIwalx5kcRnVseQUHAYvM'],
        destinations: ['place_id:ChIJd2aIwalx5kcRnVseQUHAYvM'],
      },
    }).then((r) => {
      console.log(r.data.rows[0].elements)
    })
    .catch((e) => {
      console.log(e.response.data.error_message);
    });

    return console.log(client);
  };
}

export default Relocation;
