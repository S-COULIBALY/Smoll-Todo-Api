export interface Relocation {
  civilite: ['Madame', 'Monsieur', 'Entreprise'];
  nom: string;
  prenom: string;
  telephone: string;
  Email: string;
  //------------------
  date: string;
  adresseDepart: string;
  nbreEtageDepart: number;
  ascenseurDepart: boolean;
  adresseArrivee: string;
  nbreEtageArrivee: number;
  ascenseurArrivee: boolean;
  volume: number;
  distanceDePortage: number;
  //------------------
  prestationComplementaire: [
    "FOURNITURES D'EMBALLAGE",
    'EMBALLAGE / DÉBALLAGE OBJETS FRAGILES',
    'EMBALLAGE / DÉBALLAGE OBJETS NON FRAGILES',
    'DÉMONTAGE / REMONTAGE MOBILIER',
    'ASSURANCE DÉMÉNAGEMENT',
    'OBJETS PARTICULIERS OU LOURDS',
    'MONTE MEUBLE',
  ];
}
