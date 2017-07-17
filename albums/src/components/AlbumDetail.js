import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
const { title, artist, thumbnail_image, image, url } = album;
const { 
    thumbnailStyle, 
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle, 
    imageStyle
} = styles;

return (
<Card>
    <CardSection>
        <View>
        <Image
        style={styles.thumbnailStyle}
        source={{  uri: thumbnail_image }} 
        />    
        </View>
        <View style={styles.headerContentStyle}>
    <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
</View>
    </CardSection>
    <CardSection>
        <Image style={styles.imageStyle}
        source={{ uri:image }} />
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
                구매해~
                </Button>
            </CardSection>
    </Card>
);
};

const styles = {
headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
},
thumbnailStyle: {
    height: 50,
    width: 50
},
thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
},
headerTextStyle: {
    fontSize: 18
},
imageStyle: {
    height: 300,
    flex: 1,
    width: null
}
};

export default AlbumDetail;
