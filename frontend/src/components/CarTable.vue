<template>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="carHeaders"
      :items="cars"
      item-value="name"
      class="elevation-1 pa-0"
    ></v-data-table>
    
  </template>
  
  <script>
    export default {
      data () {
        return {
          itemsPerPage: 5,
          carHeaders: [
          {
            class: "pr-0 mr-0 textColor--text",
            text: '#',
            value: 'id',
          },
          {
            class: "textColor--text",
            text: 'Marka Automobila',
            value: 'mark'
          },
          {
            class: "textColor--text",
            text: 'Model Automobila',
            value: 'model'
          },
          {
            class: "textColor--text",
            text: 'Godina Proizvodnje',
            value: 'year'
          },
          {
            class: "textColor--text",
            text: 'Vrijeme Parkiranja',
            value: 'time_parked'
          },
          {
            class: "textColor--text",
            text: 'Vrijeme Napuštanja',
            value: 'time_left',
          },
          
        ],
        cars: [
        {
            id: 1,
            mark: 'Toyota',
            model: 'Corolla',
            year: '2015',
            time_parked: '10:30',
            time_left: '11:45',
        },
        {
            id: 2,
            mark: 'Honda',
            model: 'Civic',
            year: '2018',
            time_parked: '09:15',
            time_left: '12:30',
        },
        {
            id: 3,
            mark: 'Ford',
            model: 'Mustang',
            year: '2020',
            time_parked: '14:00',
            time_left: '15:15',
        },
        {
            id: 4,
            mark: 'Chevrolet',
            model: 'Impala',
            year: '2016',
            time_parked: '13:45',
            time_left: '14:45',
        },
        {   id: 5,
            mark: 'BMW',
            model: '3 Series',
            year: '2019',
            time_parked: '08:30',
            time_left: '11:00',
        },
        {
            id: 6,
            mark: 'Mercedes-Benz',
            model: 'C-Class',
            year: '2017',
            time_parked: '12:15',
            time_left: '13:30',
        },
        {
            id: 7,
            mark: 'Audi',
            model: 'A4',
            year: '2015',
            time_parked: '09:45',
            time_left: '10:45',
        },
        {   id: 8,
            mark: 'Volkswagen',
            model: 'Passat',
            year: '2014',
            time_parked: '11:30',
            time_left: '12:45',
        },
        {   id: 9,
            mark: 'Hyundai',
            model: 'Elantra',
            year: '2013',
            time_parked: '10:00',
            time_left: '11:15',
        },
        {   id: 10,
            mark: 'Nissan',
            model: 'Altima',
            year: '2012',
            time_parked: '14:30',
            time_left: '15:45',
        }
        ]


        }
      },
    }
  </script>