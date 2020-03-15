import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Permissions from "expo-permissions";
import * as Contacts from "expo-contacts";
import ContactList from "./contactList.js";
export default function App() {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);
  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    console.debug("Status", status);
    setPermissions(status === "granted" ? true : false);
  };
  const showContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    console.debug(contactList);
    setContacts(contactList.data);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Contact App</Text>
      <Button onPress={showContacts} title="show contacts" />
      <ContactList contacts={contacts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  }
});
