<template>
  <div class="min-h-screen bg-gray-800 flex justify-center place-items-center">
    <div class="h-fit bg-white w-full lg:w-1/2 px-2 lg:px-24 text-black flex flex-col justify-between">
      <!-- content on top-->
      <div class="text-center">
        <h1 class="text-3xl font-bold my-8">{{ book.volumeInfo.title }}</h1>
        <p v-html="book.volumeInfo.description">{{ book.volumeInfo.description }}</p>
        <p class="text-sm my-4">Find out more at
          <a :href="book.volumeInfo.previewLink" target="_blank"
             class="text-blue-400">{{ book.volumeInfo.previewLink }}</a>
        </p>
      </div>
      <!-- bottom content-->
      <div class="flex justify-between place-items-end mb-5 text-lg font-semibold">
        <NuxtLink to="/" class="border-black border-2 px-8 py-1">Back</NuxtLink>
        <p class="bg-yellow-400 border-yellow-400 border-2 px-8 py-1">
          Rating: {{ book.volumeInfo.averageRating }}&#9733;</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const bookId = route.params.slug[0];
const bookApiUrl = "https://www.googleapis.com/books/v1/volumes/" + bookId;
const {data: book} = await useFetch(bookApiUrl);
</script>

<style scoped>

</style>