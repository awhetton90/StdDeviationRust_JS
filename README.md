# std-deviation

The javascript implementation of Standard Deviation can be found in StdDeviation.js

The Rust implementation of Standard Deviation can be found in lib.rs

This project requires neon for testing the Rust implementation as a Node module.
Installation instructions can be found at: https://neon-bindings.com/docs/getting-started

Create the neon project with:
neon new std-deviation
You can set the options or just hit enter through the options



Replace the index.js file found in std-deviation/lib with the index.js found here.
This index.js can be used to run manual tests against the Rust implementation.

Replace the lib.rs file found at std-deviation/native/src with the lib.rs file in
this repo. This the the Rust implementation of Standard Deviation.

Place the StdDeviation.js, stddev.test.js in std-deviation, and ensure the following items
are in the package.json:

  "dependencies": {
    "neon-cli": "^0.3.3"
  },
  "devDependencies": {
    "jest": "^25.1.0"
  },
  "jest": {
    "verbose": true
  },
  "scripts": {
    "install": "neon build",
    "test": "jest"
  }

Be sure jest is installed.

Ensure the following items are in your Cargo.toml found in the native directory:


[build-dependencies]
neon-build = "0.3.3"

[dependencies]
neon = "0.3.3"
neon-serde = "0.3.0"
serde_derive = "1.*"
serde = "1.*"




From std-deviation, run:
neon build --release

Once that is built, run the test by running npm run test