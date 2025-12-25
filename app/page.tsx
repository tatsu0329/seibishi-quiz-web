import Quiz from './components/Quiz';
import questionsData from '@/src/data/questions.json';

export default function Home() {
  return <Quiz questions={questionsData} />;
}
