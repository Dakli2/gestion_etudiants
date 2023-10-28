function todolist() {
    // on recuperer la valeur stocker dans le navigateur da la clé number , et on le stocke dans variable nb
    const nb = sessionStorage.getItem('numbre');
    // stocke dans navigateur le clé jour avec la valeur obtenue l'element de la classe jours mais selon l'indice nb 
    sessionStorage.setItem('jours', String(document.getElementsByClassName("jours")[nb].value));
    // redirection vers la page todolist.html
    window.location.href = "todolist.html";
}






function enregestrer() {
    // stocke dans navigateur le clé tache avec la valeur obtenue l'element de la classe todo

    // redirection vers la page pagefinal.html

    if (String(document.getElementById("todo").value).length > 1) {
        sessionStorage.setItem('tache', String(document.getElementById("todo").value));

        window.location.href = "pagefinal.html";
    } else {
        sessionStorage.setItem('tache', "aucune tâche saisie ");
        window.location.href = "pagefinal.html";

    }



}

function menu() {
    window.location.href = "lesjours.html";
}