var Prismic = require('prismic-javascript');

var apiEndpoint = "https://blog-aavf.cdn.prismic.io/api/v2";
  
module.exports = async function() {
  return await Prismic.getApi(apiEndpoint).then(function(api) {  
    return api.getSingle('about').then(function(document) {
      // document contains the document content
      //console.log("Document: ", document);
      return document;
    });
  });
};
