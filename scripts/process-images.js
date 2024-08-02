#!/usr/bin/env node

const { startProcess } = require('../index');

startProcess().catch(err => console.error(err));
