// Importation des dépendances nécessaires
import { useState } from 'react'; // Utilisation de useState pour gérer l'état local
import { useNavigate } from 'react-router-dom'; // Utilisation de useNavigate pour la navigation
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete'; // Import du composant de confirmation de suppression
import styled from 'styled-components'; // Pour le style avec styled-components
import PropTypes from 'prop-types'; // Pour la validation des props

// Composants stylés avec couleurs spécifiques et typographie Roboto

// Conteneur principal de la liste des tâches, avec des couleurs et des espacements
const TaskListContainer = styled.div`
  padding: 20px;
  background-color: #26547C; /* Couleur primaire */
  border-radius: 8px;
  color: white; /* Texte en blanc pour contraste */
  font-family: 'Roboto', sans-serif; /* Police utilisée */
`;

// Titre de la tâche avec couleur dynamique, et texte barré si la tâche est terminée
const TaskTitle = styled.span`
  font-weight: bold;
  color: ${(props) => (props.completed ? '#000000' : '#000000')}; /* Couleur dynamique */
  ${(props) =>
    props.completed &&
    `
      text-decoration: line-through; /* Texte barré pour une tâche terminée */
  `}
`;

// Description de la tâche avec une taille de texte appropriée
const TaskDescription = styled.p`
  font-size: 1rem;
  color: #000000; /* Couleur du texte */
`;

// Sélecteur pour l'état de la tâche (Vierge, En cours, Terminée) avec une bordure et une taille de police définies
const TaskStateSelect = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #FFD166; /* Couleur de la bordure */
  font-size: 1rem;
  margin-right: 10px; /* Espacement à droite */
  font-family: 'Roboto', sans-serif;
`;

// Bouton générique avec padding, bordure et comportement au survol
const Button = styled.button`
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &:hover {
    opacity: 0.8; /* Effet d'opacité au survol */
  }
`;

// Bouton de suppression avec une couleur rouge (pour indiquer l'action de suppression)
const DeleteButton = styled(Button)`
  background-color: #EF476F; /* Couleur secondaire */
  color: white; /* Texte blanc pour contraste */
`;

// Bouton d'édition avec une couleur jaune (indiquant une action moins urgente)
const EditButton = styled(Button)`
  background-color: #FFD166; /* Couleur tertiaire */
  color: #26547C; /* Couleur du texte en contraste avec le fond */
`;

// Item de la liste de tâches, avec fond blanc, bordures arrondies, et ombre légère pour créer un effet de carte
const TaskItem = styled.li`
  background-color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre subtile autour de chaque tâche */
  color: #26547C; /* Texte en couleur primaire */
`;

// Composant principal affichant la liste des tâches
const TaskList = ({ tasks, setTasks }) => {
  // État pour gérer l'index de la tâche à supprimer
  const [taskToDelete, setTaskToDelete] = useState(null);
  const navigate = useNavigate(); // Pour naviguer entre les pages

  // Fonction pour supprimer une tâche
  const deleteTask = () => {
    const updatedTasks = tasks.filter((_, i) => i !== taskToDelete); // Supprimer la tâche en filtrant l'index
    setTasks(updatedTasks); // Mettre à jour la liste des tâches
    setTaskToDelete(null); // Réinitialiser l'état de la tâche à supprimer
  };

  // Fonction pour annuler la suppression d'une tâche
  const cancelDelete = () => {
    setTaskToDelete(null); // Réinitialiser l'état de la tâche à supprimer
  };

  // Fonction pour gérer l'édition d'une tâche
  const handleEdit = (index) => {
    navigate('/add-task', { state: { task: tasks[index], index } }); // Redirige vers le formulaire d'édition
  };

  return (
    <TaskListContainer>
      <h2>Task List</h2>
      <ul>
        {/* Boucle à travers les tâches et génération des éléments de la liste */}
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <div>
              {/* Affichage du titre de la tâche avec un texte barré si la tâche est terminée */}
              <TaskTitle completed={task.state === 'Terminée'}>
                {task.text}
              </TaskTitle>
              {/* Affichage de la description de la tâche */}
              <TaskDescription>{task.description}</TaskDescription>
              {/* Sélecteur pour modifier l'état de la tâche */}
              <TaskStateSelect
                value={task.state}
                onChange={(e) => {
                  const updatedTasks = tasks.map((t, i) =>
                    i === index ? { ...t, state: e.target.value } : t // Mise à jour de l'état de la tâche
                  );
                  setTasks(updatedTasks); // Mettre à jour la liste des tâches
                }}
              >
                <option value="Vierge">Vierge</option>
                <option value="En cours">En cours</option>
                <option value="Terminée">Terminée</option>
              </TaskStateSelect>
              {/* Bouton de suppression */}
              <DeleteButton onClick={() => setTaskToDelete(index)}>Delete</DeleteButton>
              {/* Bouton d'édition */}
              <EditButton onClick={() => handleEdit(index)}>Edit</EditButton>
            </div>
          </TaskItem>
        ))}
      </ul>
      {/* Affichage du modal de confirmation si une tâche doit être supprimée */}
      {taskToDelete !== null && (
        <ConfirmDelete onConfirm={deleteTask} onCancel={cancelDelete} />
      )}
    </TaskListContainer>
  );
};

// Validation des props avec PropTypes pour s'assurer que les bonnes données sont passées au composant
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired, // Les tâches doivent être un tableau
  setTasks: PropTypes.func.isRequired, // setTasks doit être une fonction
};

// Exportation du composant TaskList
export default TaskList;
