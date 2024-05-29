const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (obj of Object.values(library.playlists)){
       
       console.log(`${obj.id} : ${obj.name} - ${obj.tracks.length} tracks`);
  }
}
printPlaylists();
console.log("prints a list of all tracks, using the following format:\n");
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
for(obj of Object.values(library.tracks)){
       console.log(`${obj.id}: ${obj.name} by ${obj.artist} (${obj.album})`)
}
}
//printTracks();


console.log("prints a list of tracks for a given playlist, using the following format:\n");
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function(playlistId) {
for (obj of Object.values(library.playlists)){
       if(obj.id===playlistId){
          console.log(`${obj.id}: ${obj.name} -${obj.tracks.length} tracks`);
         
          const tr=obj.tracks
          
          for (track of Object.values(library.tracks)){
              if(tr.includes(track.id)){
                     console.log(`${track.id} :${track.name} by ${track.artist} (${track.album})` );
 
              }
          }
              //console.log(`${tr} :${tr.name} by ${tr.artist} (${tr.album})` );

          }

       }
}

printPlaylist("p02");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
      for (obj of Object.values(library.playlists)){
       if(obj.id===playlistId){
              for(tr of Object.values(library.tracks)){
                     if(tr.id===trackId){
                     obj.tracks.push(tr.id);
                     console.log(obj.tracks)
                     }
              }
       }
      }
}

addTrackToPlaylist("t01","p02");


console.log(library.playlists);


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
const newid=generateUid();
const newtrack={
       id:newid,
       name:name,
       artist:artist,
       album:album
}
library.tracks[newid]=newtrack;
}
addTrack("Kesariya","Arijit","Brahmastra");
console.log(library.tracks);




// adds a playlist to the library
const addPlaylist = function(name) {
   const newPlaylistId=generateUid();
       const newlist={
              id:newPlaylistId,
              name:name,
              tracks:[]
       }
  library.playlists[newPlaylistId]=newlist;
}
addPlaylist("Bollywood");
console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  const str=query.toLowerCase();
  for(const track of Object.values(library.tracks)){
       if(track.id.toLowerCase().search(str)!==-1||track.name.toLowerCase().search(str)!==-1||track.artist.toLowerCase().search(str)!==-1
       ||track.album.toLowerCase().search(str!==-1)){
              console.log(`Track ID: ${track.id}, Name: ${track.name}, Artist: ${track.artist}, Album: ${track.album}`);
    }
       }

  }

printSearchResults("three");