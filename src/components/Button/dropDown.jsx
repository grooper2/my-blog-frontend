import React, { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ReactComponent as SortIcon } from "../../Assets/Icons/sortIcon.svg";
import {hashCode , intToRGB} from "../../utils";

// type DropDownProps = {
//   dropOptions: string[];
//   name: string;
//   isSorting: boolean;
//   tags: string[]
//   setTags: (tags: string[]) => void
// };

const DropDown = ({
  dropOptions,
  name,
  isSorting,
  tags,
  setTags
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTags, setSelectedTags] = useState([]);

  const addTags = (tag) => {
    let arr = [...selectedTags];
    const isSelected = arr.some((tags) => tags === tag);

    if (!isSelected) {
      arr.push(tag);
      setSelectedTags(arr);
      setTags(arr)
    }
  };

  const removeTags = (tag) => {
    let arr = [...selectedTags]
    const idx = arr.indexOf(tag)
    arr.splice(idx, 1)
    setSelectedTags(arr)
    setTags(arr)
  }

  return (
    <>
      <div className="sec-center">
        <input
          type="checkbox"
          id="dropdown"
          name="dropdown"
          className="dropdown"
        />
        <label className="for-dropdown" htmlFor="dropdown">
          {name}
          {isSorting && <SortIcon className="uil uil-arrow-down" />}
        </label>
        <div className="section-dropdown">
          {isSorting && (
            <>
              <a
                onClick={() => {
                  const param = searchParams.get("tag");

                  if (param) {
                    searchParams.delete("tag");

                    setSearchParams(searchParams);
                  }
                }}
              >
                Show All
              </a>
              <div className="divider" />
            </>
          )}
          {dropOptions.map((option) => (
            <a
              onClick={() => {
                if (isSorting) {
                  setSearchParams({ tag: `${option}` });
                } else {
                  addTags(option);
                }
              }}
              key={option}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
      <div className="selected-tags-row">
        {!isSorting &&
          selectedTags.map((tags) => (
            <span className="tag" style={{background: `#${intToRGB(hashCode(tags))}`}} onClick={() => removeTags(tags)}>
              {tags}
            </span>
          ))}
      </div>
    </>
  );
};

export default DropDown;
