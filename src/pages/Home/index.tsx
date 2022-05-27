import { Wrapper, Background } from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { getTopHeadlines } from "../../services/newsAPI/noticias";
import { useEffect, useState } from "react";

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

function Home() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const getNoticias = async () => {
            const response = await getTopHeadlines();

            setArticles(response.articles);
        };
        
        getNoticias();
    }, []);

    return (
        <Background>
            <Header />
            <Wrapper> 
                {articles.map((article, index) => {
                    return (
                        <Card 
                        titulo={article.title} 
                        resumo={article.description} 
                        link={article.url}
                        image={article.urlToImage}
                        key={index}
                        />
                    ); 
                })}
            </Wrapper>
        </Background>
    )
}

export default Home;