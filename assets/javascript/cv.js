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

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0]; // Récupérer le fichier sélectionné

  if (file) {
    const reader = new FileReader(); // Créer un objet FileReader pour lire le contenu du fichier

    reader.onload = (e) => {
      imagePreview.src = e.target.result; // Définir l'attribut src de l'image avec les données du fichier
    }

    reader.readAsDataURL(file); // Lire le contenu du fichier en tant que URL de données
  } else {
    imagePreview.src = '#'; // Réinitialiser l'image si aucun fichier n'est sélectionné
  }
});
      