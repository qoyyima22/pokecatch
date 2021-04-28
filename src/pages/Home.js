import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { gql, useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import PokemonList from '../components/PokemonsList'
// import { ApolloConsumer } from '@apollo/client/react'

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
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
  const { loading, error, data, fetchMore, ...rest } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  return (
    <Layout>
      {
        loading && <Loading />
      }
      {
        error && <p>Error: {error.message}</p>
      }
        <PokemonList 
          pokemons={data?.pokemons?.results || []}
          onLoadMore={() => {
            fetchMore({
              variables: {
                offset: data?.pokemons?.results?.length || 1
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  pokemons: {
                    ...prev.pokemons,
                    results: [...prev.pokemons.results, ...fetchMoreResult.pokemons.results]
                  }
                });
              }
            })
          }}
        />
      {/* {
        data?.pokemons?.results?.map(({ image, name }, i) => (
         <div key={`${i}-${name}`}>
           <p>
             {name}
           </p>
           <img src={image} alt={`${name}-pokemon-img`} />
         </div>
       ))
      } */}
    </Layout>
  )
};


export default Home;