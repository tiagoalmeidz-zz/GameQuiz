import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Header from '../src/components/Header';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';

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
  const [name, setName] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

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
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input name="playerName" placeholder="Diga seu nome!" value={name} onChange={(e) => setName(e.target.value)} />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name || 'Desconhecido'}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/tiagoalmeidz/GameQuiz" />
    </QuizBackground>
  );
}
