import { Card, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { ListofMovies } from '../../api/movies';
import moment from 'moment';

import {useNavigate} from 'react-router-dom';



function Home() {
  const[movies , setMovies] = useState([]);
  const navigate = useNavigate();


  async function getAllHomeMovies() {
    const response = await ListofMovies();
    const movieList = response.data;
    // console.log(movieList);
    
    setMovies(movieList);

  }

  useEffect(() => {
    getAllHomeMovies();
  }, []);


   return(
   <>
       <div className="homepage-container" style={{ padding: '20px' }}>
                <h1>Home</h1>
                <Row gutter={[16, 16]} justify="center">
                    {movies.map((movie, index) => {
                        const url = String(`/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`);

                        return (
                            <Col key={index} xs={24} sm={12} md={8} lg={6}>
                                <Card
                                    hoverable
                                    cover={<img alt={movie?.title} src={movie?.poster} />}
                                    style={{ width: '100%' }}
                                    onClick={() => navigate(url)}
                                >
                                    <Card.Meta title={movie?.title} description={`${movie?.genre}`} />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
   </>
   )
}

export default Home;