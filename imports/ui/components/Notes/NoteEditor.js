import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "./styles.css";

import StyleButtons from "./EditorButton";

import {
  BlockStyleControls,
  InlineStyleControls,
  getBlockStyle,
  styleMap
} from "./EditorButton";

function resizeEditor() {
  editorRoot = document.querySelector(".RichEditor-root");
  modal = document.querySelector(".modal");
  editorContent = document.querySelector(".RichEditor-editor");
  modalHeight = modal.clientHeight;
  rootHeight = modalHeight - 105;
  editorRoot.style.height = `${rootHeight}px`;
  editorContent.style.height = `${rootHeight - 60}px`;
  console.log(
    modal,
    modalHeight,
    editorRoot,
    editorRoot.style.height,
    editorContent.style.height
  );
}

class NotesEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onTab = this.onTab.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }
  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  componentDidMount() {
    resizeEditor();
  }

  render() {
    const { editorState } = this.state;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();

    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== "unstyled"
      ) {
        className += " RichEditor-hidePlaceholder";
      }
    }

    window.addEventListener("resize", () => {
      resizeEditor();
    });

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Write to your heart's content..."
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

export default NotesEditor;
