import { useEffect, useState } from "react";
import { getSinglemovies } from "../../api/movies";
import { message } from "antd";
import { useNavigate, useParams } from 'react-router-dom';

function SingleMovie() {
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const params = useParams();


    const fetchMovie = async () => {
        try {
            const response = await getSinglemovies(params.id);
        
            if (response.success) {
                setMovie(response.data);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, []); 

    return (
        <>
            <div>
                {movie ? (
                    <>
                        <h1>{movie.title}</h1>
                        {/* <img src={movie.poster} alt={movie.title} /> */}
                        <p>{movie.genre}</p>
                        <p>{movie.duration}</p>
                        <p>{movie.descripton}</p>
                        {/* Add more movie details as needed */}
                    </>
                ) : (
                    <p>Loading...</p> // Show a loading message while fetching the movie
                )}
            </div>
        </>
    );
}

export default SingleMovie;
