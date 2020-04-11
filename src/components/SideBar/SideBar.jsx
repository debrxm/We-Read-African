import React from 'react';

//Components
import Search from '../Search/Search';
import PodcastPlay from '../PodcastPlay/PodcastPlay';
import CustomForm from '../newsletter/custom-form';
import SidebarLatestPosts from '../sidebar-latest-posts/sidebar-latest-posts';
import CurrentRead from '../current-read/current-read';

const SideBar = () => {
  return (
    <div>
      <Search />
      <PodcastPlay />
      <CustomForm sidebar />
      <SidebarLatestPosts />
      <CurrentRead />
    </div>
  );
};

export default SideBar;
