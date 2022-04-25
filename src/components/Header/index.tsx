
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'



// quais props que o header irá receber
interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export const Header = ({ onOpenNewTransitionModal }: HeaderProps) => { 


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransitionModal}>
          Nova transação
        </button>

        
      </Content>
    </Container>
  )
}