import { ref, computed, onMounted } from 'vue';
// code from example codebase
export default function usePagination(filteredSearchResults) {
  const pageSize = 5;
  // reactive variable
  const currentPage = ref(1);
  const nextPage = () => { currentPage.value += 1; };
  const prevPage = () => { currentPage.value -= 1; };

  onMounted(() => console.log('Mounted: useSearch'));

  const currentStartIndex = computed(
    () => (currentPage.value - 1) * pageSize + 1,
  );

  const currentEndIndex = computed(() => {
    const end = currentStartIndex.value + pageSize;
    return end > filteredSearchResults.value.length
      ? filteredSearchResults.value.length
      : end;
  });

  const pagedResults = computed(() => {
    const startIndex = currentStartIndex.value - 1;
    const endIndex = currentEndIndex.value - 1;
    return filteredSearchResults.value.slice(startIndex, endIndex);
  });

  return {
    currentPage,
    nextPage,
    prevPage,
    pageSize,
    currentStartIndex,
    currentEndIndex,
    pagedResults,
  };
}
