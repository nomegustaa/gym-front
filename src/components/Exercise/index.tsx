import { useEffect, useState } from 'react';
import { IExercisesResponse } from '../../App';
import * as S from './styles';
import Category from '../Category';
import ExercisesCard from '../ExercisesCard';

interface IExercise {
  exercises: IExercisesResponse[];
}

const Exercise = ({ exercises }: IExercise) => {
  const [category, setCategory] = useState('PEITO+TRICEPS');
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const categoryNotRepet = [...new Set(exercises.map((item) => item.category))];

  const getCategory = (item: string) => {
    setCategory(item);
  };

  const exercisesFiltered = exercises.filter(
    (item) => item.category === category,
  );

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <S.ContainerExercises>
      <Category
        category={category}
        categoryNotRepet={categoryNotRepet}
        getCategory={getCategory}
        exercisesFiltered={exercisesFiltered}
        widthScreen={widthScreen}
      />

      {widthScreen >= 1000 && (
        <ExercisesCard exercisesFiltered={exercisesFiltered} />
      )}
    </S.ContainerExercises>
  );
};

export default Exercise;
