import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Composants stylés pour le formulaire
const FormContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  font-family: 'Roboto', sans-serif; /* Application de la police Roboto */

  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #FFD166; /* Couleur de fond principale */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre portée */
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #26547C; /* Couleur principale du texte */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #26547C; /* Couleur de la bordure */
  font-size: 1rem;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* Police pour l'input */
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #26547C; /* Couleur de la bordure */
  font-size: 1rem;
  box-sizing: border-box;
  height: 150px;
  font-family: 'Roboto', sans-serif; /* Police pour la textarea */
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #EF476F; /* Couleur du bouton */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif; /* Police pour le bouton */

  &:hover {
    background-color: #FFD166; /* Couleur au survol */
    color: #26547C; /* Couleur du texte au survol */
  }
`;

// Composant principal du formulaire d'ajout de tâche
const AddTaskForm = ({ tasks, setTasks }) => {
  const location = useLocation(); // Permet de récupérer l'URL actuelle
  const navigate = useNavigate(); // Permet de naviguer entre les pages

  // États locaux pour le titre et la description de la tâche
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  // Effet qui se déclenche lorsque location.state change (utilisé pour éditer une tâche existante)
  useEffect(() => {
    // Si une tâche est présente dans location.state, remplissons les champs avec ses valeurs
    if (location.state && location.state.task) {
      const { task } = location.state;
      setTaskTitle(task.text);
      setTaskDescription(task.description);
    }
  }, [location.state]);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire
    if (taskTitle.trim()) { // Vérifie que le titre de la tâche n'est pas vide
      if (location.state && location.state.index !== undefined) {
        // Si l'on est en mode édition, on met à jour la tâche existante
        const updatedTasks = tasks.map((task, i) =>
          i === location.state.index ? { ...task, text: taskTitle, description: taskDescription } : task
        );
        setTasks(updatedTasks);
      } else {
        // Sinon, on ajoute une nouvelle tâche
        const newTask = { text: taskTitle, description: taskDescription, state: 'Vierge' };
        setTasks([...tasks, newTask]);
      }
      navigate('/'); // Redirige vers la page principale
    }
  };

  return (
    // Conteneur principal du formulaire
    <FormContainer>
      {/* Titre du formulaire */}
      <Heading>{location.state ? 'Edit Task' : 'Add New Task'}</Heading>
      <form onSubmit={handleSubmit}>
        {/* Champ de saisie pour le titre de la tâche */}
        <Input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)} // Mise à jour du titre en fonction de l'utilisateur
          placeholder="Task title"
          required
        />
        {/* Champ de saisie pour la description de la tâche */}
        <Textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)} // Mise à jour de la description
          placeholder="Task description"
        />
        {/* Bouton de soumission */}
        <Button type="submit">{location.state ? 'Save Changes' : 'Add Task'}</Button>
      </form>
    </FormContainer>
  );
};

// Validation des props à l'aide de PropTypes
AddTaskForm.propTypes = {
  tasks: PropTypes.array.isRequired, // La prop tasks doit être un tableau
  setTasks: PropTypes.func.isRequired, // La prop setTasks doit être une fonction
};

export default AddTaskForm;
