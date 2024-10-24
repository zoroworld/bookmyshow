import { axiosInstance } from './index';

export const ListofMovies = async () => {
    try {
        const response = await axiosInstance.get('api/movies/get-all-movie');
        return response.data;
    } catch (error) {
        console.error(error);
        return error.data;
    }
}