import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { PhotoProps } from '../typings/photo';
import ImageItem from './ImageItem';
type ImageListProps = {
    photos: PhotoProps[];
    loadMorePhotos: () => void;
}
const ImageList: React.FC<ImageListProps> = ({ photos, loadMorePhotos }) => {
    const renderItem = ({ item }) => (<ImageItem photo={item} />);
    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                horizontal={false}
                numColumns={3}
                style={styles.listView}
                onEndReachedThreshold={0.5}
                onEndReached={loadMorePhotos}
                testID ="flat-list"
            />

        </View>
    )
}
const styles = StyleSheet.create(({
    container: {
        backgroundColor: '#eee',

    },
    listView: {
        marginTop: '5%',
        height: '90%'
    }


}))

export default ImageList;