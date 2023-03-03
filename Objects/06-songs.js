function songs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let songCounter = arr.shift();
    let typeList = arr.pop();
    let songsToPlay = [];

    for (let i = 0; i < songCounter; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);

        if (typeList === 'all') {
            console.log(name);
            continue;
        } else if (typeList === type) {
            songsToPlay.push(name);
        }
    }
    console.log(songsToPlay.join(" \n"));
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
])
console.log(`-------------`);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)
console.log(`-------------`);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)