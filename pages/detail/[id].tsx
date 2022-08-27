import { useRouter } from "next/router";
import { initEnvironment } from "relay/relayEnvironment";
import { fetchQuery, graphql } from "react-relay";
import { useQuery } from "relay-hooks";
import { GetStaticPaths, GetStaticProps } from "next";
import type { Id_FilmDetail_Query } from "./__generated__/Id_FilmDetail_Query.graphql";
import Film from "common/components/Film";
import { STATIC_IDS } from "common/constants";

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<Id_FilmDetail_Query>(query, { id: id as string });
  return (
    <div>
      {data?.film && <Film film={data?.film} />}
      <span>
        {data?.film?.producers?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
    </div>
  );
}

const query = graphql`
  query Id_FilmDetail_Query($id: ID!) {
    film(id: $id) {
      producers
      ...FilmFragment_filmFragment
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = STATIC_IDS;
  return {
    fallback: true,
    paths: ids.map((item) => ({ params: { id: item } })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const environment = initEnvironment();
  if (params?.id) {
    await fetchQuery<Id_FilmDetail_Query>(environment, query, {
      id: params.id as string,
    }).toPromise();
  }

  const initialRecords = environment.getStore().getSource().toJSON();
  return {
    props: {
      initialRecords,
    },
  };
};

export default Detail;
