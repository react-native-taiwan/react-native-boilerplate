const envMode = "development";

let config = {};

const defaultConfig = {
  version: "1.0.0",
  disableYellowBox: true,
  envMode,
};

if (envMode === "development") {
  // ------------- dev mode ---------------
  config = {
    ...defaultConfig,
    domain: ""
  };
} else {
  // ----------- production mode ----------
  config = {
    ...defaultConfig,
    domain: ""
  };
}

export default config;
