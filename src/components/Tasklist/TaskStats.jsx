import styled from 'styled-components';
import PropTypes from 'prop-types';

// Importation de la police Roboto
import { createGlobalStyle } from 'styled-components';

// Définition des couleurs
const colors = {
  darkBlue: '#26547C',
  pink: '#000000',
  yellow: '#FFD166',
};

// Style global pour appliquer la police Roboto
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

// Composants stylés
const StatsContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${colors.yellow};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  color: ${colors.darkBlue};
`;

const StatItem = styled.p`
  font-size: 1.2rem;
  color: ${colors.pink};
  margin: 5px 0;
`;

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const tasksByState = tasks.reduce(
    (acc, task) => {
      acc[task.state] += 1;
      return acc;
    },
    { Vierge: 0, 'En cours': 0, Terminée: 0 }
  );

  return (
    <>
      <GlobalStyle />
      <StatsContainer>
        <Heading>Task Statistics</Heading>
        <StatItem>Total Tasks: {totalTasks}</StatItem>
        <StatItem>Vierge: {tasksByState.Vierge}</StatItem>
        <StatItem>En cours: {tasksByState['En cours']}</StatItem>
        <StatItem>Terminée: {tasksByState.Terminée}</StatItem>
      </StatsContainer>
    </>
  );
};

// Validation des props
TaskStats.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskStats;
