import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
    border-radius: 50%;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://github.com/tiagoalmeidz">
        <img src="https://avatars.githubusercontent.com/u/6900314?s=460&u=beb5c1c71d590e15dcb4f60c8134993854ac597d&v=4" alt="Tiago" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/tiagoalmeidz">
          <span>@tiagoalmeidz</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
