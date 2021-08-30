export interface Facture {

    idFacture  : number  ;
    numero : string  ;
    dateEmission   : Date   ;
    dateEcheance   : Date  ;
    taxe  :   number   ;
    isTaxe  :Boolean  ;
    timbreFiscale  : number  ;
    montantTotal  :  number ;
    commentaire: string  ;
    numBonCommande : string ;
    periode:   string;
    idClient  : number  ;
    idAssurance  :number;
    periodicite  : number  ;
    typeTaxe  :  number ;
    devise  :number   ;
    type  :number  ;
    etat  : number  ;
    commercialSaisie: string  ;
    commercialValidation : string ;
    moisFacturation  : Date  ;
    valeurRistourne  :number;
    isRistourne  :  Boolean ;
    moisImportBooking : string  ;
    remiseExceptionnelle  : Number   ;
    numPiece  :  Number ;
    isExported  : Boolean  ;
    idClientOrigine  :number   ;
    envoiAgentValidation  :Boolean   ;
    isRetourne  : Boolean  ;
    dateCreation  :Date;
    factureSms  : Boolean  ;
    isBanque  : Boolean  ;
    montantPreleve : number  ;
    idPrelevement : number  ;
    montantTotalC:number;

}