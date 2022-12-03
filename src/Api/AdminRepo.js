export const AdminRepository = {
  login: async ({ name, password }) => {
    const requestBody = {
      name: name,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      return (await response).json();
    } catch (error) {
      return error;
    }
  },
  isAuthenticated: async () => {
    const requestBody = {
      refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2ZlMTliNTgtYTAwZC00NGI0LThkMjYtYzY5ZjIzOTJmYzQ4IiwidXNlcl9uYW1lIjoiYWRtaW4iLCJpYXQiOjE2Njk4NTExMzksImV4cCI6MTY3MDExMDMzOX0.Din_ntC0AwsoZJYloa4LPFbKVhqDrclY-NiZN2lREBo'
    }
    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/refresh_token",
        {
          method: "POST",
          headers: {
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
