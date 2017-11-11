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

// function resizeEditor() {
//   editorRoot = document.querySelector(".RichEditor-root");
//   modal = document.querySelector(".modal");
//   editorContent = document.querySelector(".RichEditor-editor");
//   modalHeight = 1000;
//   // modalHeight = modal.clientHeight;
//   rootHeight = modalHeight - 105;
//   editorRoot.style.height = `${rootHeight}px`;
//   editorContent.style.height = `${rootHeight - 60}px`;
// }

class NotesEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { currentInput: "", editorState: EditorState.createEmpty() };
    this.focus = () => this.noteInput.focus();
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onTab = this.onTab.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.editorValue = this.props.editorValue.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      console.log(newState);
      this.onChange(newState);
      return true;
    }
    return false;
  }

  onTab(e) {
    e.preventDefault();
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

  // componentDidMount() {
  //   resizeEditor();
  //   // console.log(this.noteInput.refs.editor.innerHTML);
  //   // console.log(addNote);
  // }

  componentDidUpdate() {
    words = `${this.noteInput.refs.editor.innerText}`;
    if (words !== this.state.currentInput) {
      this.setState({
        currentInput: words
      });
    } else {
      null;
    }
    this.props.editorValue = this.editorValue(this.state.currentInput);
    // console.log(words, this.state);
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

    // window.addEventListener("resize", () => {
    //   resizeEditor();
    // });

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
            ref={ref => (this.noteInput = ref)}
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

export default NotesEditor;
