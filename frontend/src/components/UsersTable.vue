<template>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="accountHeaders"
      :items="accounts"
      item-value="name"
      elevation="0"
      style="position: relative; border-top-left-radius: 50px;"
      class="pa-0 mt-4"
    ></v-data-table>
    
  </template>
  
  <script>
    export default {
      data () {
        return {
          itemsPerPage: 5,
          accountHeaders: [
          {
            class: "pr-0 mr-0 textColor--text",
            text: '#',
            value: 'id',
          },
          {
            class: "textColor--text",
            text: 'E-mail',
            value: 'email'
          },
          {
            class: "textColor--text",
            text: 'Ime',
            value: 'name'
          },
          {
            class: "textColor--text",
            text: 'Prezime',
            value: 'last_name'
          },
          {
            class: "textColor--text",
            text: 'Status',
            value: 'status'
          },
          {
            class: "textColor--text",
            text: 'Rola',
            value: 'role',
          },
          {
            class: "textColor--text",
            text: 'Aktivnost',
            value: 'inactivity'
          },
          {
            class: "textColor--text",
            text: 'Broj Automobila',
            value: 'cars'
          }
        ],
        accounts: [
  {
    email: 'jane.doe@example.com',
    name: 'Jane',
    last_name: 'Doe',
    status: 'Active',
    role: 'Admin',
    inactivity: '2',
    cars: '3',
  },
  {
    email: 'john.smith@example.com',
    name: 'John',
    last_name: 'Smith',
    status: 'Inactive',
    role: 'User',
    inactivity: '5',
    cars: '0',
  },
  {
    email: 'mike.jones@example.com',
    name: 'Mike',
    last_name: 'Jones',
    status: 'Active',
    role: 'User',
    inactivity: '0',
    cars: '2',
  },
  {
    email: 'susan.baker@example.com',
    name: 'Susan',
    last_name: 'Baker',
    status: 'Active',
    role: 'Admin',
    inactivity: '3',
    cars: '1',
  },
  {
    email: 'tom.wilson@example.com',
    name: 'Tom',
    last_name: 'Wilson',
    status: 'Inactive',
    role: 'User',
    inactivity: '10',
    cars: '0',
  },
  {
    email: 'lisa.brown@example.com',
    name: 'Lisa',
    last_name: 'Brown',
    status: 'Active',
    role: 'User',
    inactivity: '1',
    cars: '1',
  },
  {
    email: 'peter.lee@example.com',
    name: 'Peter',
    last_name: 'Lee',
    status: 'Active',
    role: 'Admin',
    inactivity: '0',
    cars: '4',
  },
  {
    email: 'emily.taylor@example.com',
    name: 'Emily',
    last_name: 'Taylor',
    status: 'Inactive',
    role: 'User',
    inactivity: '8',
    cars: '0',
  },
  {
    email: 'david.nguyen@example.com',
    name: 'David',
    last_name: 'Nguyen',
    status: 'Active',
    role: 'User',
    inactivity: '2',
    cars: '1',
  },
  {
    email: 'amy.lee@example.com',
    name: 'Amy',
    last_name: 'Lee',
    status: 'Active',
    role: 'Admin',
    inactivity: '1',
    cars: '2',
  },
]

        }
      },
    }
  </script>