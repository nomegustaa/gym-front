import axios from 'axios';
import { useEffect, useState } from 'react';
import ExerciseCard from './components/Exercise';
import { API } from './config/env';

export interface IExercisesResponse {
  category: string;
  image: string;
  name: string;
  repetitions: string;
  series: string;
}

const App = () => {
  const [exercises, setExercises] = useState<IExercisesResponse[]>([]);

  const getExercises = async () => {
    try {
      const response = await axios.get(`${API}/exercises`);

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
      <ExerciseCard exercises={exercises || []} />
    </div>
  );
};

export default App;
