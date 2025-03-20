import axios from 'axios';
import { useEffect, useState } from 'react';
import ExerciseCard from './components/ExerciseCard';

export interface IExercises {
  category: string;
  image: string;
  name: string;
  repetitions: string;
  series: string;
}

const App = () => {
  const [exercises, setExercises] = useState<IExercises[]>([]);

  console.log(exercises);
  const getExercises = async () => {
    try {
      const response = await axios.get(
        'https://web-scraper-omega.vercel.app/exercises',
      );

      setExercises(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <div>
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default App;
