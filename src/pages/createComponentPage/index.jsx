import React, { useState } from "react";
import DropDown from "../../components/Button/dropDown";
import Tabs from "../../components/Tabs";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";
import TagForm from "../../Forms/TagForm";
import { componentsRepository } from "../../Api/ComponentsRepo";
import { Navigate } from "react-router-dom";

const CreateComponentPage = () => {
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [res, setRes] = useState("");
  const dropOptions = [
    "NavBar",
    "Inputs",
    "Animations",
    "Cards",
    "Buttons",
    "Forms",
    "Switch",
    "SideBar",
  ];

  const onSubmit = async (e) => {
    if (html === "" && tags.length <= 0 && title === "") {
      return;
    } else {
      await submitForm();
    }
  };

  const submitForm = async () => {
    const res = await componentsRepository.createComponent({
      title: title,
      html_code: html,
      css_code: css,
      js_code: js,
      tags: tags,
    });
    Navigate("library");
  };

  const onChangeTitle = async (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="library-body">
      <h2>Create Component</h2>
      <div className="tag-container">
        <p>Add a new tag</p>
        <CrossIcon
          className="crossIcon"
          onClick={() => setIsAddingTag(!isAddingTag)}
          style={isAddingTag ? { transform: "rotate(90deg)" } : {}}
        />
      </div>
      {isAddingTag && <TagForm tags={tags} setTags={() => setTags} />}
      <form className="tag-container" onSubmit={onSubmit}>
        <div className="Input">
          <input
            type="text"
            id="input"
            className="Input-text"
            placeholder="Component title ..."
            style={{ width: "100%" }}
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div className="tag-container">
          <DropDown
            name="Select Tags"
            dropOptions={dropOptions}
            isSorting={false}
            setTags={setTags}
            tags={tags}
          />
        </div>

        <Tabs
          htmlCode={html}
          setHtml={setHtml}
          cssCode={css}
          setCss={setCss}
          jsCode={js}
          setJs={setJs}
        />
        <div className="tag-container">
          <button className="btnYellow" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComponentPage;
