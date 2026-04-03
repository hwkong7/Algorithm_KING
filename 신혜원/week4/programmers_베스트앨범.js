function solution(genres, plays) {
    const genreTotal = new Map();
    const genreSongs = new Map();

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        genreTotal.set(genre, (genreTotal.get(genre) || 0) + play);

        if (!genreSongs.has(genre)) {
            genreSongs.set(genre, []);
        }
        genreSongs.get(genre).push({ index: i, play: play });
    }

    const sortedGenres = [...genreTotal.keys()].sort((a, b) => {
        return genreTotal.get(b) - genreTotal.get(a);
    });

    const answer = [];

    for (const genre of sortedGenres) {
        const songs = genreSongs.get(genre);

        songs.sort((a, b) => {
            if (b.play === a.play) {
                return a.index - b.index;
            }
            return b.play - a.play;
        });

        answer.push(songs[0].index);
        if (songs.length > 1) {
            answer.push(songs[1].index);
        }
    }

    return answer;
}