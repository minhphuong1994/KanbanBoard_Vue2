<template>
  <div class="container">
    <h1>Phuong's Kanban Board</h1>
    <div class="">
      <div class="">
        <input type="text" v-model="newCard" placeholder="card title"/>
        <button type="button" @click="addCard">Add Card</button>       
      </div>
      <br/>
      <div class="">
        <input type="text" v-model="newColumn" placeholder="column title"/>
        <button type="submit" @click="addColumn">Add Column</button>       
      </div>
    </div>

    <div class="row">
      <Column v-for="(element,index) in data" 
        :key="element.title" 
        v-bind:data="element"
        v-bind:id="index"
        @delete_column="delete_column">
      </Column>
    </div>
  </div>
</template>

<script>
import Column from "./components/Column.vue";

export default {
  name: "App",
  components: {
    //import draggable as a component
    Column,
  },
  data() {
    return {
      // for new tasks
      newCard: "",   
      newColumn:"",
      data:[{
        title: "arrBackLog",
        data: [
        { name: "1 1 1" ,
          description:"it's from 1"},
        { name: "2 2 2" ,
          description:"it's from 2"},
        { name: "3 3 3" ,
          description:"it's from 3"},
        { name: "4 4 4" ,
          description:"it's from 4"}
        ]
      },{
        title:"arrInProgress",
        data:[]
      },
      {
        title:"arrTested",
        data:[]
      },
      {
        title:"arrDone",
        data:[]
      }],
    };
  },
  methods: {
    //add new tasks method
    addCard: function() {
      if (this.newCard) {
        this.data[0].data.push({ name: this.newCard });
        this.newCard = "";
      }
    },
    addColumn: function() {
      if (this.newColumn) {
        this.data.push({ title:this.newColumn, data:[] });
        this.newColumn = "";
      }
    },
    //delete a column
    delete_column: function(id){
      this.data.splice(id,1);
    }
  }
};
</script>

<style>
.container{
  margin: 5px;
  text-align: center;
}

.kanban-column {
  min-height: 300px;
}

.row{
  display: flex;
  /* background-color: aqua; */
  justify-content: center;
  margin: 2px;
}
</style>
