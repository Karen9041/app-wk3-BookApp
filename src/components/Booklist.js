import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import PopularBookDetail from "./PopularBookDetail"
import BookDetail from "./BookDetail";
import sections from "../json/book_section.json";


const Booklist = () => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
        {section.horizontal?(
          <FlatList
            horizontal={true}
            data={section.data}
            renderItem={({item})=><PopularBookDetail book={item}/>}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.title }
          />
        ):null} 
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <BookDetail book={item} />
  };

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
  },
})

export default Booklist;