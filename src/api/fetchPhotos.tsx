const controller = new AbortController();
import { Alert } from "react-native";

export  const fetchImages =  async(searchTerm:string,currentPage:number,count:number) => {
  const requestUrl = searchTerm ? `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=${searchTerm}&page=${currentPage}&per_page=${count}&format=json&nojsoncallback=1` : `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=96358825614a5d3b1a1c3fd87fca2b47&page=${currentPage}&per_page=${count}&format=json&nojsoncallback=1`;
  try {
    const response = await fetch(requestUrl);
    const json = await response.json();
    return json.photos.photo ;
  } catch (error) {
    Alert.alert('Unable to fetch photos. Please try again')
  }

};

export const cleanUp =() =>{
    controller.abort()
}

