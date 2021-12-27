import { Button } from "./Button";

interface SideBarProp {
  genres: Array<any>;
  selectedGenreId: number;
  handleClickButton: any;
}

export function SideBar(props: SideBarProp) {
  return (
    <div className="buttons-container">
      {props.genres.map((genre) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>
  );
}
