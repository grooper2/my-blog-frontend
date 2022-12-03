import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { componentsRepository } from "../../Api/ComponentsRepo";
import DropDown from "../../components/Button/dropDown";
import Card from "../../components/Card";
import SearchInput from "../../components/Input/SearchInput";
import Tabs from "../../components/Tabs";
import { ComponentContext } from "../../context/componentProvider";
import { UserContext } from "../../context/userProvider";

function Library() {
  const { user } = useContext(UserContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [componentsArray, setComponentsArray] = useState([]);
  const [sortedComponents, setSortedComponents] = useState(
    componentsArray || []
  );
  const { setComponents } = useContext(ComponentContext);

  useEffect(() => {
    const loadComponents = async () => {
      const componentsArr = await componentsRepository.listOfComponents();
      setComponentsArray(componentsArr.components);
    };

    loadComponents();

    if (user?.isAuthenticated) {
      localStorage.setItem("accessToken", user.accessToken)
      localStorage.setItem("refreshToken", user.refreshToken)
    }
  }, []);

  const dropOptions = ["NavBar", "Buttons", "Inputs", "Animations", "Cards"];

  const tag = searchParams.get("tag");

  useEffect(() => {
    const arr = componentsArray.map((data) => {
      if (!!data.tags.includes(tag)) {
        return data;
      }
      return;
    });

    setSortedComponents(arr.filter((data) => data !== undefined));
  }, [tag]);

  return (
    <div className="library-body">
      <div className="library-row">
        <div className="btn-container">
          <Link to="/create_component">
            <button className="btnYellow">Create Component</button>
          </Link>
        </div>
        <SearchInput />
        <div className="btn-container">
          <DropDown
            name="Sort Components"
            dropOptions={dropOptions}
            isSorting
          />
        </div>
      </div>
      <div className="card-container">
        {!!tag === false ? (
          <>
            {componentsArray.map((data) => (
              <Link
                className="clickable-container"
                key={data.component_id}
                to={`/library/${data.component_id}`}
                onClick={() => setComponents(data)}
              >
                <Card
                  key={data.component_id}
                  title={data.title}
                  htmlCode={data.html_code}
                  cssCode={data.css_code}
                  jsCode={data.js_code}
                  tags={data.tags}
                />
              </Link>
            ))}
          </>
        ) : (
          <>
            {sortedComponents.map((data) => (
              <Link
                className="clickable-container"
                key={data.component_id}
                to={`/library/${data.component_id}`}
                onClick={() => setComponents(data)}
              >
                <Card
                  key={data.component_id}
                  title={data.title}
                  htmlCode={data.html_code}
                  cssCode={data.css_code}
                  jsCode={data.js_code}
                  tags={data.tags}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Library;
