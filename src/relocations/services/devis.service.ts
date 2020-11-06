import { Client } from '@googlemaps/google-maps-services-js';
import { delay } from 'rxjs/operators';
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

class DevisService {
  public data;
  constructor(data) {
    this.data = data;
  }

  distance = async () => {
    // let depart = this.data['adresseDepart'];
    // let arrivee = this.data['adresseArrivee'];

    // const client = new Client({});
    // try {
    //   const resultat = await client.distancematrix({
    //     params: {
    //       origins: [depart],
    //       destinations: [arrivee],
    //       key: 'AIzaSyD9EuifC-NvFWYmIQc-XFOND0riMGqqFjU',
    //     },
    //   });

    //   const distance_infos = resultat.data;
    //   return distance_infos;
    // } catch (error) {}
    return 50;
  };

  coutTransport = () => {};
  coutDemenageurs = () => {};
  coutPenilite = () => {};
  supplementJourNonOuvre = () => {};
  monteMeuble = () => {};
  //------ spécial traitement -------
  coutOptions = () => {};
}
export default DevisService;

/*
key:2 'AIzaSyD9EuifC-NvFWYmIQc-XFOND0riMGqqFjUs',

  distance = () => {
    let depart = this.data['adresseDepart'];
    let arrivee = this.data['adresseArrivee'];

    const client = new Client({});
    try {
      let resultat;
      return (resultat = client
        .distancematrix({
          params: {
            origins: [depart],
            destinations: [arrivee],
            key: 'clé',
          },
        })
        .then(r => r.data));
      //const distance_infos = resultat.then(r => r.data);
      //return distance_infos;
    } catch (error) {}
  };
*/
