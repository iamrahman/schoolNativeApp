import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";
const TeacherItem = ({data}) => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Image
                style={styles.profilImage}
                source={{ uri:data.profile,}}/>
            <View>
                <Text style={styles.fullName}>{data.full_name}</Text>  
                <Text style={styles.email}>{data.email}</Text>  
            </View>
              
        </View> 
               
    </View>
  );
};


const styles = StyleSheet.create({

    container:{
        padding: 1,
    },
    row: {
        flexDirection: 'row',
        backgroundColor: "#EAF1FF",
        padding: 7,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        margin: 2
    },
    fullName: {
        fontSize: 18,
        fontWeight: "bold",
        marginStart: 20,
    },
    email: {

        marginStart: 20,
    },
    
    profilImage: {
      borderRadius: 50,
      height: 40,
      width: 40,
      backgroundColor: "#12B0E8",
    },
  });

export default TeacherItem;