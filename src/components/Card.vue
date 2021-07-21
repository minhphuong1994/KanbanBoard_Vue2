<template>
  <div class="card" @click="onClickHandler">
    {{data.name}} 
    <modal v-bind:name="data.name">
      <label>Card Title</label>
      <input type="text" v-model="data.name"/>
      <button @click="updateCardTitle">Update Title</button>
      <br/>
      <label>Description</label>
      <textarea v-model="data.description"></textarea>
      <button @click="updateCardDescription">Update Description</button>
      </modal>
  </div>
 
</template>

<script>
export default {
  name: 'Card',
  mounted () {
    this.$modal.hide(this.data.name)   
  },
  props: {
    data: Object,      
  },
  methods:{
    onClickHandler:function(){
      this.$modal.show(this.data.name)
    },
    updateCardTitle:function(){
      this.$emit('updateCardTitle', {
        name: "",
        updatedName: this.data.name
      })
    },
    updateCardDescription:function(){
      this.$emit('updateCardDecription', this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 10px;
  text-align: left;
  color: black;
}
</style>
