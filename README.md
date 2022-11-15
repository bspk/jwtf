# JWTF

JOSE / JWT / WTF.

## Updating

To update the vulnerability counter, send a pull request that edits the file `src/components/vuln.js`. This file contains a variable with two pieces: a URL to the vulnerability announcement and a date stamp for the vulnerability. Both of these should be edited by the PR.

~~~
const vuln = {
  url: "https://url-to-vulnerability-disclosure",
  date: new Date(2022, 4, 20)
};
~~~
