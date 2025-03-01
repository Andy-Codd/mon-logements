document.addEventListener("DOMContentLoaded", function () {
    const buttonStart = document.querySelector("#button-start");
    const buttonPrevious = document.querySelector("#pevious-page");
    const page1 = document.querySelector("#page1");
    const page2 = document.querySelector("#page2");
    const page3 = document.querySelector("#page3");
    const page4 = document.querySelector("#page4");
    const page5 = document.querySelector("#page5");

    const page2ButtonNext = document.querySelector("#page2 #button-start");
    const page3ButtonPrevious = document.querySelector("#page3 #pevious-page");

    const page3ButtonNext = document.querySelector("#page3 #button-start");
    const page4ButtonPrevious = document.querySelector("#page4 #pevious-page");

    const page4ButtonNext = document.querySelector("#page4 #button-start");
    const page5ButtonPrevious = document.querySelector("#page5 #pevious-page");

    // Initialisation : masquer la page 2 hors de l'écran
    page2.style.display = "none";
    page2.style.position = "absolute";
    page2.style.transform = "translateX(100%)";

    page3.style.display = "none";
    page3.style.position = "absolute";
    page3.style.transform = "translateX(100%)";

    page4.style.display = "none";
    page4.style.position = "absolute";
    page4.style.transform = "translateX(100%)";

    page5.style.display = "none";
    page5.style.position = "absolute";
    page5.style.transform = "translateX(100%)";

    buttonStart.addEventListener("click", function () {
        // Glisse la page 1 vers la gauche
        page1.style.transform = "translateX(-100%)";
        page1.style.opacity = "0";

        setTimeout(() => {
            page1.style.display = "none";
            page2.style.display = "flex";
            setTimeout(() => {
                page2.style.transform = "translateX(0)";
                page2.style.opacity = "1";
            }, 50);
        }, 400); 
    });

    buttonPrevious.addEventListener("click", function () {
        // Glisse la page 2 vers la droite
        page2.style.transform = "translateX(100%)";
        page2.style.opacity = "0";

        setTimeout(() => {
            page2.style.display = "none";
            page1.style.display = "flex";
            setTimeout(() => {
                page1.style.transform = "translateX(0)";
                page1.style.opacity = "1";
            }, 50);
        }, 400);
    });


    page2ButtonNext.addEventListener("click", function () {
        // Glisse la page 2 vers la gauche
        page2.style.transform = "translateX(-100%)";
        page2.style.opacity = "0";

        setTimeout(() => {
            page2.style.display = "none";
            page3.style.display = "flex";
            setTimeout(() => {
                page3.style.transform = "translateX(0)";
                page3.style.opacity = "1";
            }, 50);
        }, 400);
    });

    page3ButtonPrevious.addEventListener("click", function () {
        // Glisse la page 3 vers la droite
        page3.style.transform = "translateX(100%)";
        page3.style.opacity = "0";

        setTimeout(() => {
            page3.style.display = "none";
            page2.style.display = "flex";
            setTimeout(() => {
                page2.style.transform = "translateX(0)";
                page2.style.opacity = "1";
            }, 50);
        }, 400);
    });

    page3ButtonNext.addEventListener("click", function () {
        // Glisse la page 3 vers la gauche
        page3.style.transform = "translateX(-100%)";
        page3.style.opacity = "0";

        setTimeout(() => {
            page3.style.display = "none";
            page4.style.display = "flex";
            setTimeout(() => {
                page4.style.transform = "translateX(0)";
                page4.style.opacity = "1";
            }, 50);
        }, 400);
    });

    page4ButtonPrevious.addEventListener("click", function () {
        // Glisse la page 4 vers la droite
        page4.style.transform = "translateX(100%)";
        page4.style.opacity = "0";

        setTimeout(() => {
            page4.style.display = "none";
            page3.style.display = "flex";
            setTimeout(() => {
                page3.style.transform = "translateX(0)";
                page3.style.opacity = "1";
            }, 50);
        }, 400);
    });

    page4ButtonNext.addEventListener("click", function () {
        // Glisse la page 4 vers la gauche
        page4.style.transform = "translateX(-100%)";
        page4.style.opacity = "0";

        setTimeout(() => {
            page4.style.display = "none";
            page5.style.display = "flex";
            setTimeout(() => {
                page5.style.transform = "translateX(0)";
                page5.style.opacity = "1";
            }, 50);
        }, 400);
    });

    page5ButtonPrevious.addEventListener("click", function () {
        // Glisse la page 5 vers la droite
        page5.style.transform = "translateX(100%)";
        page5.style.opacity = "0";

        setTimeout(() => {
            page5.style.display = "none";
            page4.style.display = "flex";
            setTimeout(() => {
                page4.style.transform = "translateX(0)";
                page4.style.opacity = "1";
            }, 50);
        }, 400);
    });

});




// Gestion dynamique de la localisation
// Données des quartiers par ville
const quartiers = {
    "Douala": ["Akwa", "Bonapriso", "Bassa", "Makepe", "New Bell"],
    "Yaoundé": ["Elig-Essono", "Melen", "Biyem-Assi", "Nkolbisson", "Simbock"],
    "Bafoussam": ["Maéture", "TchiTchap II", "Entré de la ville", "Ancien depot Guiness", "Tougang Village", "Quartier Aoussa" ,"Centre-ville", "Djeleng", "Bamendjou", "Bafou", "Bamougoum"]
};

// Fonction pour mettre à jour la liste des quartiers
function updateQuartiers() {
    const villeSelect = document.getElementById("ville-logement");
    const quartierSelect = document.getElementById("quartier-logement");
    const selectedVille = villeSelect.value;

    // Réinitialiser le champ quartier
    quartierSelect.innerHTML = '<option value="">Sélectionnez un quartier</option>';

    if (selectedVille && quartiers[selectedVille]) {
        quartiers[selectedVille].forEach(quartier => {
            const option = document.createElement("option");
            option.value = quartier;
            option.textContent = quartier;
            quartierSelect.appendChild(option);
        });
    }
}

// Ajouter un écouteur d'événement sur le changement de ville
document.getElementById("ville-logement").addEventListener("change", updateQuartiers);

// Initialiser la liste des quartiers au chargement de la page
updateQuartiers();





// Gestion dynamique de la question (etes-vous en location actu)
// Sélectionner les éléments
const locationOui = document.getElementById('location-oui');
const locationNon = document.getElementById('location-non');
const villeActuelleSection = document.getElementById('ville-actuelle-section');
const quartierActuelSection = document.getElementById('quartier-actuel-section');

// Fonction pour afficher ou cacher les sections Ville et Quartier
function toggleLocationFields() {
    if (locationOui.checked) {
        villeActuelleSection.style.display = 'block';
        quartierActuelSection.style.display = 'block';
    } else {
        villeActuelleSection.style.display = 'none';
        quartierActuelSection.style.display = 'none';
    }
}

// Ajouter des écouteurs d'événements pour les boutons radio
locationOui.addEventListener('change', toggleLocationFields);
locationNon.addEventListener('change', toggleLocationFields);

// Appeler la fonction une première fois pour ajuster l'affichage en fonction de l'état initial des boutons
toggleLocationFields();










// Recuperation des donneee
// Initialisez EmailJS
(function(){
    emailjs.init({
      publicKey: "PprlA_3Z7XjgMsqHO",
    });
 })();


 document.addEventListener("DOMContentLoaded", function() {
    function collectFormData() {
        let typesLogements = [];
        document.querySelectorAll('input[name="type-logement"]:checked').forEach(function(checkbox) {
            typesLogements.push(checkbox.value);
        });

        let otherType = document.querySelector('#type-logement-autre').value;
        if (otherType) {
            typesLogements.push(otherType);
        }

        let ville = document.querySelector('#ville-logement').value;
        let quartier = document.querySelector('#quartier-logement').value;
        let otherQuartier = document.querySelector('#quartier-logement-autre').value;
        if (otherQuartier) {
            quartier = otherQuartier;
        }

        let prixMin = document.querySelector('#prix-min').value;
        let prixMax = document.querySelector('#prix-max').value;

        let nomPrenom = document.querySelector('#nom-premon').value;
        let telephone = document.querySelector('#telephone').value;

        let locationOui = document.querySelector('#location-oui').checked;
        let villeActuelle = locationOui ? document.querySelector('#ville-actuelle').value : "Non renseigné";
        let quartierActuel = locationOui ? document.querySelector('#quartier-actuel').value : "Non renseigné";

        // 🔹 Construction du message formaté
        let formattedMessage = 
            `📋 ---------Nouvelle recherche de logement---------\n\n` +
            `🏠 Types de logement recherchés: ${typesLogements.join(', ') || "Non précisé"}\n` +
            `📍 Localisation souhaitée: Ville: ${ville || "Non précisé"}, Quartier: ${quartier || "Non précisé"}\n` +
            `💰 Budget: Min: ${prixMin || "Non précisé"} FCFA - Max: ${prixMax || "Non précisé"} FCFA\n\n` +
            `👤 Informations personnelles:\n` +
            `   - Nom: ${nomPrenom || "Non précisé"}\n` +
            `   - Téléphone: ${telephone || "Non précisé"}\n\n` +
            `🏡 Actuellement en location: ${locationOui ? "Oui" : "Non"}\n` +
            (locationOui ? `   - Ville actuelle: ${villeActuelle}\n   - Quartier actuel: ${quartierActuel}\n` : '');

        return formattedMessage;
    }

    function sendEmail(formattedMessage) {
        let button = document.querySelector("#page5 #button-start");
        let loadingSpinner = document.querySelector("#loading-spinner");
        let successMessage = document.querySelector("#success-message");
        let errorMessage = document.querySelector("#error-message");

        // 🔹 Afficher le chargement et désactiver le bouton
        button.style.display = "none";
        loadingSpinner.style.display = "flex";

        emailjs.send("service_hl3seqg", "template_odsaw8l", {
            message: formattedMessage
        }).then(function(response) {
            console.log('✅ Email envoyé avec succès:', response);

            loadingSpinner.style.display = "none";
            successMessage.style.display = "block";

            window.location.href = "sucess.html";

            // Réactiver le bouton après 3 secondes
            setTimeout(() => {
                successMessage.style.display = "none";
                button.style.display = "flex";
            }, 3000);

        }, function(error) {
            console.log('❌ Erreur lors de l\'envoi de l\'email:', error);

            // 🔹 Masquer le chargement et afficher le message d'erreur
            loadingSpinner.style.display = "none";
            errorMessage.style.display = "block";

            // Réactiver le bouton après 3 secondes
            setTimeout(() => {
                errorMessage.style.display = "none";
                button.style.display = "flex";
            }, 3000);
        });
    }

    document.querySelector("#page5 #button-start").addEventListener("click", function() {
        let formattedMessage = collectFormData();
        sendEmail(formattedMessage);
    });
});


