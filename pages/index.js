import styled from 'styled-components'
import db from '../db.json'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: 'cover';
  background-position: 'center';
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px; 
  }
`

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #4CAF50;
  background-color: #1c1814;
  border-radius: 10px;
  overflow: hidden;
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <h1>Quiz sobre games!</h1>
            <p>Lorem ipsum, dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da galera.</h1>
            <p>Lorem ipsum, dolor sit amet...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  )
}
