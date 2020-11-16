const fetch = require('node-fetch');
import axios from 'axios';
import { Client } from '@googlemaps/google-maps-services-js';

class DevisService {
  public data;
  constructor(data) {
    this.data = data;
  }
  // Calcul de la distance avec l'API Google Matrix
  distanceGoogle = async () => {
    let depart = this.data['adresseDepart'];
    let arrivee = this.data['adresseArrivee'];

    const client = new Client({});
    try {
      const resultat = await client.distancematrix({
        params: {
          origins: [depart],
          destinations: [arrivee],
          key: '...........,',
        },
      });

      const distance_infos = resultat.data;
      return distance_infos;
    } catch (error) {}
    return 50;
  };

  datas = function(donnee) {
    return donnee.json();
  };

  // Calcul des éléments constitutifs du parcours (la distance, temps du trajet, péage et la consommation(carburant)
  // avec l'API ViaMichelin
  coutTransport = async () => {
    let url1 =
      'https://secure-apir.viamichelin.com/apir/1/route.json2/fra?steps=1:e:2.0:48.0;1:e:3.0:49.0&authkey=........';
    //let peage = await axios.get('https://secure-apir.viamichelin.com/apir/1/route.json2/fra?steps=1:e:2.0:48.0;1:e:3.0:49.0&authkey=............');

    let peages = await fetch(url1);
    let data = await peages.json();

    const distance = data.iti.header.summaries[0].totalDist;
    const temps_conduite = data.iti.header.summaries[0].drivingTime;
    const consomation = data.iti.header.summaries[0].consumption;
    const peage = data.iti.header.summaries[0].tollCost.car;
    const parcours = {
      distance: distance,
      temps_conduite: temps_conduite,
      consomation: consomation,
      peage: peage,
    };
    return parcours;
  };

  demenageurConducteur = () => {};
  coutDemenageurs = () => {};
  coutPenilite = () => {};
  supplementJourNonOuvre = () => {};
  monteMeuble = () => {};
  //------ spécial traitement -------
  coutOptions = () => {};
}
export default DevisService;
