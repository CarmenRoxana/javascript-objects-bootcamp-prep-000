var playlist = {'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist,{artistName: songTitle})

}

function removeFromPlaylist(playlist, artistName) {
  
  delete playlist.artistName;
  return playlist;
}