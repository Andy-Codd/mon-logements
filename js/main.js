document.addEventListener("DOMContentLoaded", function () {
    const buttonStart = document.querySelector("#button-start");
    const buttonPrevious = document.querySelector("#pevious-page");
    const page1 = document.querySelector("#page1");
    const page2 = document.querySelector("#page2");

    const page2ButtonNext = document.querySelector("#page2 #button-start");

    // Initialisation : masquer la page 2 hors de l'écran
    page2.style.display = "none";
    page2.style.position = "absolute";
    page2.style.transform = "translateX(100%)";


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

});




// Gestion dynamique de la localisation
// Données des quartiers par ville
const quartiers = {
    "Douala": ["Akwa", "Bonapriso", "Bassa", "Makepe", "New Bell", "autre"],
    "Yaounde": ["Elig-Essono", "Melen", "Biyem-Assi", "Nkolbisson", "Simbock", "autre"],
    "Bafoussam": ["Maéture", "TchiTchap II", "Entré de la ville", "Ancien depot Guiness", "Tougang Village", "Quartier Aoussa" ,"Centre-ville", "Djeleng", "Bamendjou", "Bafou", "Bamougoum", "autre"]
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


// Gestion dynamique de la question (etes-vous en location actu)
// Sélectionner les éléments
const rdvOui = document.getElementById('rdv-oui');
const rdvNon = document.getElementById('rdv-non');
const lieuRDVSection = document.getElementById('lieu-rdv-section');
const timeRDVSection = document.getElementById('time-rdv-section');

// Fonction pour afficher ou cacher les sections Ville et Quartier
function toggleLocationFields1() {
    if (rdvOui.checked) {
        lieuRDVSection.style.display = 'block';
        timeRDVSection.style.display = 'flex';
        timeRDVSection.style.gap = '10px';
    } else {
        lieuRDVSection.style.display = 'none';
        timeRDVSection.style.display = 'none';
    }
}

// Ajouter des écouteurs d'événements pour les boutons radio
rdvOui.addEventListener('change', toggleLocationFields1);
rdvNon.addEventListener('change', toggleLocationFields1);

// Appeler la fonction une première fois pour ajuster l'affichage en fonction de l'état initial des boutons
toggleLocationFields1();





// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// Initialisation d'EmailJS
(function(){
    emailjs.init({
      publicKey: "PprlA_3Z7XjgMsqHO",
    });
})();

document.addEventListener("DOMContentLoaded", function() {
    function collectFormData() {
        // Récupération du type de logement
        let typeLogement = document.querySelector('#type-logement').value;
        let otherType = document.querySelector('#type-logement-autre').value;
        if (typeLogement === 'autre' && otherType) {
            typeLogement = otherType;
        }

        // Récupération des informations de localisation
        let ville = document.querySelector('#ville-logement').value;
        let villeAutre = document.querySelector('#ville-logement-autre').value;
        if (ville === 'autre' && villeAutre) {
            ville = villeAutre;
        }
        
        let quartier = document.querySelector('#quartier-logement').value;
        let quartierAutre = document.querySelector('#quartier-logement-autre').value;
        if ((quartier === 'autre' || ville === 'autre') && quartierAutre) {
            quartier = quartierAutre;
        }

        // Récupération des informations de prix
        let prixMin = document.querySelector('#prix-min').value;
        let prixMax = document.querySelector('#prix-max').value;

        // Récupération des informations personnelles
        let nomPrenom = document.querySelector('#nom-premon').value;
        let telephone = document.querySelector('#telephone').value;

        // Récupération des informations de location actuelle
        let locationOui = document.querySelector('#location-oui')?.checked || false;
        let villeActuelle = locationOui ? document.querySelector('#ville-actuelle').value : "Non";
        let quartierActuel = locationOui ? document.querySelector('#quartier-actuel').value : "Non";

        // Récupération des informations de rendez-vous
        let rdvOui = document.querySelector('#rdv-oui')?.checked || false;
        let lieuRdv = rdvOui ? document.querySelector('#lieu-rdv').value : "Non";
        let dateRdv = rdvOui ? document.querySelector('input[type="date"]').value : "Non";
        let heureRdv = rdvOui ? document.querySelector('input[type="time"]').value : "Non";

        // Construction du message formaté pour EmailJS
        // Format simplifié du tableau pour une meilleure lisibilité dans les emails
        let formattedMessage = 
            `📋 NOUVELLE RECHERCHE DE LOGEMENT\n\n` +
            `=============================================\n` +
            `🏠 Type de logement : ${typeLogement || "Non précisé"}\n` +
            `=============================================\n` +
            `📍 Ville souhaitée : ${ville || "Non précisé"}\n` +
            `=============================================\n` +
            `📍 Quartier souhaité : ${quartier || "Non précisé"}\n` +
            `=============================================\n` +
            `💰 Budget minimum : ${prixMin ? prixMin + " FCFA" : "Non précisé"}\n` +
            `=============================================\n` +
            `💰 Budget maximum : ${prixMax ? prixMax + " FCFA" : "Non précisé"}\n` +
            `=============================================\n\n` +
            `👤 INFORMATIONS PERSONNELLES\n` +
            `=============================================\n` +
            `Nom et prénom : ${nomPrenom || "Non précisé"}\n` +
            `=============================================\n` +
            `Téléphone : ${telephone || "Non précisé"}\n` +
            `=============================================\n\n` +
            `🏡 SITUATION ACTUELLE\n` +
            `=============================================\n` +
            `Actuellement en location : ${locationOui ? "Oui" : "Non"}\n`;
            
        if (locationOui) {
            formattedMessage += 
                `=============================================\n` +
                `Ville actuelle : ${villeActuelle || "Non précisé"}\n` +
                `=============================================\n` +
                `Quartier actuel : ${quartierActuel || "Non précisé"}\n`;
        }
            
        formattedMessage += 
            `=============================================\n\n` +
            `📅 RENDEZ-VOUS\n` +
            `=============================================\n` +
            `Souhaite un rendez-vous : ${rdvOui ? "Oui" : "Non"}\n`;
            
        if (rdvOui) {
            formattedMessage +=
                `=============================================\n` +
                `Lieu du rendez-vous : ${lieuRdv || "Non précisé"}\n` +
                `=============================================\n` +
                `Date du rendez-vous : ${dateRdv || "Non précisé"}\n` +
                `=============================================\n` +
                `Heure du rendez-vous : ${heureRdv || "Non précisé"}\n`;
        }
            
        formattedMessage += 
            `=============================================`;

        return formattedMessage;
    }

    // Fonction utilitaire pour aligner le texte dans les cellules du tableau ASCII
    function padRight(text, length) {
        if (text.length > length) {
            return text.substring(0, length);
        }
        return text + ' '.repeat(length - text.length);
    }

    function sendEmail(formattedMessage) {
        let button = document.querySelector("#button-start");
        let loadingSpinner = document.querySelector("#loading-spinner");
        let successMessage = document.querySelector("#success-message");
        let errorMessage = document.querySelector("#error-message");

        // Afficher le chargement et désactiver le bouton
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

            // Masquer le chargement et afficher le message d'erreur
            loadingSpinner.style.display = "none";
            errorMessage.style.display = "block";

            // Réactiver le bouton après 3 secondes
            setTimeout(() => {
                errorMessage.style.display = "none";
                button.style.display = "flex";
            }, 3000);
        });
    }

    // Gestion des événements pour l'affichage conditionnel
    
    // Pour le type de logement "autre"
    document.getElementById('type-logement').addEventListener('change', function() {
        var autreInput = document.getElementById('type-logement-autre');
        if (this.value === 'autre') {
            autreInput.style.display = 'block';
        } else {
            autreInput.style.display = 'none';
        }
    });
    
    // Pour le quartier "autre"
    document.getElementById('quartier-logement').addEventListener('change', function() {
        var autreInputQuartier = document.getElementById('quartier-logement-autre');
        if (this.value === 'autre') {
            autreInputQuartier.style.display = 'block';
        } else {
            autreInputQuartier.style.display = 'none';
        }
    });




    // Gestion du clic sur le bouton de soumission
    document.querySelector("#page2 #button-start").addEventListener("click", function() {
        let formattedMessage = collectFormData();
        sendEmail(formattedMessage);
    });
});