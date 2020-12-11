import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {API_ENDPOINT} from '../../Utils/Routes';
import CardBookDetail from '../../Components/CardBookDetail';
import SuggestedBooks from '../../Components/SuggestedBooks';

export default function BookDetailScreen(props) {
  const GET_BOOKS_URL = `${API_ENDPOINT}/books`;
  const navigation = useNavigation();
  const [libraryByGenre, setLibraryByGenre] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  let focusBook = props.route.params.book;
  const textSearch = focusBook.genre;

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    await fetch(GET_BOOKS_URL + '?q=' + textSearch)
      .then((response) => response.json())
      .then((json) => {
        setLibraryByGenre(json);
        // setIsLoading(false);
      })
      .catch((error) => {
        // setError(error);
        // setIsLoading(false);
        throw error;
      });
  };

  return (
    <View style={styles.container}>
      <CardBookDetail focusBook={focusBook} />
      <FlatList
        horizontal
        data={libraryByGenre}
        renderItem={({item}) => (
          <SuggestedBooks
            title={item.title}
            image={item.image_url}
            author={item.author}
            onPress={() => navigation.navigate('BookDetail', {book: item})}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
});
