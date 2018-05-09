'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on cryptorescuecore-p2p Module {0}'
};

module.exports = require('cryptorescuecore-lib').errors.extend(spec);
