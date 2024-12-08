// Importation des dépendances nécessaires
import AddTaskForm from '../components/AddTaskForm/AddTaskForm'; // Composant pour ajouter ou modifier une tâche
import styled, { createGlobalStyle } from 'styled-components'; // styled-components pour les styles
import PropTypes from 'prop-types'; // Pour la validation des props

// Définir les couleurs et la police globale via styled-components
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;  // Suppression des marges par défaut
    padding: 0; // Suppression des espacements par défaut
    box-sizing: border-box; // Définit le box-sizing pour tous les éléments
  }

  body {
    font-family: 'Roboto', sans-serif; // Application de la police 'Roboto' globalement
    background-color: #f4f7fb; // Couleur de fond claire pour la page
    color: #26547C; /* Utilisation de la couleur principale pour le texte */
  }
  
  /* Définition des classes CSS pour les couleurs spécifiques */
  .color-primary {
    color: #26547C; /* Couleur primaire */
  }
  .color-secondary {
    color: #EF476F; /* Couleur secondaire */
  }
  .color-tertiary {
    color: #FFD166; /* Couleur tertiaire */
  }

  /* Définition des classes CSS pour les couleurs de fond spécifiques */
  .bg-primary {
    background-color: #26547C; /* Fond de couleur primaire */
  }
  .bg-secondary {
    background-color: #EF476F; /* Fond de couleur secondaire */
  }
  .bg-tertiary {
    background-color: #FFD166; /* Fond de couleur tertiaire */
  }
`;

// Composant PageContainer stylisé avec flexbox pour centrer son contenu
const PageContainer = styled.div`
  display: flex; /* Utilisation de flexbox pour un agencement flexible */
  justify-content: center; /* Centrage horizontal du contenu */
  align-items: center; /* Centrage vertical du contenu */
  min-height: 100vh; /* Hauteur minimale de la page pour occuper toute la fenêtre */
  padding: 20px; /* Espacement interne autour du contenu */
`;

const TaskPage = ({ tasks, setTasks }) => {
  return (
    <>
      {/* Appliquer les styles globaux définis ci-dessus */}
      <GlobalStyle /> 

      {/* Conteneur de la page, centré avec PageContainer */}
      <PageContainer>
        {/* Composant AddTaskForm pour l'ajout ou la modification d'une tâche */}
        <AddTaskForm tasks={tasks} setTasks={setTasks} />
      </PageContainer>
    </>
  );
};

// Validation des types de props pour garantir qu'elles sont du bon type
TaskPage.propTypes = {
  tasks: PropTypes.array.isRequired, // tasks doit être un tableau
  setTasks: PropTypes.func.isRequired, // setTasks doit être une fonction
};

export default TaskPage;
