// Importation des dépendances nécessaires
import { Link } from 'react-router-dom'; // Utilisation de Link pour la navigation entre les pages
import styled from 'styled-components'; // Pour les composants stylés avec styled-components
import PropTypes from 'prop-types'; // Pour la validation des props
import TaskStats from '../components/Tasklist/TaskStats'; // Composant pour afficher les statistiques des tâches
import TaskList from '../components/Tasklist/TaskList'; // Composant pour afficher la liste des tâches

// Composants stylés pour structurer et styliser la page

// Conteneur principal avec des marges, un fond léger et des ombres pour un effet de carte
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  font-family: 'Roboto', sans-serif; /* Application de la police Roboto */
  padding: 20px;
  max-width: 800px;
  margin: 0 auto; /* Centrage du conteneur */
  background-color: #f4f4f9; /* Fond clair pour un contraste doux */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre légère pour l'effet visuel */
`;

// Titre de la page avec une taille de police large et une couleur spécifique
const Title = styled.h1`
  font-size: 2.5rem;
  color: #26547C; /* Couleur du titre */
  text-align: center; /* Centrage du titre */
`;

// Bouton stylisé pour ajouter une tâche, avec couleur modifiée et effet au survol
const AddTaskButton = styled.button`
  padding: 10px 20px;
  background-color: #EF476F; /* Couleur d'arrière-plan du bouton */
  color: white; /* Texte du bouton en blanc */
  border: none;
  border-radius: 5px; /* Coins arrondis */
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin: 20px auto; /* Centrage et espacements */

  &:hover {
    background-color: #FFD166; /* Couleur au survol */
  }
`;

const Home = ({ tasks, setTasks }) => {
  return (
    <>
      <Container>
        {/* Titre de la page Checklist */}
        <Title>Checklist</Title>
        
        {/* Lien vers la page pour ajouter une nouvelle tâche */}
        <Link to="/add-task">
          <AddTaskButton>Add Task</AddTaskButton>
        </Link>

        {/* Composant affichant les statistiques des tâches */}
        <TaskStats tasks={tasks} />

        {/* Composant affichant la liste des tâches */}
        <TaskList tasks={tasks} setTasks={setTasks} />
      </Container>
    </>
  );
};

// Validation des props passées au composant Home
Home.propTypes = {
  tasks: PropTypes.array.isRequired, // Les tâches doivent être un tableau
  setTasks: PropTypes.func.isRequired, // setTasks doit être une fonction
};

export default Home;
