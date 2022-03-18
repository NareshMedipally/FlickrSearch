import React, { Component } from 'react';

import {Text,View,StyleSheet,SafeAreaView} from 'react-native';
import {fetchImages,cleanUp} from '../api/fetchPhotos'
import ImageList from '../components/ImageList';
import SearchBar from '../components/SearchBar';
import { PhotoProps } from '../typings/photo';
export default class Home extends Component {
  state = {
    photos:[],
    photosFromSearch:[],
    page:1,
    searchTerm :''
  };
   componentDidMount(){
    this.getImages()
  }

  componentWillUnMount(){
    cleanUp()
  }

  getImages = async() =>{
    const data = await fetchImages(this.state.searchTerm,this.state.page,20)
    if(this.state.searchTerm){
      this.setState({ photosFromSearch :[...this.state.photosFromSearch, ...data] })
    }else{
      this.setState({ photos :[...this.state.photos, ...data] })
    }
   
   
  }

   loadMorePhotos = () =>{
    this.setState({
    page:this.state.page + 1
    },()=>this.getImages())
    }

  searchPhotos = async(searchTerm:string) =>{
    console.log("searchTerm",searchTerm);
    let photosFromSearch = []
    if(searchTerm){
      this.setState({searchTerm,page:1})
      photosFromSearch = await fetchImages(searchTerm,1,20)
    }
   
    this.setState({photosFromSearch,searchTerm})
    console.log("photosFromSearch",this.state.photosFromSearch.length);
  }
	render() {
    const photosToDisplay = this.state.photosFromSearch.length > 0 ? this.state.photosFromSearch:
    this.state.photos 

    if(photosToDisplay.length > 0){
      return (
        <SafeAreaView style={styles.container1}>
        <View style={styles.container}>
        <Text  testID="header" style={styles.header}>Filckr Search</Text>
            <View style={styles.main}>
              <SearchBar searchPhotos = {this.searchPhotos}/>
              <ImageList photos = {photosToDisplay} loadMorePhotos = {this.loadMorePhotos} />
            </View>
          </View>
          </SafeAreaView>
      );
    }

    return(
      <SafeAreaView style={styles.container}>
      <View >
      <Text  testID="header" style={styles.header}>Filckr Search</Text>
      <Text >Filckr Search</Text>
      </View>
      </SafeAreaView>
    )
	
	}

}

const styles = StyleSheet.create(({
    container :{
       backgroundColor:'#eee', 
    },
    container1 :{
      backgroundColor:'#FF0000', 
   },
    header:{
      marginTop:'2%',
      textAlign:'center',
      fontWeight:'bold'
    },
    main:{
      margin:'3%'
    }

}))



