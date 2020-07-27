import React from "react";
import { withRouter } from "react-router-dom";

//Components
import Search from "../Search/Search";
import logo from "../../assets/logo.svg";
import CustomForm from "../newsletter/custom-form";
import SidebarLatestPosts from "../sidebar-latest-posts/sidebar-latest-posts";
import CurrentRead from "../current-read/current-read";
import ReadersFavorite from "../readers-favorite/readers-favorite";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Search />
        {this.props.history.location.pathname.includes("/podcast") ? null : (
          <div className="now-playing">
            <div className="podcastPlayHeader">
              <img src={logo} alt="logo" />
            </div>
            <br />
          </div>
        )}
        <CustomForm sidebar />
        <SidebarLatestPosts />
        <CurrentRead />
        <ReadersFavorite />
      </div>
    );
  }
}

export default withRouter(SideBar);
