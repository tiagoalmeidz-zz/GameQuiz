import db from '../../db.json';
import Button from '../../src/components/Button';
import Footer from '../../src/components/Footer';
import GitHubCorner from '../../src/components/GitHubCorner';
import Header from '../../src/components/Header';
import Input from '../../src/components/Input';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import Widget from '../../src/components/Widget';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Header />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            Carregando...
          </Widget.Header>
          <Widget.Content>
            [Loading]
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Hi</h1>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/tiagoalmeidz/GameQuiz" />
    </QuizBackground>
  );
}
