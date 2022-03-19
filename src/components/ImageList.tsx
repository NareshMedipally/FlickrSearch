import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { PhotoProps } from '../typings/photo';
import ImageItem from './ImageItem';
type ImageListProps = {
    photos: PhotoProps[];
    loadMorePhotos: () => void;
}
const ImageList: React.FC<ImageListProps> = ({ photos, loadMorePhotos }) => {
    const renderItem = ({ item }) => (<ImageItem photo={item} />);
    const renderEmptyItem = <View style={styles.noRecords}><Text> No search results found</Text></View>
    return (
        <View style={styles.container}>
            <Text></Text>
            <FlatList
                data={photos}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                horizontal={false}
                numColumns={3}
                style={styles.listView}
                onEndReachedThreshold={0.5}
                onEndReached={loadMorePhotos}
                testID="flat-list"
                ListEmptyComponent={renderEmptyItem}
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
    },
    noRecords: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

}))

export default ImageList;