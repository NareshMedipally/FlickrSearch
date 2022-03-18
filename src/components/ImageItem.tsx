import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import { PhotoProps } from '../typings/photo';
import { Dimensions ,useWindowDimensions} from 'react-native';
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;
import FastImage from 'react-native-fast-image'

type ImageItemProps =  {
    photo:PhotoProps
 }
const ImageItem:React.FC<ImageItemProps>= (props)=>{
    const size = useWindowDimensions();
    // console.log("heigght",size.height);
    // console.log("width",size.width);
   const  getImageUrl = (photo:PhotoProps) => {
    let url = `https://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
     return  url
    }

    return (
        <View style={styles.container}>
            {/* <Text>{props.photo.title}</Text> */}
            {/* <Image source={{ uri: getImageUrl(props.photo)}} style={styles.image}></Image> */}
            <FastImage
            style={styles.image}
          source={{
            uri: getImageUrl(props.photo),
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
    />
        </View>
    )
    
}
const styles = StyleSheet.create(({
    image :{
      height:150,
      width:'100%',
    // // flex: 1,
    // // alignSelf: 'stretch',
    // // resizeMode:'contain'
    // width: "100%",
    // height: "100%",
    // resizeMode: "cover",
},
container:{
    width:'30%',
    alignItems:'center',
    marginHorizontal:'1%',
    borderWidth:0.75,
    margin:'1%',
} 

}))
 
export default ImageItem;