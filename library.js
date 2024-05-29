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
             },
             
printPlaylists:function() {
       for (obj of Object.values(this.playlists)){
                   
              console.log(`${obj.id} : ${obj.name} - ${obj.tracks.length} tracks`);
       }
            },

 printTracks : function() {
              for(obj of Object.values(this.tracks)){
              console.log(`${obj.id}: ${obj.name} by ${obj.artist} (${obj.album})`);}
       },


printPlaylist :function(playlistId) {
              for (obj of Object.values(this.playlists)){
                     if(obj.id===playlistId){
                          console.log(`${obj.id}: ${obj.name} -${obj.tracks.length} tracks`);
                              
                            const tr=obj.tracks
                               
                            for (track of Object.values(this.tracks)){
                                   if(tr.includes(track.id)){
                                          console.log(`${track.id} :${track.name} by ${track.artist} (${track.album})` );
                      
                                   }   
                            }
                     }
              }
       },              
addTrackToPlaylist :function(trackId, playlistId) {
              for (obj of Object.values(this.playlists)){
                     if(obj.id===playlistId){
                            for(tr of Object.values(this.tracks)){
                                   if(tr.id===trackId){
                                          obj.tracks.push(tr.id);
                                          console.log(obj.tracks)
                                                         }
                                                  }
                                           }
                                          }
                                    } ,
       
generateUid : function() {
                            
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                     },
                         
addTrack : function (name, artist, album) {
       const newid =this.generateUid();
       const newtrack={
              id:newid,
              name:name,
              artist:artist,
              album:album
                     }
       this.tracks[newid]=newtrack;
                            } ,
 addPlaylist :function(name) {
       const newPlaylistId=this.generateUid();
              const newlist={
                     id:newPlaylistId,
                     name:name,
                     tracks:[]
                     }
       this.playlists[newPlaylistId]=newlist;
                                },
                                
printSearchResults:function(query) {
       const str=query.toLowerCase();
       for(const track of Object.values(this.tracks)){
              if(track.id.toLowerCase().search(str)!==-1||track.name.toLowerCase().search(str)!==-1||track.artist.toLowerCase().search(str)!==-1
                     ||track.album.toLowerCase().search(str!==-1)){
                     console.log(`Track ID: ${track.id}, Name: ${track.name}, Artist: ${track.artist}, Album: ${track.album}`);
                                     }
                                        }            
}

};
console.log("\nprintPlaylists()---All playlist");
library.printPlaylists();
console.log("\nprintTracks()---All tracks");
library.printTracks();
console.log("\nprintPlaylist(id)--- playlist with a particular id");
library.printPlaylist("p01");
console.log("\naddTrackToPlaylist(trackId, playlistId) ---Adding track to the mentione playlist with an id playlistId");
library.addTrackToPlaylist("t01","p02");
console.log(library.playlists);
console.log("\n Checking generateuid()");
console.log(library.generateUid());
console.log("\n\n addTrack(name,artist,album");
library.addTrack("calm down","selens","reem");
console.log(library.tracks);
console.log("\n\n addPlaylist(name) adding new playlist with a name")
library.addPlaylist("Bollywood");
console.log(library.playlists);
console.log("\n\n printSearchresult(query) Searching for a tracklist containing a search quaery");
library.printSearchResults("three");
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////
//1.PrintPlaylist()////
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

/////2.printtracks/////
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
//////3.printPlaylist(playlistId)

//console.log("prints a list of tracks for a given playlist, using the following format:\n");
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

////4.addTracktoplaylist////
// adds an existing track to an existing playlist


////5.generate unique id/////
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)


////6.addTrack()
// adds a track to the library


////7.addPlaylist
// adds a playlist to the library


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const ////8.printSearchResults = function(query) {}
  