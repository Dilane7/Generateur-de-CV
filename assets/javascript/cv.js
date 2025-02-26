//    fonction java scrispt pour l'accordion

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
       
    // SVG for Down icon
    const downSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-10 h-10">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg> `;
    
    // SVG for Up icon
    const upSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-10 h-10">
      <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
    </svg>`;
       
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.innerHTML = upSVG;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = downSVG;
    }
}

const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const image_cv = document.getElementById('image_cv');
const inn = document.getElementById('imageInput');


imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0]; // Récupérer le fichier sélectionné

  if (file) {
    const reader = new FileReader(); // Créer un objet FileReader pour lire le contenu du fichier

    reader.onload = (e) => {
      imagePreview.src = e.target.result; // Définir l'attribut src de l'image avec les données du fichier
      image_cv.src = e.target.result; 
    }

    reader.readAsDataURL(file); // Lire le contenu du fichier en tant que URL de données
  } else {
    imagePreview.src = '#'; // Réinitialiser l'image si aucun fichier n'est sélectionné
  }
});
inn.addEventListener('change', function(){
  // const srcim = 
});


// const competencesContainer = document.getElementById('competences-container');
// const addCompetenceButton = document.getElementById('add-competence');

// addCompetenceButton.addEventListener('click', () => {
//   const newForm = document.createElement('div');
//   newForm.classList.add('competence-form', 'border', 'p-4', 'rounded', 'mt-4'); // Ajoute une marge en haut

//   newForm.innerHTML = `
//     <input type="text" name="competence" placeholder="Compétence" class="border rounded p-2">
//     <select name="niveau" class="border rounded p-2">
//       <option value="debutant">Débutant</option>
//       <option value="intermediaire">Intermédiaire</option>
//       <option value="expert">Expert</option>
//     </select>
//     <button class="remove-competence bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
//       Supprimer
//     </button>
//   `;

//   competencesContainer.appendChild(newForm);

//   // Ajouter un gestionnaire d'événements pour le bouton "Supprimer"
//   const removeButton = newForm.querySelector('.remove-competence');
//   removeButton.addEventListener('click', () => {
//     competencesContainer.removeChild(newForm);
//   });
// });

const nom = document.getElementById('nom');
const text_nom = document.getElementById('text_nom');
const nom2 = document.getElementById('nom2');
const titre = document.getElementById('titre');
const titre_text = document.getElementById('titre_text');
const description_profil = document.getElementById('description_profil');
const content_profil_description = document.getElementById('content_profil_description');

const email = document.getElementById('email');
const content_email = document.getElementById('content_email');
const num = document.getElementById('num');
const content_num = document.getElementById('content_num');
const ville = document.getElementById('ville');
const content_ville = document.getElementById('content_ville');
const naiss = document.getElementById('naiss');
const content_naiss = document.getElementById('content_naiss');
const sexe = document.getElementById('sexe');
const content_sexe = document.getElementById('content_sexe');
const national = document.getElementById('national');
const content_national = document.getElementById('content_national');
const statut = document.getElementById('statut');
const content_statut = document.getElementById('content_statut');





const formation_name = document.getElementById('formation');
const content_formation_name = document.getElementById('content_formation_name');
const debut_formation = document.getElementById('debut_formation');
const content_debut_formation = document.getElementById('content_debut_formation');
const fin_formation = document.getElementById('fin_formation');
const content_fin_formation = document.getElementById('content_fin_formation');
const etablisement = document.getElementById('etablisement');
const content_etablisement = document.getElementById('content_etablisement');
const ville_formation  = document.getElementById('ville_formation ');
const content_ville_formation = document.getElementById('content_ville_formation');
const for_description = document.getElementById('for_description');
const content_for_description = document.getElementById('content_for_description');

const exp_name = document.getElementById('exp_name');
const content_exp_name = document.getElementById('content_exp_name');
const debut_exp = document.getElementById('debut_exp');
const content_debut_exp = document.getElementById('content_debut_exp');
const fin_exp = document.getElementById('fin_exp');
const content_fin_exp = document.getElementById('content_fin_exp');
const employeur = document.getElementById('employeur');
const content_employeur = document.getElementById('content_employeur');
const ville_exp  = document.getElementById('ville_exp');
const content_ville_exp = document.getElementById('content_ville_exp');
const exp_description = document.getElementById('exp_description');
const content_exp_description = document.getElementById('content_exp_description');

const ref_name = document.getElementById('ref_name');
const content_ref_name = document.getElementById('content_ref_name');
const ref_emp = document.getElementById('ref_emp');
const content_ref_emp = document.getElementById('content_ref_emp');
const ref_ville = document.getElementById('ref_ville');
const content_ref_ville = document.getElementById('content_ref_ville');
const num_ref = document.getElementById('num_ref');
const content_num_ref = document.getElementById('content_num_ref');
const email_ref = document.getElementById('email_ref');
const content_email_ref = document.getElementById('content_email_ref');


num.addEventListener('input', function(){
  const valeur_num = num.value;
  content_num.textContent = valeur_num;
});

email.addEventListener('input', function(){
  const valeur_email = email.value;
  content_email.textContent = valeur_email;
});

ville.addEventListener('input', function(){
  const valeur_ville = ville.value;
  content_ville.textContent = valeur_ville;
});

naiss.addEventListener('input', function(){
  const valeur_naiss = naiss.value;
  content_naiss.textContent = valeur_naiss;
});

sexe.addEventListener('input', function(){
  const valeur_sexe = sexe.value;
  content_sexe.textContent = valeur_sexe;
});

national.addEventListener('input', function(){
  const valeur_national = national.value;
  content_national.textContent = valeur_national;
});

statut.addEventListener('input', function(){
  const valeur_statut = statut.value;
  content_statut.textContent = valeur_statut;
});


nom.addEventListener('blur', function(){
  if(nom.value === ""){
    nom.style.border = "red";
    alert('veuilez remplir votre')
  }
});

nom.addEventListener('input', function(){
  const valeur_nom = nom.value;
  nom2.textContent=valeur_nom; 
  text_nom.textContent = valeur_nom;
});


titre.addEventListener('input', function(){
  const valeur_titre = titre.value;
  titre_text.textContent = valeur_titre;
})

description_profil.addEventListener('input', function(){
  const valeur_description_profil = description_profil.value;
  content_profil_description.textContent = valeur_description_profil;
})

image.addEventListener('change' , function(){
  const src_preview = image.src;
  const src_image_cv = image.src;
  src_image_cv = src_preview;
});

formation_name.addEventListener('input', function(){
  const valeur_formation_name = formation_name.value;
  content_formation_name.textContent = valeur_formation_name;
});

debut_formation.addEventListener('input', function(){
  const valeur_debut_formation = debut_formation.value;
  content_debut_formation.textContent = `du ${valeur_debut_formation} `;
});

fin_formation.addEventListener('input', function(){
  const valeur_fin_formation = fin_formation.value;
  content_fin_formation.textContent = ` au ${valeur_fin_formation}`;
});

etablisement.addEventListener('input', function(){
  const valeur_etablisement = etablisement.value;
  content_etablisement.textContent = `${valeur_etablisement}, `;
});

ville_formation.addEventListener('input', function(){
  const valeur_ville_formation = ville_formation.value;
  content_ville_formation.textContent = `${valeur_ville_formation}`;
});

for_description.addEventListener('input', function(){
  const valeur_for_description = for_description.value;
  content_for_description.textContent = `${valeur_for_description}`;
}); 

// experience
exp_name.addEventListener('input', function(){
  const valeur_exp_name = exp_name.value;
  content_exp_name.textContent = valeur_exp_name;
});

debut_exp.addEventListener('input', function(){
  const valeur_debut_exp = debut_exp.value;
  content_debut_exp.textContent = `du ${valeur_debut_exp} `;
});

fin_exp.addEventListener('input', function(){
  const valeur_fin_exp = fin_exp.value;
  content_fin_exp.textContent = ` au ${valeur_fin_exp}`;
});

employeur.addEventListener('input', function(){
  const valeur_employeur = employeur.value;
  content_employeur.textContent = `${valeur_employeur}, `;
});

ville_exp.addEventListener('input', function(){
  const valeur_ville_exp = ville_exp.value;
  content_ville_exp.textContent = `${valeur_ville_exp}`;
});

exp_description.addEventListener('input', function(){
  const valeur_exp_description = exp_description.value;
  content_exp_description.textContent = `${valeur_exp_description}`;
}); 

// reference

ref_name.addEventListener('input', function(){
  const valeur_ref_name = ref_name.value;
  content_ref_name.textContent = valeur_ref_name;
});

ref_emp.addEventListener('input', function(){
  const valeur_ref_emp = ref_emp.value;
  content_ref_emp.textContent = `${valeur_ref_emp}, `;
});

ref_ville.addEventListener('input', function(){
  const valeur_ref_ville = ref_ville.value;
  content_ref_ville.textContent = `${valeur_ref_ville}`;
});

num_ref.addEventListener('input', function(){
  const valeur_num_ref = num_ref.value;
  content_num_ref.textContent = `${valeur_num_ref}, `;
});

email_ref.addEventListener('input', function(){
  const valeur_email_ref = email_ref.value;
  content_email_ref.textContent = `${valeur_email_ref}`;
});

function verifier(){
  if(nom.value ===""){
    alert("le champs nom est vide")
    nom.style.border = "red";
  }
  
}