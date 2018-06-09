<template>
  <div class="index container">
    <table class="striped" v-for="gruppe in gruppen" :key="gruppe.id">
      <thead>
        <tr>
        <!-- über Gruppen Array schleifen -->
          <th class="indigo-text">{{gruppe.name}}</th>
        </tr>
      </thead>
      <!-- über teams Array schleifen, wenn keine id vorhanden für key, kann der index übergeben werden -->
      <!-- Achtung Referenz auf gruppe NICHT gruppen -->
      <tbody v-for="(team, index) in gruppe.teams" :key="index">
        <tr>
          <td>{{ team }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// database import <3
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      gruppen: []
    }
  },
  methods: {

  },
  created(){
      //fetch data from the firestore
      db.collection('teams').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let group = doc.data()
          group.id = doc.id
          this.gruppen.push(group)
        })
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }
  .index thead tr th{
    font-size: 1.8em;
    margin-top: 0px;
  }
</style>
