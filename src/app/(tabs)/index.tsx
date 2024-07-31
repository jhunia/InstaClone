import { Text , View , Image, FlatList} from 'react-native';
import posts from '~/assets/data/post.json';
import{Ionicons , Feather, AntDesign} from '@expo/vector-icons'
import PostListItem from '~/src/components/PostListItem';


export default function FeedScreen (){


        return (
            <FlatList
            data={posts}
            contentContainerStyle={{gap:10}}
            renderItem={( {item }) => <PostListItem post={item} />}
            showsVerticalScrollIndicator={false}
        />
    )



}