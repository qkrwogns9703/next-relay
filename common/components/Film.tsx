import Link from "next/link";
import { graphql, useFragment } from "relay-hooks";
import { FilmFragment_filmFragment$key } from "./__generated__/FilmFragment_filmFragment.graphql";

const fragment = graphql`
  fragment FilmFragment_filmFragment on Film {
    id
    title
    director
    releaseDate
  }
`;

function Film({ film }: { film: FilmFragment_filmFragment$key | null }) {
  const data = useFragment(fragment, film);
  return (
    <Link href={`/detail/${data?.id}`}>
      <li key={data?.title}>
        <div>
          <p>{data?.title}</p>
          <p>{data?.director}</p>
          <p>{data?.releaseDate}</p>
        </div>
      </li>
    </Link>
  );
}

export default Film;
