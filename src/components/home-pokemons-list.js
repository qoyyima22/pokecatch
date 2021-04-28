/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import HomeCard from './home-card'
import Loading from './base-loading'

const handleScroll = ({ currentTarget }, onLoadMore) => {
  if (
    currentTarget.scrollTop + currentTarget.clientHeight >=
    currentTarget.scrollHeight
  ) {
    onLoadMore();
  }
};

const PokemonList = ({ pokemons, onLoadMore, loading }) => {
 return (
      <div css={css`
      padding-bottom: 80px;
      height: 600px;
      overflow-y: auto;
      `} 
      className="list-group pokemons-list"
      onScroll={e => handleScroll(e, onLoadMore)}>
        {pokemons?.map(({ image, name }, i) => (
            <HomeCard image={image} name={name} i={i} key={i} />
        ))}
        {loading && <Loading />}
      </div>
  );
}

export default PokemonList;