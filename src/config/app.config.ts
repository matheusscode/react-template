const api = {
  url: "https://api.example.com",
  cdn: "https://api.example.com",
  timeout: 30000,
};

const metadata = {
  id: 1,
  username: "Joe doe",
  email: "email@example.com",
  firstLogin: false,
};

const keys = {
  token: "dev",
};

const auth = {
  keys,
  metadata,
};

export const app_config = {
  api,
  auth,
};
