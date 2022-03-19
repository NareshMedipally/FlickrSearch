import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PhotoProps } from '../typings/photo';
import FastImage from 'react-native-fast-image'

type ImageItemProps = {
    photo: PhotoProps
}
const ImageItem: React.FC<ImageItemProps> = (props) => {
    const getImageUrl = (photo: PhotoProps) => {
        let url = `https://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return url
    }

    return (
        <View style={styles.container}>
            <FastImage
                style={styles.image}
                source={{
                    uri: getImageUrl(props.photo),
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
                testID="fast-image"
            />
        </View>
    )

}
const styles = StyleSheet.create(({
    image: {
        height: 150,
        width: '100%',
    },
    container: {
        width: '30%',
        alignItems: 'center',
        marginHorizontal: '1%',
        borderWidth: 0.75,
        margin: '1%',
    }

}))

export default ImageItem;