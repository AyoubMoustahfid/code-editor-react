import React from "react";
import Editor from "./Editor";

const Left = ({ html, css, js, setHtml, setCss, setJs }) => {
  return (
    <div className="col-md-4 px-0 bg-dark position-fixed left-0 top-0 h-100 text-white">
      <Editor title={"html"} lang={html} setLang={setHtml} iconName="bi-filetype-html"/>
      <Editor title={"css"} lang={css} setLang={setCss} iconName="bi-filetype-css" />
      <Editor title={"javascript"} lang={js} setLang={setJs} iconName="bi-filetype-js" />
    </div>
  );
};

export default Left;
