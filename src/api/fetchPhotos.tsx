//const controller = new AbortController();
import {PhotoResponse} from '../typings/photo'
export  const fetchImages =  async(searchTerm:string,currentPage:number,count:number) => {
  const requestUrl = searchTerm ? `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=${searchTerm}&page=${currentPage}&per_page=${count}&format=json&nojsoncallback=1` : `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=96358825614a5d3b1a1c3fd87fca2b47&page=${currentPage}&per_page=${count}&format=json&nojsoncallback=1`;
  console.log("requestUrl",requestUrl);
  try {
    const response = await fetch(requestUrl);
    const json:PhotoResponse = await response.json();
    return json.photos.photo;
  } catch (error) {
    console.error(error);
  }

};

export const cleanUp =() =>{
    //controller.abort()
}

