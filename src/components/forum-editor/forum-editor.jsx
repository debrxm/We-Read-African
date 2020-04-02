import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import SunEditor from 'suneditor-react';
import plugins from 'suneditor/src/plugins';
import image from 'suneditor/src/plugins/dialog/link';
import { sendNewTopicToDatabase } from '../../firebase/firebase.utils';
import { GenerateId } from '../../utils/id-generator';

import 'suneditor/dist/css/suneditor.min.css';
import './forum-editor.scss';
class ForumEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {});
  };
  handleChange(content) {
    console.log(content); //Get Content Inside Editor
    this.setState({ body: content });
  }
  handlePostTopic = () => {
    const newTopic = {
      title: this.state.title,
      body: this.state.body,
      id: GenerateId(),
      user: this.props.currentUser
    };
    sendNewTopicToDatabase(newTopic);
  };
  render() {
    return (
      <div className="bg">
        <div className="forum-editor">
          <h4>Post a Topic</h4>
          <div className="group-input">
            <label>
              Title <span className="required">required</span>
            </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              className="form-input"
              onChange={this.handleChangeInput}
            />
          </div>
          <label>
            Body <span className="required">required</span>
          </label>
          <SunEditor
            onChange={this.handleChange}
            enableToolbar={true}
            showToolbar={true}
            image={image}
            show={true}
            enable={true}
            setOptions={{
              height: 200,
              plugins: plugins,
              buttonList: [
                ['undo', 'redo'],
                ['bold', 'italic', 'strike', 'subscript', 'superscript'],
                ['align', 'list'],
                ['blockquote'],
                ['outdent', 'indent'],
                ['link', 'image'],
                ['codeView']
              ]
            }}
          />
          <div className="forum-editor-footer">
            <span
              className="cancel-btn btn"
              onClick={this.props.handleToggleEditore}
            >
              Cancel
            </span>
            <span className="post-topic-btn btn" onClick={this.handlePostTopic}>
              Post Topic
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(ForumEditor);
