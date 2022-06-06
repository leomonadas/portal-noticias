import { newsApi } from "./config";

export const getTecHeadlines = async () => {
    try {
        const response = await newsApi.get("/top-headlines?country=br&category=technology");
        return response.data;
    } catch (error) {
        return {
            message: "Erro ao tentar acessar!",
        };
    }
};