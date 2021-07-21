<template>
    <div class="col">
        <div class="title">
            <h4>{{data.title}}</h4>
            <div id="cancel_button" @click="delete_col">X</div>
        </div>     
        <div>
            <draggable
                class="list-group kanban-column"
                :list="data.data"
                group="tasks"
                >
                <Card
                class="list-group-item"
                v-for="element in data.data"
                :key="element.name"
                v-bind:data="element"
                >      
                </Card>
            </draggable>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import Card from "./Card.vue";

export default {
  name: 'Column',
  components:{
    draggable,
    Card
  },
  props: {
    data: Object,
    id: Number,
  },
  methods: {
    //add new tasks method
    delete_col: function() {    
        const checker = confirm("You want to delete column "+this.data.title+"?");  
        checker && this.$emit('delete_column', this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    border-bottom:3px dashed black;
    margin-bottom: 4px;
}

#cancel_button{
    display: flex;
    border-radius: 50%;
    width: 20px;
    align-items: center;
    justify-content: center;  
    color: white;
    background-color: red;
    margin: 0;
    
}

#cancel_button:hover{
    background-color: black;
}

.col{
  width: 200px;
  background-color:#d4cfcf;
  margin: 10px;
  border-radius: 2%;
}
</style>
