import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import TeacherItem from '../../components/teacher';

import {TeachersList} from '../../constants';

const TeachersScreen = () => {
    return(
        <View style={styles.container}>
            <FlatList
                data={TeachersList}
            renderItem={({item}) => <TeacherItem data={item}/>}
        />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    profilImage: {
      borderRadius: 50,
      height: 100,
      width: 100,
      backgroundColor: "#070E96",
      marginTop: 30,
    },
  });
  

export default TeachersScreen;