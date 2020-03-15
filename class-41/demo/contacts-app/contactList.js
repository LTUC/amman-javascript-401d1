import React from "react";
import { FlatList, View, Text, Button, Linking } from "react-native";

export default function contactList({ contacts }) {
  const call = contact => {
    console.debug(contact);
    let link = `tel:${contact.phoneNumbers[0].digits}`;
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  };
  return (
    <View>
      <Text>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button onPress={() => call(item)} title={item.name} />
        )}
      />
    </View>
  );
}
