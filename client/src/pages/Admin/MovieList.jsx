import { useEffect, useState } from "react";
import { ListofMovies } from "../../api/movies";
import { Table, Space, Button } from "antd";
import MovieForm from "./MovieForm";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableHeading = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return <img src={data.poster} width="75" height="115" />;
      },
    },
    {
      title: "Movie name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "descripton",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release date",
      dataIndex: "releasedate",
      render: (text) => {
        let newDate = new Date(text);
        const formdate = newDate.toDateString();
        //console.log(data);
        return <span>{formdate}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  async function getAllMovies() {
    const response = await ListofMovies();
    const movieList = response.data;
    //  setMovies(movieList);
    // make unike key
    setMovies(
      movieList.map((item) => {
        return { ...item, key: `movie${item._id}` };
      })
    );
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <>
      <div className="movies-container">
        <div
          className="movie-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="movie-list-title">
            <h2>List of Movies</h2>
          </div>
          <div className="movies-header">
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Add movie
            </Button>
            <div className="movie-create-form-modak">
              {isModalOpen && (
                <MovieForm
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
            </div>
          </div>
        </div>
        <div className="movie-table">
          <Table columns={tableHeading} dataSource={movies} scroll={{ x: 800 }}   pagination={{ pageSize: 5 }} />
        </div>
      </div>
    </>
  );
}

export default MovieList;
