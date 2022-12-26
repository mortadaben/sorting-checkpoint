function sorting(arr) {
  //variable for a deck of cards
  var deckArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //picking a number randomly from the deck
  var randomIndex = deckArray[Math.floor(Math.random() * deckArray.length)];
  //pushing the picked card on the hand of the player
  arr.push(randomIndex);
  //looping the elements in the hand of the player
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      //checking if the element +1 is bigger if yes, give the currenct element value to the next one and j+1 to J
      if (arr[j] > arr[j + 1]) {
        let order = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = order;
      }
    }
  }
  return arr;
}
console.log(sorting([2, 3, 9, 11]));
