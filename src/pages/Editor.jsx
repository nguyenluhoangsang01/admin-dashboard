import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import React from "react";
import { EditorData } from "../data/dummy";
import HeaderFooterPage from "../layout/pages";

const Editor = () => {
  return (
    <HeaderFooterPage category="app" title="editor">
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </HeaderFooterPage>
  );
};

export default Editor;
