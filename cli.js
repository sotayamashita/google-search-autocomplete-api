#!/usr/bin/env node
'use strict';
const meow = require('meow');
const gsa = require('google-search-autocomplete');

const cli = meow(`
  Usage
    $ gsa [query]
  Example
    $ gsa query
`);

gsa(cli.input[0])
  .then(console.log)
