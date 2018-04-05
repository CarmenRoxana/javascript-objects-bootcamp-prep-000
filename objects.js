var playlist = {'Tom Jones': 'Lion','Prince': 'Purple Rain', 'David Bowie': 'Blood of Eden'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artist = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  
  delete playlist.artistName;
  playlist;
}