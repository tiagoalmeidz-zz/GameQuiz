import { useRouter } from 'next/router';
import { useState } from 'react';

import { motion } from 'framer-motion';
import db from '../db.json';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Header from '../src/components/Header';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
// import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Header />
      <QuizContainer>
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input name="playerName" placeholder="Diga seu nome!" value={name} onChange={(e) => setName(e.target.value)} />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget.Content />
        <Widget />
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/tiagoalmeidz/GameQuiz" />
    </QuizBackground>
  );
}
