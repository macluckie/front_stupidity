import axios from 'axios';

 async function PostStupidy(idChild) {
   return  await axios.post(process.env.REACT_APP_URL_API+'/stupidity', { id: idChild })
}

async function getChilds() {
   return await axios.get(process.env.REACT_APP_URL_API+'/childs');
}


async function getCountStupidityById(id) {
   return  await axios.get(process.env.REACT_APP_URL_API+'/stupidity/'+ id);
}


export { getChilds, PostStupidy, getCountStupidityById };