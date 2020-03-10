# std-deviation

The javascript implementation of Standard Deviation can be found in StdDeviation.js

The Rust implementation of Standard Deviation can be found in lib.rs

This project requires neon for testing the Rust implementation as a Node module.
Installation instructions can be found at: https://neon-bindings.com/docs/getting-started

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