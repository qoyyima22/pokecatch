import React from 'react'
import Layout from '../layout/layout'
import { gql, useQuery } from '@apollo/client'
import Pokemon from '../components/detail-pokemon'
import { useLocation } from 'react-router-dom'

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`

const Detail = () => {
  const location = useLocation()
  const splitted = location.pathname.split('/')
  const gqlVariables = {
    name: splitted[splitted.length - 1],
  }
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMON, {
    variables: gqlVariables,
    notifyOnNetworkStatusChange: true,
  })
  return (
    <Layout>
      {error && <p>Error: {error.message}</p>}
      <Pokemon data={data?.pokemon} loading={loading} />
    </Layout>
  )
}

export default Detail
