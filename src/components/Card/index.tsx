import React from "react";
import { hashCode, intToRGB } from "../../utils";

type CardProps = {
  title: string;
  cssCode: string;
  htmlCode: string;
  jsCode: string;
  tags: string[];
};

const Card: React.FunctionComponent<CardProps> = ({
  title,
  cssCode,
  htmlCode,
  jsCode,
  tags,
}) => {
  
  let srcDoc = `
    <html>
      <body style="overflow: hidden">${htmlCode}</body>
      <style>${cssCode}</style>
      <script>${jsCode}</script>
    </html>`;

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <iframe
            srcDoc={srcDoc}
            title="output"
            frameBorder="0"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          />
        </div>
        <div className="card-body">
          <div className="tags-row">
            {tags?.map((tag) => (
              <span
                className="tag"
                style={{ background: `#${intToRGB(hashCode(tag))}` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
