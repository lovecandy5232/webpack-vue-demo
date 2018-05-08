<template>
  <div>
      <iframe width="100%" height="100%" :src="'http://api.xfsub.com/index.php?url='+movie">
      </iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
  export default {
    data () {
      return {
          
      }
    },
    computed: {
        ...mapState({
            movie: state => state.Counter.movie,
        })
    },
    props:['url'],
    created(){
       console.log(this.$store)
    }
  }
</script>

<style scoped>
  
</style>
