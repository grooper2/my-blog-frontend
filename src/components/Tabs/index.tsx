import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";

type TabsProps = {
  htmlCode: string;
  setHtml: (html: string) => void;
  cssCode: string;
  setCss: (css: string) => void;
  jsCode: string;
  setJs: (js: string) => void;
};

const Tabs: React.FunctionComponent<TabsProps> = ({
  htmlCode,
  setHtml,
  cssCode,
  setCss,
  jsCode,
  setJs,
}) => {
  
  const [iframe, setIfranme] = useState(`
  <html>
    <body>${htmlCode}</body>
    <style>${cssCode}</style>
    <script>${jsCode}</script>
  </html>`);

  useEffect(() => {
    const srcDoc = `
    <html>
      <body>${htmlCode}</body>
      <style>${cssCode}</style>
      <script>${jsCode}</script>
    </html>`;
    setIfranme(srcDoc);
  }, [htmlCode, cssCode, jsCode]);

  const onChangeHtml = React.useCallback((value: string, viewUpdate: any) => {
    setHtml(value);
  }, []);

  const onChangeCss = React.useCallback((value: string, viewUpdate: any) => {
    setCss(value);
  }, []);

  const onChangeJs = React.useCallback((value: string, viewUpdate: any) => {
    setJs(value);
  }, []);

  return (
    <div className="Ide">
      <div className="tabset">
        <input
          type="radio"
          name="tabset"
          id="tab1"
          aria-controls="HTML"
          defaultChecked={true}
        />
        <label htmlFor="tab1">HTML</label>

        <input type="radio" name="tabset" id="tab2" aria-controls="CSS" />
        <label htmlFor="tab2">CSS</label>

        <input type="radio" name="tabset" id="tab3" aria-controls="JS" />
        <label htmlFor="tab3">JS</label>
        <div className="tab-panels">
          <section className="tab-panel">
            <CodeMirror
              onChange={onChangeHtml}
              value={htmlCode}
              height="600px"
              width="100%"
              theme={githubDark}
              extensions={[html()]}
            />
          </section>
          <section className="tab-panel">
            <CodeMirror
              onChange={onChangeCss}
              value={cssCode}
              height="600px"
              width="100%"
              theme={githubDark}
              extensions={[css()]}
            />
          </section>
          <section className="tab-panel">
            <CodeMirror
              onChange={onChangeJs}
              value={jsCode}
              height="600px"
              width="100%"
              theme={githubDark}
              extensions={[javascript({ jsx: false })]}
            />
          </section>
        </div>
      </div>
      <div className="pane">
        <iframe
          srcDoc={iframe}
          title="output"
          frameBorder="0"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          style={{ background: "#fff" }}
        />
      </div>
      <br />
    </div>
  );
};

export default Tabs;
