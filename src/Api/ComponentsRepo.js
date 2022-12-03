export const componentsRepository = {
  listOfComponents: async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/components/get_components",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).catch((error) => alert(error.message));
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  createComponent: async ({ title, html_code, css_code, js_code, tags }) => {
    const requestBody = {
      title: title,
      html_code: html_code,
      css_code: css_code,
      js_code: js_code,
      tags: tags,
    };
    try {
      const response = await fetch(
        "http://localhost:4000/api/components/add_component",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2ZlMTliNTgtYTAwZC00NGI0LThkMjYtYzY5ZjIzOTJmYzQ4IiwidXNlcl9uYW1lIjoiYWRtaW4iLCJpYXQiOjE2Njk2NzA5NTYsImV4cCI6MTY2OTY3NDU1Nn0.eBNJcS8U0JEQ6zOI2fk5cvRoLhQuI0LiDzrwt2o_YwE`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      return (await response).json();
    } catch (error) {
      return error;
    }
  },

  listOfTags: async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/components/tags",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).catch((error) => alert(error.message));
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },

  createTag: async ({ tag_name }) => {
    const requestBody = {
      tag_name: tag_name
    };
    try {
      const response = await fetch(
        "http://localhost:4000/api/components/add_tag",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2ZlMTliNTgtYTAwZC00NGI0LThkMjYtYzY5ZjIzOTJmYzQ4IiwidXNlcl9uYW1lIjoiYWRtaW4iLCJpYXQiOjE2Njk2NzA5NTYsImV4cCI6MTY2OTY3NDU1Nn0.eBNJcS8U0JEQ6zOI2fk5cvRoLhQuI0LiDzrwt2o_YwE`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      return (await response).json();
    } catch (error) {
      return error;
    }
  },
};
