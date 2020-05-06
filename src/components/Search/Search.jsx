import React, { Component } from 'react';
import './Search.scss';

// Assets
import { Icon } from '@iconify/react';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';
import FormInput from '../../components/form-input/form-input';

export default class SearchComponent extends Component {
  constructor() {
    super();
    this.state = {
      userSearchWord: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      userSearchWord: e.target.value,
    });
  };
  render() {
    return (
      <div id="searchSection">
        <h3>Looking for something?</h3>
        <form>
          <FormInput
            type="text"
            name="userSearchWord"
            value={this.state.userSearchWord}
            label="Search..."
            onChange={this.handleChange}
          />
          <button>
            <Icon icon={searchOutlined} />
          </button>
        </form>
      </div>
    );
  }
}
