<template>
  <div v-if="book" class="p-4 bg-gray-50 rounded-lg select-none"
       :class="columnSizeByRatingClass(Number(book.averageRating))">
    <!-- inside card content-->
    <div class="flex flex-col justify-between h-full">
      <!-- top content-->
      <div class="">
        <!-- image -->
        <img :src="book.imageLinks.thumbnail" :alt="`${book.title} Image`"
             class="m-auto w-full h-fit">
        <!-- end image-->

        <!-- book title-->
        <h4 class="font-bold hover:underline pt-3">
          <a href="#">{{ book.title }}</a>
        </h4>
        <!-- end book title-->
      </div>
      <!-- top content-->

      <!-- description-->
      <div class="py-3">
        <p class="text-sm text-justify">{{ book.description }}</p>
      </div>
      <!--  end description-->

      <!-- bottom content-->
      <div class="flex justify-between place-items-center">
        <!-- rating-->
        <p class="font-bold text-sm">
          {{ book.averageRating }}{{ book.averageRating ? '&#9733;' : '' }}
        </p>
        <!-- end rating-->

        <!-- link to details page-->
        <a href="#" class="text-white px-3 py-1 text-sm fond-semibold bg-red-700 hover:bg-red-600 rounded-r-lg">
          Learn More
        </a>
        <!-- end link to details page-->
      </div>
      <!-- end bottom-->
    </div>
    <!-- end inside card content-->
  </div>
</template>

<script setup>
defineProps(['book'])

function columnSizeByRatingClass(rating) {
  if (rating >= 4.0) return "lg:col-span-2 lg:row-span-2";
  else if (rating >= 2.0 && rating < 4.0) return "lg:col-span-2";
  else if (rating < 2.0) return "lg:col-span-1 lg:row-span-1";
  else return "";
}
</script>

<style scoped>

</style>