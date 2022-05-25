import { Container, Titulo, Resumo, BotaoNoticia } from "../Card/styles";

interface PropsCard {
    titulo: string;
    image: string;
    resumo: string;
    link: string;
}

function Card({ titulo, image, resumo, link }: PropsCard){
    return(
        <Container>
            <img src={image} alt="" />
            <div>
                <Titulo>{titulo}</Titulo>
                <Resumo>{resumo}</Resumo>
                <BotaoNoticia href={link}>Ir para a notícia</BotaoNoticia>
            </div>
        </Container>
    );
}

export default Card;