const envMode = "development";

let config = {};

const defaultConfig = {
  version: "1.0.0",
  envMode
};

// --------------- dev mode -------------
if (envMode === "development") {
  config = {
    ...defaultConfig,
    domain: ""
  };
} else {
  config = {
    ...defaultConfig,
    domain: ""
  };
}

export default config;
