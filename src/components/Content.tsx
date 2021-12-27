import { MovieCard } from "./MovieCard";

interface ContentInfos {
  movies: Array<any>;
  selectedGenre: {
    id: number;
    name: string;
    title: string;
  }
}

export function Content(props: ContentInfos) {
  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  );
}
