<template>
  <div class="bg-gray-800 h-screen">
    <!-- container-->
    <div class="flex justify-center bg-gray-800 py-12">
      <!-- center content-->
      <div class="text-center">
        <!-- title-->
        <h1 class="my-3 text-2xl fond-bold text-white">Bookoholic - Your Movie Guru</h1>
        <!-- end title-->

        <!-- user interaction-->
        <div class="flex justify-center">
          <input type="text"
                 v-model="userTextInput"
                 minlength="10"
                 placeholder="Search Title..."
                 class="bg-gray-50 h-10 px-3 lg:w-72"
          />
          <button class="bg-yellow-400 text-black font-semibold w-16 h-10 ml-1"
                  @click="handleResetButton()">Reset
          </button>
        </div>

        <!-- end user interaction-->

        <!-- list of book cards-->
        <div v-show="!userTextInput.value" class="mt-5 px-8 w-full lg:3/4 2xl:w-2/3 m-auto
                    grid grid-flow-row-dense grid-cols-1 lg:grid-cols-5 gap-8">
          <BookCard v-show="typeof book.volumeInfo.averageRating !== 'undefined'"
                    v-for="book in books.items" :key="book"
                    :book="book.volumeInfo"
          />
        </div>
        <!-- end list of book cards-->
      </div>
      <!-- end center content-->
    </div>
    <!-- end container-->
  </div>
</template>

<script setup>
import BookCard from "~/components/BookCard.vue";

// conflict is good title to search for because all ratings are displayed (from 1 to 5)
let userTextInput = ref("conflict");

const booksApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

function handleResetButton() {
  userTextInput.value = "";
}

const {data: books} = await useAsyncData(() =>
    $fetch(`${booksApiUrl}${userTextInput.value}&orderBy=relevance`), {
  watch: [userTextInput]
});

</script>

<style scoped>

</style>
