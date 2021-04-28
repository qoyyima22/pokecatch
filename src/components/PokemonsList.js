/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react'

const handleScroll = ({ currentTarget }, onLoadMore) => {
  if (
    currentTarget.scrollTop + currentTarget.clientHeight >=
    currentTarget.scrollHeight
  ) {
    onLoadMore();
  }
};

const ChapterList = ({ pokemons, onLoadMore }) => (
  <div>
    <h2>Pokemons</h2>
    <ul css={css`
    padding-bottom: 200px;
    height: 200px;
    overflow-y: auto;
  `} className="list-group pokemons-list"
    onScroll={e => handleScroll(e, onLoadMore)}>
      {pokemons?.map(({ image, name }, i) => (
        <li key={`${i}-${name}`} className="list-group-item">
          {name}
          <img src={image} alt={`${name}-img`} />
        </li>
      ))}
    </ul>
  </div>
);

export default ChapterList;