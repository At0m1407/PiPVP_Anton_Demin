// Импорт библиотеки axios для выполнения HTTP-запросов
import axios from "axios";

// Класс PostService для работы с внешним API постов
export default class PostService {
    // Метод для получения всех постов с возможностью задать лимит и страницу
    static async getAll(limit = 10, page = 1) {
        // Выполнение GET-запроса к внешнему API с параметрами лимита и страницы
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });

        // Возвращение ответа от API
        return response;
    }
}
