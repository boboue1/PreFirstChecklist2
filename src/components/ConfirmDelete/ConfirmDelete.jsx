// Importation des dépendances nécessaires
import styled from 'styled-components'; // Pour le style avec styled-components
import PropTypes from 'prop-types'; // Pour la validation des props

// Composants stylés (création des éléments UI avec styled-components)

// Conteneur principal du modal, couvrant toute la fenêtre avec un fond semi-transparent
const ModalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-family: 'Roboto', sans-serif; /* Applique la police Roboto à l'ensemble du modal */

  display: flex;
  flex-direction: column; /* Affichage en colonne pour empiler les éléments */
  align-items: center; /* Centrer les éléments horizontalement */
  justify-content: center; /* Centrer les éléments verticalement */
  background-color: rgba(0, 0, 0, 0.5); /* Fond sombre avec opacité */
  position: fixed; /* Position fixe pour occuper toute la fenêtre */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000; /* S'assurer que le modal est au-dessus des autres éléments */
`;

// Contenu du modal avec un fond coloré, bordures arrondies, et ombre
const ModalContent = styled.div`
  background-color: #FFD166; /* Fond jaune du modal */
  padding: 20px;
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre subtile autour du contenu */
  text-align: center; /* Centrer le texte */
  max-width: 400px; /* Largeur maximale du contenu */
  margin: auto; /* Centrer le contenu horizontalement */
`;

// Texte dans le modal, avec une marge en bas pour espacer les boutons
const ModalText = styled.p`
  font-size: 1rem;
  color: #0e0e0e; /* Couleur du texte */
  margin-bottom: 20px; /* Espacement sous le texte */
`;

// Boutons stylés avec différentes couleurs et comportements au survol
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none; /* Pas de bordure */
  border-radius: 5px; /* Bordures arrondies */
  margin: 5px; /* Espacement entre les boutons */
  cursor: pointer; /* Curseur de la souris en forme de main */
  font-family: 'Roboto', sans-serif; /* Appliquer la police Roboto */

  &:focus {
    outline: none; /* Retirer le contour de focus */
  }

  /* Styles pour le bouton de confirmation (Yes) */
  &.confirm-btn {
    background-color: #26547C; /* Couleur bleue du bouton */
    color: white; /* Texte en blanc */

    &:hover {
      background-color: #1e4565; /* Couleur plus foncée au survol */
    }
  }

  /* Styles pour le bouton d'annulation (No) */
  &.cancel-btn {
    background-color: #EF476F; /* Couleur rouge du bouton */
    color: white; /* Texte en blanc */

    &:hover {
      background-color: #d63c5d; /* Couleur plus foncée au survol */
    }
  }
`;

// Composant principal du modal de confirmation de suppression
const ConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    // Modal contenant le texte et les boutons
    <ModalContainer>
      <ModalContent>
        {/* Message de confirmation */}
        <ModalText>Are you sure you want to delete this task?</ModalText>
        {/* Boutons de confirmation et d'annulation */}
        <Button onClick={onConfirm} className="confirm-btn">Yes</Button>
        <Button onClick={onCancel} className="cancel-btn">No</Button>
      </ModalContent>
    </ModalContainer>
  );
};

// Validation des props à l'aide de PropTypes
ConfirmDelete.propTypes = {
  onConfirm: PropTypes.func.isRequired, // onConfirm doit être une fonction, et est requis
  onCancel: PropTypes.func.isRequired,  // onCancel doit être une fonction, et est requis
};

// Exportation du composant ConfirmDelete
export default ConfirmDelete;
