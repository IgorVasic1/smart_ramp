<template>
    <v-card elevation="2">
      <v-card-title>My Profile</v-card-title>
      <v-card-subtitle>Personal Information</v-card-subtitle>
      <v-card-text>
        <v-avatar size="100">
          <img src="https://via.placeholder.com/150" alt="avatar" />
        </v-avatar>
        <div>Name: {{ name }}</div>
        <div>Email: {{ email }}</div>
        <div>Address: {{ address }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="#003e76" class="white--text" @click="editProfile">Uredi</v-btn>
        <v-btn color="#003e76" class="white--text" @click="editProfile">Dodaj Automobil</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "John Doe",
        email: "johndoe@example.com",
        address: "123 Main St, Anytown USA",
      };
    },
    methods: {
      editProfile() {
        // handle edit profile logic here
      },
    },
  };
  </script>
  