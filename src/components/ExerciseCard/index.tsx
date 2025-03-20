import { IExercises } from '../../App';
import { Card, Image, Title, Info } from './styles';

interface IExerciseCard {
  exercise: IExercises;
}

const ExerciseCard = ({ exercise }: IExerciseCard) => {
  return (
    <Card>
      <Image src={exercise.image} alt={exercise.name} />
      <Title>{exercise.name}</Title>
      <Info>
        <strong>Categoria:</strong> {exercise.category}
      </Info>
      <Info>
        <strong>Séries:</strong> {exercise.series}
      </Info>
      <Info>
        <strong>Repetições:</strong> {exercise.repetitions}
      </Info>
    </Card>
  );
};

export default ExerciseCard;
