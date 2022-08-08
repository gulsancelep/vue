<template>
<v-container>
    <v-row>
        <v-col  cols="14" sm="3" v-for="movie in movies" :key="movie.id"  >
            <MovieCard :movie="movie"/>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import MovieCard from '../components/MovieCard'
export default {  
components :{
    MovieCard,
},
data: function (){
  return {
    movies: [],
  };
},
}
</script>