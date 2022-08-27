import { fetchQuery, graphql } from "react-relay";
import { initEnvironment } from "relay/relayEnvironment";
import { pages_index_AllFilms_Query } from "pages/__generated__/pages_index_AllFilms_Query.graphql";
import { useQuery } from "relay-hooks";
import Film from "common/components/Film";

const Home = () => {
  const { data } = useQuery<pages_index_AllFilms_Query>(query, {});
  return (
    <ul>
      {data?.allFilms?.films?.map((film, index) => (
        <Film key={index} film={film} />
      ))}
    </ul>
  );
};

const query = graphql`
  query pages_index_AllFilms_Query {
    allFilms {
      films {
        ...FilmFragment_filmFragment
      }
    }
  }
`;

export const getStaticProps = async () => {
  const environment = initEnvironment();
  await fetchQuery<pages_index_AllFilms_Query>(
    environment,
    query,
    {}
  ).toPromise();
  const initialRecords = environment.getStore().getSource().toJSON();
  return {
    props: {
      initialRecords,
    },
  };
};

export default Home;
