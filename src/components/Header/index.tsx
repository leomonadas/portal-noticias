import { Container, Wrapper, Logo, Menu, Link } from "./styles";

function Header(){
    return(
        <Container>
            <Wrapper>
                <Logo>Notícias</Logo>
                <Menu>
                    <Link>Home</Link>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Header;