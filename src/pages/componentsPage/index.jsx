import React, { useContext, useEffect, useState } from "react";
import Tabs from "../../components/Tabs";
import { ComponentContext } from "../../context/componentProvider";
import { formatter } from "../../utils";

const ComponentsPage = () => {
  const { components } = useContext(ComponentContext);
  const { css_code, html_code, js_code } = components;
  
  const savedHtml = sessionStorage.getItem("htmlValue");
  const initialHtml = JSON.parse(savedHtml);
  const [htmlCode, setHtmlCode] = useState(html_code || initialHtml)

  const savedCss = sessionStorage.getItem("cssValue");
  const initialCss = JSON.parse(savedCss);
  const [ cssCode, setCssCode] = useState(css_code || initialCss)


  const savedJs = sessionStorage.getItem("jsValue");
  const initialJs = JSON.parse(savedJs);
  const [ jsCode, setJsCode] = useState(js_code || initialJs)

  useEffect(() => {
    if (
      html_code !== undefined ||
      css_code !== undefined ||
      js_code !== undefined
    ) {
      sessionStorage.removeItem("htmlValue");
      sessionStorage.removeItem("cssValue");
      sessionStorage.removeItem("jsValue");
      sessionStorage.setItem(
        "htmlValue",
        JSON.stringify(formatter(htmlCode, "html"))
      );
      sessionStorage.setItem(
        "cssValue",
        JSON.stringify(formatter(cssCode, "css"))
      );
      sessionStorage.setItem(
        "jsValue",
        JSON.stringify(formatter(jsCode, "js"))
      );
    }
  }, []);

  return (
    <div className="library-body">
      <Tabs
        htmlCode={htmlCode}
        setHtml={setHtmlCode}
        cssCode={cssCode}
        setCss={setCssCode}
        jsCode={jsCode}
        setJs={setJsCode}
      />
    </div>
  );
};

export default ComponentsPage;
