import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchInput from '../../Components/InputsForm';
import CardBook from '../../Components/CardBook';
import {API_ENDPOINT} from '../../Utils/Routes';
import {Colors, Fonts} from '../../Themes';

export default function MainScreen(props) {
  const GET_BOOKS_URL = `${API_ENDPOINT}/books`;
  const navigation = useNavigation();
  const [library, setLibrary] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    getBooks();
  }, [textSearch]);

  const getBooks = async () => {
    await fetch(GET_BOOKS_URL + '?q=' + textSearch)
      .then((response) => response.json())
      .then((json) => {
        setLibrary(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        throw error;
      });
  };

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorMsg}>
        <Text style={styles.textError}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchInput
        style={styles.searchBar}
        placeholder={'Search...'}
        value={textSearch}
        onChangeText={(value) => setTextSearch(value)}
      />
      <FlatList
        data={library}
        renderItem={({item}) => (
          <CardBook
            title={item.title}
            image={item.image_url}
            author={item.author}
            onPress={() => navigation.navigate('BookDetail', {book: item})}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 6,
    marginVertical: 8,
  },
  errorMsg: {
    flex: 1,
    justifyContent: 'center',
  },
  textError: {
    color: Colors.text,
    fontSize: Fonts.size.regular,
  },
});
