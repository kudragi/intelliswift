let data
import('./moviesPlay.js')
    .then(res => {
        console.log('data imported into data constant');
        data = res;
        run();
    });

function run() {
    const movies = data.movies;
    console.log('Number of movies: ' + movies.length);

    const lancount = new Map();

    for (let i = 0; i < movies.length; i++) {
        const language = movies[i].originalLanguage;

        if (lancount.has(language)) {
            lancount.set(language, lancount.get(language) + 1);
        } else {
            lancount.set(language, 1);
        }
    }
    lancount.forEach((count, language) => {
        console.log(`${language}: ${count}`);
    });
}
