const currentDomain = window.location.hostname.replace(/^\w+\./, "");
const cookieHost = (
  window.location.hostname === "localhost" ? "localhost" : `.${currentDomain}`
).replace(/\.+/g, "");

const currentLocation = window.location.origin;
const appConfig = {
  api: {
    url: "https://api.opendota.com/api/",
    timeout: 30000,
  },
  auth: {
    url: "",
    timeout: 30000,
    keys: {
      token: "Template",
    },
  },
  host: cookieHost,
  urlLogout: `url=${currentLocation}`,
  urlLogoutDev: `url=${currentLocation}`,
  app: {
    name: "Template",
  },
  cdn: "https://cdn.cloudflare.steamstatic.com/",
};

export default appConfig;
