import prettier from "prettier";
import htmlParser from "prettier/parser-html";
import cssParser from "prettier/parser-postcss";
import babelParser from "prettier/parser-babel";

export function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function intToRGB(i: number) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export function formatter(code: string, language: string) {
  return prettier.format(code, {
    parser: language === "html" ? "html" : language === "css" ? "css" : "babel",
    plugins: [
      language === "html"
        ? htmlParser
        : language === "css"
        ? cssParser
        : babelParser,
    ],
  });
}
