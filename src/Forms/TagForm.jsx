import { useState } from "react";
import { componentsRepository } from "../Api/ComponentsRepo";

const TagForm = ({ tags, setTags }) => {
  const [tagName, setTagName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (tagName === "") {
      return;
    } else {
      await submitForm();
    }
  };

  const submitForm = async () => {
    const res = await componentsRepository.createTag({
      tag_name: tagName,
    });

    if (!res.error) {
      const { tag } = res;

      setTags({ ...tags} , tag?.tag_name );
      console.log(tags)
    }
  };

  const onChangeTag = async (e) => {
    setTagName(e.target.value);
  };
  return (
    <form className="Input" onSubmit={onSubmit}>
      <input
        type="text"
        id="input"
        className="Input-text"
        placeholder="Tag name ..."
        style={{ width: "50%" }}
        value={tagName}
        onChange={onChangeTag}
      />
      <button type="submit" className="btnYellow">
        Submit Tag
      </button>
    </form>
  );
};

export default TagForm;
