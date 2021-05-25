# angular-ssw-project

Ogni Post-It è un'istanza della classe 'Post', i quali comprendono titolo, contenuto e un check(boolean) per contrassegnare il Post-It come 'importante'.
I Post-It sono raggruppati all'interno di un array (postIt).

Oltre all'app.component sono presenti due child component: new-post.component e showpost.component.
Newpost.component è responsabile della parte di inserimento del Post-It, showpost.component si occupa di mostrare il contenuto del Post-It quando cliccato, della chiusura e dell'eliminazione.

Per la visualizzazione dei Post-It contrassegnati come importanti viene utilizzata la proprietà 'importantSelector' della classe 'AppComponent', inizializzata a false per mostrare tutti i post e successivamente impostata a true se premuto il bottone 'Solo Post-It importanti'.

Per l'eliminazione dei Post-It viene utilizzato il metodo 'delete()' contenuto all'interno di showpost.component. Al suo interno viene utilizzato il metodo 'splice()' per rimuovere il Post-It selezionato all'interno dell'array 'postIt'.
All'interno del metodo splice viene utilizzato il metodo 'findIndex()' per trovare l'indice del Post-It che si vuole eliminare all'interno dell'array.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ssw-project)
