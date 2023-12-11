let data
import('./moviesPlay.js')
    .then(res => {
        console.log('data imported into data constant');
        data = res;
        run();
    });

    function run() {
        const movies = data.movies;
        const languages = data.languages;
        console.log('Number of movies: ' + movies.length);
        const CountMap = new Map();
        const InfoMap = new Map();
        languages.forEach(language => {
            InfoMap.set(language.iso_639_1, language);
        });
    
        for (let i = 0; i < movies.length; i++) {
            const lanCode = movies[i].originalLanguage;
    

            if (CountMap.has(lanCode)) {
                CountMap.set(lanCode, CountMap.get(lanCode) + 1);
            } else {
                CountMap.set(lanCode, 1);
            }
        }
    
        CountMap.forEach((count, lanCode) => {
            const lanInfo = InfoMap.get(lanCode);
            if (lanInfo) {
                console.log(`${lanInfo.english_name} (${lanInfo.name}): ${count}`);
            } else {
                console.log(`Unknown Language (${lanCode}): ${count}`);
            }
        });
    }
    


