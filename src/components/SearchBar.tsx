import React ,{useEffect,useState}from 'react';
import {Text,View,StyleSheet,Image,TextInput} from 'react-native';
import debounce  from 'lodash.debounce';

type SearchBarProps =  {
    searchPhotos:(arg:string) => void;
 }
const SearchBar:React.FC<SearchBarProps>= ({searchPhotos})=>{
    const [searchTerm,setSearchTerm] = useState("");
    const debouncedSearchPhotos = debounce(searchPhotos,300)
    const handleChange= (searchTerm:string) =>{
        setSearchTerm(searchTerm)
    }
    useEffect(()=>{
        debouncedSearchPhotos(searchTerm)
    },[searchTerm])

    return (
        <TextInput style={styles.input} 
        placeholder = "Search Photos"
        onChangeText={handleChange}
        ></TextInput>
    )
    
}
const styles = StyleSheet.create(({
    input:{
        height:40,
        borderRadius:50,
        padding: 10,
        backgroundColor: "#b3b4b5"
    },
    image :{
       width:100,
       height:100
    }

}))

// SearchBar.propTypes = {
//     searchPhotos: PropTypes.func.isRequired,
// }

 
export default SearchBar;