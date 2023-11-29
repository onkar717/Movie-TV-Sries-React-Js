const useGenres = (selectedGenres) => {
  try {
    if (!selectedGenres || selectedGenres.length === 0) return ""; // Return an empty string if selectedGenres is empty

    const genreIds = selectedGenres.map((g) => g.id);

    // Check if genreIds is not empty before using reduce
    if (genreIds.length > 0) {
      // Use reduce with an initial value to avoid "Reduce of empty array with no initial value" error
      return genreIds.reduce((acc, curr) => acc + "," + curr);
    } else {
      return "";
    }
  } catch (error) {
    console.log(error + " empty array");
    return ""; // Handle the error by returning an empty string
  }
};

export default useGenres;
