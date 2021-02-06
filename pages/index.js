import styled from 'styled-components';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Header from '../src/components/Header';
import QuizBackground from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 365px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px; 
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Header />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz sobre games!</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum, dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da galera.</h1>
            <p>Lorem ipsum, dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/tiagoalmeidz/GameQuiz" />
    </QuizBackground>
  );
}
