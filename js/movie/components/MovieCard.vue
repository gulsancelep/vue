<template>
        <v-card-title class="subtitle-2">{{movie.title}}</v-card-title>
        <v-card-text class="card-text align-items-center">
            <div class="d-flex justify-content-between align-items-center"> 
            </div>
        </v-card-text>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    }
  },
}
</script>