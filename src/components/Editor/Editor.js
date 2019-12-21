import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { BASE_URL, UPLOAD_IMAGE_EDITOR } from '../../services/contanst'
function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL + UPLOAD_IMAGE_EDITOR}`);
    // xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
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
    const contentBlock = htmlToDraft(props.contents);
    console.log(props.contents);

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState
      };
    }
  }

  onEditorStateChange = editorState => {
    // console.log(editorState);
    this.setState(
      {
        editorState
      },
      this.props.handleChangeContents(
        draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
      )
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
          defaultContentState={this.state.editorState}
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
              // alt: { present: true, mandatory: true }
            }
          }}
        />
      </div>
    );
  }
}
export default EditorContainer;
