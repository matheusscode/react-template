const CURRENT_LOCATION = window.location.pathname;
const developmentRoute = "http://172.22.1.248:8080";
const productionRoute = "http://172.22.1.248:8080";
const CURRENT_ROUTE =
  CURRENT_LOCATION === "localhost" ? developmentRoute : productionRoute;

const appConfig = {
  api: {
    url: CURRENT_ROUTE,
    timeout: 30000,
    cdn: "",
  },
  app: {
    name: "Vozes da Democracia - Fique por dentro de todas as nóticias.",
  },
};

export default appConfig;
