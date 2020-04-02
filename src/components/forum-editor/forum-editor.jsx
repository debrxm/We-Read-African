import React from 'react';
import SunEditor from 'suneditor-react';
import plugins from 'suneditor/src/plugins';
import image from 'suneditor/src/plugins/dialog/link';
import 'suneditor/dist/css/suneditor.min.css';

class ForumEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(content) {
    console.log(content); //Get Content Inside Editor
  }
  render() {
    return (
      <div>
        <SunEditor
          onChange={this.handleChange}
          enableToolbar={true}
          showToolbar={true}
          image={image}
          show={true}
          enable={true}
          insertImage
          setOptions={{
            height: 200,
            plugins: plugins,
            buttonList: [
              ['undo', 'redo'],
              ['font', 'fontSize', 'formatBlock'],
              ['paragraphStyle', 'blockquote'],
              [
                'bold',
                'underline',
                'italic',
                'strike',
                'subscript',
                'superscript'
              ],
              ['fontColor', 'hiliteColor', 'textStyle'],
              ['removeFormat'],
              '/',
              ['outdent', 'indent'],
              ['align', 'horizontalRule', 'list', 'lineHeight'],
              ['table', 'link', 'image', 'video'],
              ['fullScreen', 'showBlocks', 'codeView'],
              ['preview', 'print'],
              ['save', 'template']
            ]
          }}
        />
      </div>
    );
  }
}

export default ForumEditor;
