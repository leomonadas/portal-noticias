import { Container, Wrapper, Logo, Menu } from "./styles";
import { Link } from "react-router-dom";

function Header(){
    return(
        <Container>
            <Wrapper>
                <Logo>Notícias</Logo>
                <Menu>
                <a href="."><Link to="/">Home</Link></a>
                <a href="."><Link to="/tecnologia">Tecnologia</Link></a>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Header;