/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import HomeCard from './home-card'
import Loading from './base-loading'

const handleScroll = ({ currentTarget }, onLoadMore, loading) => {
  if (
    (currentTarget.scrollTop + currentTarget.clientHeight + 40 >=
    currentTarget.scrollHeight) && !loading
  ) {
    onLoadMore();
  }
};

const PokemonList = ({ pokemons, onLoadMore, loading }) => {
 return (
      <div css={css`
      height: 80vh;
      overflow-y: auto;
      `} 
      onScroll={e => handleScroll(e, onLoadMore, loading)}>
        {pokemons?.map(({ image, name }, i) => (
            <HomeCard image={image} name={name} i={i} key={i} />
        ))}
        {loading && <Loading />}
      </div>
  );
}

export default PokemonList;