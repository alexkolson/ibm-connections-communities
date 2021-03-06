'use strict';

// node core modules

// 3rd party modules
const { ensureXMLDoc } = require('oniyi-utils-xml');

// internal modules
const communityParser = require('./community-entry');
const communityMembersParser = require('./community-members-entry');

const responseParser = {
  getCommunity: responseXML => communityParser(ensureXMLDoc(responseXML)),
  communityMembers: responseXML => communityMembersParser(ensureXMLDoc(responseXML)),
};

module.exports = responseParser;
