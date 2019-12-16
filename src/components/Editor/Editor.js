import React, { Component } from "react";
import { render } from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:54978/api/uploadimagev2");
    // xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
    // xhr.setRequestHeader("Content-Type", "multipart/form-data");
    const data = new FormData();
    data.append("myFile", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    // console.log(editorState);
    this.setState(
      {
        editorState
      },
      this.props.handleChangeContents(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
    );
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor">
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "embedded",
              "emoji",
              "image",
              "remove",
              "history"
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true }
            }
          }}
        />
      </div>
    );
  }
}
export default EditorContainer;
