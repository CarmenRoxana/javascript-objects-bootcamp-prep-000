var playlist = {'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artist = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  
  delete playlist.artistName;
  playlist;
}