class Tabella{
    nomiColonne;
    data;

    constructor(nomiColonne, data) {
        this.nomiColonne = nomiColonne;
        this.data = data;
        this.generaTabella();
    }

    generaTabella(){
        const tabella = document.createElement('table');
        tabella.appendChild(this.generaColonne());
        tabella.appendChild(this.generaRighe());
        document.querySelector('body').appendChild(tabella);
    }
    generaColonne(){
        const tHead = document.createElement('thead');
        this.nomiColonne.forEach(nomeColonna => {
            const th = document.createElement('th');
            th.innerText = nomeColonna;
            tHead.appendChild(th);
        });
        return tHead;
    }
    generaRighe(){
        const tBody = document.createElement('tbody');
        this.data.forEach( riga => {
            const tr = document.createElement('tr');
            tBody.appendChild(tr);
            Object.keys(riga).forEach(key => {
                const td = document.createElement('td');
                td.innerText = riga[key];
                tr.appendChild(td);
            } )
        })
        return tBody;
    }


}

const nomiColonne1 = ['id', 'nome', 'cognome', 'email', 'codice fiscale', 'indirizzo'];
const data1 = [
    {
      id: 0,
      nome: 'Luca',
      cognome: 'Rossi',
      email: 'luca.rossi@mail.it',
      codiceFiscale: 'kdfsahl9087dasklh',
      indirizzo: 'via Palma 15'  
    },
    {
      id: 1,
      nome: 'Maria',
      cognome: 'Verdi',
      email: 'maria.verdi@mail.it',
      codiceFiscale: 'kdfsahl9087dasklh',
      indirizzo: 'via Palma 15'  
    },
]

const nomiColonne2 = ['id', 'prodotto', 'prezzo'];
const data2 = [
    {
      id: 0,
      prodotto: 'penna',
      prezzo: 1.50,
    },
    {
      id: 1,
      prodotto: 'biro',
      prezzo: 2.50,
    },
    
]


const tabella1 = new Tabella(nomiColonne1, data1);
const tabella2 = new Tabella(nomiColonne2, data2);