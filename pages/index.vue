<template>
  <div class="h-screen bg-gray-800 ">
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
                 placeholder="Search Title..."
                 class="bg-gray-50 h-10 px-3 lg:w-72"
          />
          <button class="bg-yellow-400 text-black font-semibold w-16 h-10 ml-1"
                  @click="handleResetButton()">Reset
          </button>
        </div>

        <!-- end user interaction-->


        <!-- list of book cards-->
        <div class="mt-5 px-8 w-full xl:w-4/5 2xl:w-2/3  m-auto
                    grid grid-cols-1 lg:grid-cols-5 gap-4">
          <!-- display the non-rated book cards
              v-show="typeof book.volumeInfo.averageRating !== 'undefined'"
          -->
          <BookCard v-show="typeof book.volumeInfo.averageRating !== 'undefined'"
                    v-if="userTextInput"
                    v-for="book in books.items" :key="book"
                    :book="book.volumeInfo"
                    :id="book.id"
                    class="h-full"
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

const booksApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

const apiKey = "AIzaSyAtHsLjOsjS_K_IOGWVM0fWFlpDYGPaIeA";

let userTextInput = ref("conflict");
function handleResetButton() {
  userTextInput.value = "";
}

const {data: books} = await useAsyncData(() =>
    $fetch(`${booksApiUrl}${userTextInput.value}&maxResults=15&key=${apiKey}`), {
  watch: [userTextInput]
});

</script>

<style scoped>

</style>
