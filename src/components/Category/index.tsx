import { IExercisesResponse } from '../../App';
import ExercisesCard from '../ExercisesCard';
import * as S from './styles';

interface ICategory {
  categoryNotRepet: string[];
  category: string;
  getCategory: (item: string) => void;
  exercisesFiltered: IExercisesResponse[];
  widthScreen: number;
}

const Category = ({
  categoryNotRepet,
  category,
  getCategory,
  exercisesFiltered,
  widthScreen,
}: ICategory) => {
  return (
    <div>
      {categoryNotRepet.map((item, index) => {
        const categorySelected = item === category ? 'active' : '';
        const formattedCategoryName = item
          .split('+')
          .map(
            (item) =>
              item.charAt(0).toUpperCase() + item.slice(1).toLocaleLowerCase(),
          )
          .join(' e ');
        return (
          <div key={index}>
            <S.Card
              onClick={() => getCategory(item)}
              className={categorySelected ? 'active' : ''}
            >
              {formattedCategoryName}
            </S.Card>
            <div>
              {widthScreen < 1000 && categorySelected && (
                <ExercisesCard exercisesFiltered={exercisesFiltered} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
