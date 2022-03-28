console.log('***** Music Collection *****');

// ### Required Features

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished, trackList) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    trackList: trackList,
  };

  collection.push(newAlbum);
  // .push newAlbum into collection array
} // end of addToCollection
// DONE

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

addToCollection('The Low End Theory', 'A Tribe Called Quest', 1991, [
  { trackNumber: '1.', trackName: 'Excursions', duration: '3:54' },
  { trackNumber: '2.', trackName: "Buggin' Out", duration: '3:37' },
  { trackNumber: '3.', trackName: 'Rap Promoter', duration: '2:13' },
  { trackNumber: '4.', trackName: 'Butter', duration: '3:38' },
  { trackNumber: '5.', trackName: 'Verses From the Abstract', duration: '3:58' },
  { trackNumber: '6.', trackName: 'Show Business', duration: '3:53' },
  { trackNumber: '7.', trackName: 'Vibes and Stuff', duration: '4:17' },
  { trackNumber: '8.', trackName: 'The Infamous Date Rape', duration: '2:53' },
  { trackNumber: '9.', trackName: 'Check The Rhime', duration: '3:36' },
  { trackNumber: '10.', trackName: 'Everything Is Fair', duration: '2:58' },
  { trackNumber: '11.', trackName: "Jazz (We've Got)", duration: '4:10' },
  { trackNumber: '12.', trackName: 'Skypager', duration: '2:12' },
  { trackNumber: '13.', trackName: 'What?', duration: '2:28' },
  { trackNumber: '14.', trackName: 'Scenario', duration: '4:10' },
]);
addToCollection('Van Halen II', 'Van Halen', 1979, [
  { trackNumber: '1.', trackName: "You're No Good", duration: '3:15' },
  { trackNumber: '2.', trackName: 'Dance the Night Away', duration: '3:08' },
  { trackNumber: '3.', trackName: 'Somebody Get Me a Doctor', duration: '2:53' },
  { trackNumber: '4.', trackName: 'Bottoms Up!', duration: '3:05' },
  { trackNumber: '5.', trackName: 'Outta Love Again', duration: '2:52' },
  { trackNumber: '6.', trackName: 'Light up the Sky', duration: '3:11' },
  { trackNumber: '7.', trackName: 'Spanish Fly', duration: '1:01' },
  { trackNumber: '8.', trackName: 'D.O.A.', duration: '4:08' },
  { trackNumber: '9.', trackName: 'Women in Love...', duration: '4:07' },
  { trackNumber: '10.', trackName: 'Beautiful Girls', duration: '3:56' },
]);
addToCollection('The Band', 'The Band', 1969, [
  { trackNumber: '1.', trackName: 'Across The Great Divide', duration: '2:53' },
  { trackNumber: '2.', trackName: 'Rag Mama Rag', duration: '3:02' },
  { trackNumber: '3.', trackName: 'The Night They Drove Old Dixie Down', duration: '3:31' },
  { trackNumber: '4.', trackName: 'When You Awake', duration: '3:13' },
  { trackNumber: '5.', trackName: 'Up On Cripple Creek', duration: '4:30' },
  { trackNumber: '6.', trackName: 'Whispering Pines', duration: '3:57' },
  { trackNumber: '7.', trackName: 'Jemima Surrender', duration: '3:30' },
  { trackNumber: '8.', trackName: "Rockin' Chair", duration: '3:41' },
  { trackNumber: '9.', trackName: 'Look Out Cleveland', duration: '3:07' },
  { trackNumber: '10.', trackName: 'Jawbone', duration: '4:19' },
  { trackNumber: '11.', trackName: 'The Unfaithful Servant', duration: '4:15' },
  { trackNumber: '12.', trackName: 'King Harvest (Has Surely Come)', duration: '3:37' },
]);
addToCollection('Random Access Memories', 'Daft Punk', 2013, [
  { trackNumber: '1.', trackName: 'Give Life Back to Music', duration: '4:35' },
  { trackNumber: '2.', trackName: 'The Game of Love', duration: '5:22' },
  { trackNumber: '3.', trackName: 'Giorgio by Moroder', duration: '9:04' },
  { trackNumber: '4.', trackName: 'Within', duration: '3:48' },
  { trackNumber: '5.', trackName: 'Instant Crush (feat. Julian Casablancas)', duration: '5:37' },
  { trackNumber: '6.', trackName: 'Lose Yourself to Dance (feat. Pharrell Williams)', duration: '5:53' },
  { trackNumber: '7.', trackName: 'Touch (feat. Paul Williams)', duration: '8:18' },
  { trackNumber: '8.', trackName: 'Get Lucky (feat. Pharrell Williams & Nile Rodgers)', duration: '6:09' },
  { trackNumber: '9.', trackName: 'Beyond', duration: '4:50' },
  { trackNumber: '10.', trackName: 'Motherboard', duration: '5:41' },
  { trackNumber: '11.', trackName: 'Fragments of Time (feat. Todd Edwards)', duration: '4:39' },
  { trackNumber: '12.', trackName: "Doin' it Right (feat. Panda Bear)", duration: '4:11' },
  { trackNumber: '13.', trackName: 'Contact', duration: '6:23' },
]);
addToCollection('The Mollusk', 'Ween', 1997, [
  { trackNumber: '1.', trackName: "I'm Dancing in the Show Tonight", duration: '1:55' },
  { trackNumber: '2.', trackName: 'The Mollusk', duration: '2:36' },
  { trackNumber: '3.', trackName: 'Polka Dot Tail', duration: '3:19' },
  { trackNumber: '4.', trackName: "I'll Be your Jonny on the Spot", duration: '2:00' },
  { trackNumber: '5.', trackName: 'Mutilated Lips', duration: '3:48' },
  { trackNumber: '6.', trackName: 'The Blarney Stone', duration: '3:13' },
  { trackNumber: '7.', trackName: 'Its Gonna Be (Alright)', duration: '3:17' },
  { trackNumber: '8.', trackName: 'The Golden Eel', duration: '4:03' },
  { trackNumber: '9.', trackName: 'Cold Blows the Wind', duration: '4:27' },
  { trackNumber: '10.', trackName: 'Pink Eye - On My Leg', duration: '3:12' },
  { trackNumber: '11.', trackName: 'Waving My Dick in the Wind', duration: '2:11' },
  { trackNumber: '12.', trackName: 'Buckingham Green', duration: '3:18' },
  { trackNumber: '13.', trackName: 'Ocean Man', duration: '2:06' },
  { trackNumber: '14.', trackName: 'She Wanted to Leave', duration: '4:25' },
]);
addToCollection('Harvest', 'Neil Young', 1972, [
  { trackNumber: '1.', trackName: 'Out on the Weekend', duration: '4:35' },
  { trackNumber: '2.', trackName: 'Harvest', duration: '3:03' },
  { trackNumber: '3.', trackName: 'A Man Needs a Maid', duration: '4:00' },
  { trackNumber: '4.', trackName: 'Heart of Gold', duration: '3:05' },
  { trackNumber: '5.', trackName: 'Are You Ready for the Country?', duration: '3:21' },
  { trackNumber: '6.', trackName: 'Old Man', duration: '3:22' },
  { trackNumber: '7.', trackName: "There's a World", duration: '3:00' },
  { trackNumber: '8.', trackName: 'Alabama', duration: '4:02' },
  { trackNumber: '9.', trackName: 'The Needle and the Damage Done', duration: '2:00' },
  { trackNumber: '10.', trackName: 'Words (Between the Lines of Age)', duration: '6:42' },
]);
addToCollection("People's Instinctive Travels and the Paths of Rhythm", 'A Tribe Called Quest', 1990, [
  { trackNumber: '1.', trackName: 'Push It Along', duration: '7:34' },
  { trackNumber: '2.', trackName: 'Luck of Lucien', duration: '4:42' },
  { trackNumber: '3.', trackName: 'After Hours', duration: '4:38' },
  { trackNumber: '4.', trackName: 'Footprints', duration: '4:00' },
  { trackNumber: '5.', trackName: 'I Left My Wallet in El Segundo', duration: '4:06' },
  { trackNumber: '6.', trackName: 'Pubic Enemy', duration: '3:45' },
  { trackNumber: '7.', trackName: 'Bonita Applebum', duration: '3:49' },
  { trackNumber: '8.', trackName: 'Can I Kick It?', duration: '4:11' },
  { trackNumber: '9.', trackName: 'Youthful Expression', duration: '4:52' },
  { trackNumber: '10.', trackName: 'Rhythm (Devoted to the Art of Moving Butts)', duration: '4:02' },
  { trackNumber: '11.', trackName: 'Mr. Muhammad', duration: '3:33' },
  { trackNumber: '12.', trackName: "Ham 'N' Eggs", duration: '5:27' },
  { trackNumber: '13.', trackName: 'Go Ahead In the Rain', duration: '3:54' },
  { trackNumber: '14.', trackName: 'Description of a Fool', duration: '5:41' },
]); // I'm adding this second A Tribe Called Quest album to test if 'A Tribe Called Quest' will show up twice within the findByArtist function.

console.log('these albums are in the collection:', collection); // DONE

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
  console.log('number of objects in array:', array.length);
  for (let i = 0; i < array.length; i++) {
    //     TITLE by ARTIST, published in YEAR:
    //     1. NAME: DURATION
    //     2. NAME: DURATION
    //     3. NAME: DURATION
    console.log(
      array[i].title.toUpperCase(),
      'by',
      array[i].artist.toUpperCase(),
      ', published in',
      array[i].yearPublished,
      ':'
    );
    for (let track of array[i].trackList) {
      console.log(track.trackNumber, track.trackName, ':', track.duration);
    }
  }
} // DONE

// - Test the `showCollection` function.

showCollection(collection); // DONE

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

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

console.log('test: this should log an array with one Ween album within', findByArtist('Ween', collection));
console.log(
  'test: this should log two arrays with each A Tribe Called Quest album within',
  findByArtist('A Tribe Called Quest', collection)
);
console.log('test: this should log an empty array', findByArtist('Grateful Dead', collection));

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

// Search function by artist and year ONLY
function search(searchedItem) {
  let searchArray = [];

  if (searchedItem === null || searchedItem === undefined) {
    searchArray = collection;
    return searchArray;
    //console.log('nothing entered');
  } // end if nothing entered

  for (let record of collection) {
    if (searchedItem.artist === record.artist && searchedItem.year === record.yearPublished) {
      searchArray.push(record);
      //console.log('found the match');
    } // end if found
    else if (searchedItem.artist !== record.artist || searchedItem.year !== record.yearPublished) {
      //console.log('did not find match');
      searchArray;
    } // end if not found
    for (let track of record.trackList) {
      if (searchedItem.trackName === track.trackName || searchedItem.duration === track.duration) {
        searchArray.push(record, track);
      }
    } // end of check
  }

  return searchArray;
} // end search() function

// TESTS FOR search() FUNCTION

// TESTING EMPTY PARAMETERS
console.log('this should return the entire collection:', search());

// TESTING ARTIST AND YEARPUBLISHED PARAMETERS

console.log("this should return Neil Young's Harvest from 1972:", search({ artist: 'Neil Young', year: 1972 }));

console.log(
  "this should return A Tribe Called Quest's The Low End Theory from 1991:",
  search({ artist: 'A Tribe Called Quest', year: 1991 })
);

console.log(
  'this should return an empty array because both the artist and the year are not within the collection:',
  search({ artist: 'Boston', year: 1976 })
);

// TESTING PARAMETERS THAT ARE NOT WITHIN THE COLLECTION

console.log(
  'this should return an empty array because the year is not found within the collection:',
  search({ year: 1492 })
);

console.log(
  'this should return an empty array because the artist is not found within the collection:',
  search({ artist: 'Steely Dan' })
);

// TESTING INDIVIDUAL TRACKS WITHIN THE COLLECTION

console.log(
  'this should return the track "Old Man" with its artist, album, yearPublished, and duration within the collection (there will be 2 separate objects):',
  search({ trackName: 'Old Man' })
);

// DONE

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

// > Make sure to test all your code!
