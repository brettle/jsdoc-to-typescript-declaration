/// <reference path="../../../globals.d.ts" />

declare module goog.editor {

    /**
     * Commands that the editor can excute via execCommand or queryCommandValue.
     * @enum {string}
     */
    enum Command { UNDO, REDO, LINK, FORMAT_BLOCK, INDENT, OUTDENT, REMOVE_FORMAT, STRIKE_THROUGH, HORIZONTAL_RULE, SUBSCRIPT, SUPERSCRIPT, UNDERLINE, BOLD, ITALIC, FONT_SIZE, FONT_FACE, FONT_COLOR, EMOTICON, EQUATION, BACKGROUND_COLOR, ORDERED_LIST, UNORDERED_LIST, TABLE, JUSTIFY_CENTER, JUSTIFY_FULL, JUSTIFY_RIGHT, JUSTIFY_LEFT, BLOCKQUOTE, DIR_LTR, DIR_RTL, IMAGE, EDIT_HTML, UPDATE_LINK_BUBBLE, DEFAULT_TAG, CLEAR_LOREM, UPDATE_LOREM, USING_LOREM, MODAL_LINK_EDITOR } 
}
