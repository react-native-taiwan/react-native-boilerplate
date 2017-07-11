const envMode = "development";

let config = {};

const defaultConfig = {
  version: "1.0.0",
  disableYellowBox: true,
  showFetchLog: true,
  envMode,
};

if (envMode === "development") {
  // ------------- dev mode ---------------
  config = {
    ...defaultConfig,
    domain: "http://localhost:8080"
  };



} else {
  // ----------- production mode ----------
  config = {
    ...defaultConfig,
    domain: "",
    showFetchLog: false
  };
}

export default config;
