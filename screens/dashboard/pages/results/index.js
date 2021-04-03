import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ResultStatus from "../../../../components/resultStatus";
import RNPickerSelect from "react-native-picker-select";
import { AttandanceList, ExamList, ResultsList, theme } from "../../../../constants/index";

const ResultsScreen = () => {
  const [selectedValue, setSelectedValue] = useState("football");
  return (
    <View style={styles.container}>
      <View
        style={{
          minHeight: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
          itemKey='id'
          placeholder={{
            label: "Select Exams",
            color: "#000",
          }}
          items={{
            color: '#000'
          }}
          style={{
            viewContainer: {
              backgroundColor: "#fff",
              marginLeft: 15,
              marginRight: 15,
              borderRadius: 5,
            },
            inputAndroid: {
              color: '#000'
            }
          }}
          items={ExamList}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 21,
            padding: 20,
            color: "#FFFFFF",
          }}
        >
          Batch Rank - 12th
        </Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={ResultsList}
          renderItem={({ item }) => <ResultStatus data={item} />}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listView: {
    backgroundColor: theme.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default ResultsScreen;
