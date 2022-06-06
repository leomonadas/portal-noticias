import { Wrapper, Background } from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { getTecHeadlines } from "../../services/newsAPI/noticiastecnologia";
import { useEffect, useState } from "react";

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

function Tec() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const getNoticiasTec = async () => {
            const response = await getTecHeadlines();

            setArticles(response.articles);
        };
        
        getNoticiasTec();
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

export default Tec;