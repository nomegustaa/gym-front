import { IExercisesResponse } from '../../App';
import * as S from './styles';

interface IExercisesCard {
  exercisesFiltered: IExercisesResponse[];
}

const ExercisesCard = ({ exercisesFiltered }: IExercisesCard) => {
  return (
    <div>
      {exercisesFiltered.map((item, index) => {
        const formattedRepetitions = item.repetitions.split(' ');
        return (
          <S.ContainerExercise key={index}>
            <S.Image src={item.image} alt={item.name} width={300} />
            <S.Title>{item.name}</S.Title>
            <S.ContainerDescription>
              <p>{item.series} Séries</p>
              <p>
                {formattedRepetitions[1]} {formattedRepetitions[0]}
              </p>
            </S.ContainerDescription>
          </S.ContainerExercise>
        );
      })}
    </div>
  );
};

export default ExercisesCard;
