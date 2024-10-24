import { useEffect, useState } from "react";
import {ListofMovies} from '../../api/movies';
import {Table, Space} from 'antd';


function MovieList() {
   const [movies, setMovies] = useState([]);

   const tableHeading = [
      {
        title: "Poster",
        dataIndex: "poster",
        render: (text, data) => {
           return(
              <img src={data.poster} width="75" height="115" />
           )
        },
      },
      {
        title:"Movie name",
        dataIndex:"title"
      },
      {
        title:"Description",
        dataIndex:"descripton"
      },
      {
        title:"Duration",
        dataIndex:"duration"
      },
      {
        title:"Genre",
        dataIndex:"genre"
      },
      {
        title:"Language",
        dataIndex:"language"
      },
      {
        title:"Release date",
        dataIndex:"releasedate",
        render: (text) => {
            let newDate = new Date(text);
            const formdate = newDate.toDateString();
            //console.log(data);
            return(
                <span>{formdate}</span>
            )
            
        }
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <Space size="middle">
            <a>Update</a>
            <a>Delete</a>
          </Space>
        ),
      },
   ];

   async function getAllMovies(){
     const response = await ListofMovies();
     const movieList = response.data;
    //  setMovies(movieList);
    // make unike key 
    setMovies(
        movieList.map((item) => {
            return {...item, key: `movie${item._id}`}
        })
    )
   }

   useEffect(() => {
    getAllMovies();
   },[])

    return(
        <>
          <Table columns={tableHeading} dataSource={movies}/>
        </>
    )
}

export default MovieList;