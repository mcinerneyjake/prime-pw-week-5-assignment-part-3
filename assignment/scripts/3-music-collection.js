console.log('***** Music Collection *****');

// ### Required Features

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  collection.push(newAlbum);
  // .push newObject into collection array
} // end of addToCollection
// DONE

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

addToCollection('The Low End Theory', 'A Tribe Called Quest', 1991);
addToCollection('Van Halen II', 'Van Halen', 1979);
addToCollection('The Band', 'The Band', 1969);
addToCollection('Random Access Memories', 'Daft Punk', 2013);
addToCollection('The Mollusk', 'Ween', 1997);
addToCollection('Harvest', 'Neil Young', 1972);

console.log('these albums are in the collection:', collection); // DONE

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
  console.log('number of objects in array:', array.length);
  for (let i = 0; i < array.length; i++) {
    // `TITLE by ARTIST, published in YEAR`
    console.log(
      array[i].title,
      'by',
      array[i].artist,
      'published in',
      array[i].yearPublished
    );
  }
} // DONE

// - Test the `showCollection` function.

showCollection(collection); // DONE

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// ORIGINAL
function findByArtist(artist, array) {
  let artistArray = [];
  for (let i = 0; i < array.length; i++) {
    if (artist === array[i].artist) {
      artistArray.push(array[i]);
    }
  }
  return artistArray;
} // DONE

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

addToCollection(
  "People's Instinctive Travels and the Paths of Rhythm",
  'A Tribe Called Quest',
  1990
); // I'm adding this second A Tribe Called Quest album to test if 'A Tribe Called Quest' will show up twice within the findByArtist function.

console.log(
  'test: this should log an array with one Ween album within',
  findByArtist('Ween', collection)
);
console.log(
  'test: this should log two arrays with each A Tribe Called Quest album within',
  findByArtist('A Tribe Called Quest', collection)
);
console.log(
  'test: this should log an empty array',
  findByArtist('Grateful Dead', collection)
);

// > When testing your functions, write all tests in the JavaScript file!

// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search(searchedItem) {
  let searchArray = [];

  if (searchedItem === null || searchedItem === undefined) {
    searchArray = collection;
    return searchArray;
    //console.log('nothing entered');
  } // end if nothing entered

  for (let record of collection) {
    if (
      searchedItem.artist === record.artist &&
      searchedItem.year === record.yearPublished
    ) {
      searchArray.push(record);
      //console.log('found the match');
    } // end if found
    else if (
      searchedItem.artist !== record.artist ||
      searchedItem.year !== record.yearPublished
    ) {
      //console.log('did not find match');
      searchArray;
    } // end if not found
  } // end of check
  return searchArray;
} // end search() function

// TESTS FOR search() FUNCTION
console.log(
  "this should return Neil Young's Harvest from 1972:",
  search({ artist: 'Neil Young', year: 1972 })
);

console.log(
  "this should return A Tribe Called Quest's The Low End Theory from 1991:",
  search({ artist: 'A Tribe Called Quest', year: 1991 })
);

console.log(
  'this should return an empty array because both the artist and the year are not within the collection:',
  search({ artist: 'Boston', year: 1976 })
);

console.log(
  'this should return an empty array because only the year is included within the object parameter:',
  search({ year: 1979 })
);

console.log(
  'this should return an empty array because only the artist is included within the object parameter:',
  search({ artist: 'Van Halen' })
);

console.log('this should return the entire collection:', search()); // DONE

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

let tracks = [];

// > Make sure to test all your code!
