import React, { Component } from 'react';

//Components
import Search from '../Search/Search';
import PodcastPlay from '../PodcastPlay/PodcastPlay';

const SideBar = () => { 
  return ( 
    <div>
      <Search />
      <PodcastPlay />
    </div>
  )
}

export default SideBar;