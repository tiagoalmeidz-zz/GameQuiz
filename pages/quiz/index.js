import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

export default function Quiz() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}

// export default function QuizPage() {
//   return (
//     <QuizBackground backgroundImage={db.bg}>
//       <Header />
//       <QuizContainer>
//         <Widget>
//           <Widget.Header>
//             Carregando...
//           </Widget.Header>
//           <Widget.Content>
//             [Loading]
//           </Widget.Content>
//         </Widget>

//         <Widget>
//           <Widget.Content>
//             <h1>Hi</h1>
//           </Widget.Content>
//         </Widget>
//         <Footer />
//       </QuizContainer>
//       <GitHubCorner projectUrl="https://github.com/tiagoalmeidz/GameQuiz" />
//     </QuizBackground>
//   );
// }
