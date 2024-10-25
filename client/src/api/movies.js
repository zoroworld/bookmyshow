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

export const addMovies = async (value) => {
    try {
        const response = await axiosInstance.post('api/movies/add-movie', value);
        return response.data;
    } catch (error) {
        console.error(error);
        return error.data;
    }
}

export const getSinglemovies = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/movies/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return error.data;
    }
}