
totalpoints=0;
ligne=0;
persons= [
    {
        nom: 'nom1',
        prenom: 'prenom1',
        points: 12
    },
    {
        nom:'nom2',
        prenom:'prenom2',
        points:15
    },
    {
        nom:'nom3',
        prenom: 'prenom3',
        points: 19
    }
    
]

init();

function init(){
    for (let i of persons){
        doinsert(i.nom,i.prenom,i.points);
    }
}

function doinsert(nom,prenom,points){
    totalpoints+=points;
    ligne+=1;
    doinsertrowtable(ligne,nom,prenom,points);
    
    update_summary();
    
}


function doinsertrowtable(num,nom,prenom,note){
   
    table = document.getElementsByTagName('table')[0]
    row= document.createElement('tr');
    
    col1= document.createElement('td') 
    col1.innerHTML=num;
    col2= document.createElement('td')
    col2.innerHTML=nom;
    col3= document.createElement('td')
    col3.innerHTML=prenom;
    col4= document.createElement('td')
    col4.innerHTML=note;
    col5= document.createElement('td')
    col5.innerHTML= '<input type="checkbox">';

    

    col1.setAttribute('class','colnumber');
    col4.setAttribute('class','colnumber');
    col5.setAttribute('class','checkbox_cl');

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    table.appendChild(row);
}

function ConsoleTableau(){
    console.table(persons);
}

function update_summary(){
    element_lignes= document.getElementById('p1')
    element_points= document.getElementById('p3');
    element_lignes.innerText=ligne+' ligne(s)';
    element_points.innerText='Total point(s)= '+totalpoints;
}

function doNewData(){
    const elt_nom= document.getElementById('forme_name')
    const elt_prenom= document.getElementById('forme_prenom')
    const elt_points= document.getElementById('form_point')
    nom= elt_nom.value;
    prenom= elt_prenom.value;
    points= parseInt(elt_points.value);
    
    if (elt_nom=='' || elt_prenom=='' || Number.isNaN(points)){
        alert('Veuillez remplir tous les champs');
    }
    else{
    
    doinsert(nom,prenom,points);
    persons.push({nom,prenom,points});

    elt_nom.value='';
    elt_prenom.value='';
    elt_points.value='';
        }

    


    }

    function deleteRow() {
        if(ligne<=0){
        alert("Tablesu deja vide");}
        else{
        table =document.getElementsByTagName("table")[0];
        chkbox_list=table.querySelectorAll(".checkbox_cl input")
        isOneChecked= false;
        for(let i=0; i<chkbox_list.length; i++){
            if(chkbox_list[i].checked)
            isOneChecked = true;
        }
        if(!isOneChecked)
        alert("Sélectionnez au moins une ligne!");
        else{
            if (confirm("Voulez-vous vraiment supprinez les lignes?" )){
            element_found = false;
            table= document.getElementsByTagName("table")[0];
            rows= table.getElementsByClassName("row");
            let i=0;
            while(i<rows.length){
            if (rows[i].lastChild.firstChild.checked) {
            total_points=total_points-parseInt(rows[i].childNodes[3].innerText);
            rows[i].remove();
            persons.splice(i,1);
            element_found =true;
            i--;
            ligne--;
            }
            i++;
            }
            alert("Ligne supprimée avec succès");
            update_summary();
            }
        }
    }
}
