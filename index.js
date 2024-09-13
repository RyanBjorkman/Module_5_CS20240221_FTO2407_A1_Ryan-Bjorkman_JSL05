// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Ophelia", artist: "The Lumineers", genre: "Indie" },
    { title: "Bitter sweet symphony", artist: "The Verve", genre: "Indie" },
    { title: "How you remind me", artist: "Nickelback", genre: "Rock" },

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Indie",
    "Groot": "Rock"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);

        displayPlaylist(guardian, playlist);
    });

}

// Function to display each Guardian's playlist
function displayPlaylist(guardian, playlist) {
    // Get the #playlists div
    const playlistsDiv = document.getElementById('playlists');

    // Create a new div for each Guardian's playlist
    const guardianDiv = document.createElement('div');
    guardianDiv.className = 'playlist';

    // Create and append the Guardian's name
    const guardianName = document.createElement('h3');
    guardianName.textContent = `${guardian}'s Playlist`;
    guardianDiv.appendChild(guardianName);

    // Create and append the list of songs
    const songList = document.createElement('ul');
    playlist.forEach(song => {
        const songItem = document.createElement('li');
        songItem.textContent = `${song.title} by ${song.artist}`;
        songList.appendChild(songItem);
    });
    guardianDiv.appendChild(songList);

    // Append the Guardian's playlist to the #playlists div
    playlistsDiv.appendChild(guardianDiv);
}

// Call generatePlaylist to create and display the playlists for each Guardian
generatePlaylist(guardians, songs);



