import axios from 'axios';

 async function PostStupidy(idChild) {
   return  await axios.post('http://localhost:5000/stupidity', { id: idChild })
}

async function getChilds() {
   return await axios.get('http://localhost:5000/childs');
}


async function getCountStupidityById(id) {
   return  await axios.get('http://localhost:5000/stupidity/'+ id);
}


export { getChilds, PostStupidy, getCountStupidityById };