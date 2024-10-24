import {Tabs} from 'antd';
import MovieList from './MovieList';


function Admin() {

//     const TablesId = [
//         {
//           key: 1,
//           label: 'Movies',
//           children: <div>Movies</div>
//         },
//         {
//             key: 2,
//             label: 'Theatres',
//             children: <div>Theatres</div>
//         }
// ];


const TablesId = [
  {
    key: 1,
    label: 'Movies',
    children: <div><MovieList/></div>
  },
  {
      key: 2,
      label: 'Theatres',
      children: <div>Theatres</div>
  }
];

   return(
     <div>
        <h1>Admin pages</h1>
        <Tabs items={TablesId}/>
     </div>
   )
}
export default Admin;