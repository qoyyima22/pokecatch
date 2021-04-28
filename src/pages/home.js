import React from "react";
import Layout from "../layout/layout";
import { gql, useQuery } from "@apollo/client";
import PokemonList from "../components/home-pokemons-list";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
  limit: 8,
  offset: 0,
};

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Layout>
      {error && <p>Error: {error.message}</p>}
      <PokemonList
        pokemons={data?.pokemons?.results || []}
        loading={loading}
        onLoadMore={() => {
          fetchMore({
            variables: {
              offset: data?.pokemons?.results?.length || 0,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                pokemons: {
                  ...prev.pokemons,
                  results: [
                    ...prev.pokemons.results,
                    ...fetchMoreResult.pokemons.results,
                  ],
                },
              });
            },
          });
        }}
      />
    </Layout>
  );
};

export default Home;
