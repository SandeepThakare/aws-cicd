!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(2)),a=o(n(0)),u=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){(0,a.default)(this,e)}return(0,u.default)(e,[{key:"callbackHandler",value:function(e,t){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT"},body:(0,r.default)(t)}}},{key:"postParams",value:function(e,t){return{TableName:e,Item:t}}},{key:"scanParams",value:function(e){return{TableName:e}}},{key:"queryParams",value:function(e,t,n){return{TableName:e,KeyConditionExpression:t+" = :pk",ExpressionAttributeValues:{":pk":decodeURIComponent(n)}}}}]),e}();t.default=l},function(e,t){e.exports=require("aws-sdk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(){(0,r.default)(this,e)}return(0,a.default)(e,[{key:"getStatusCode",value:function(){return{OK:200,CREATED:201,NO_CONTENT:204,PARTIAL_CONTENT:206,NOT_MODIFIED:304,BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,UNPROCESSABLE_ENTITY:422,INTERNAL_SERVER_ERROR:500}}}]),e}();t.default=o},,,function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("file-type")},function(e,t){e.exports=require("sha1")},function(e,t){e.exports=require("aws-lambda-multipart-parser")},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(2));t.uploadImage=function(e,t,n){(new Date).toUTCString();var a="aws-poc-image-bucket";if(!e.pathParameters||!e.pathParameters.email||!e.pathParameters.filename)return void n(null,(new u.default).callbackHandler(f.BAD_REQUEST,"Email or File name is missing !"));var o=l.default.parse(e,!0),c=new i.default(e);s.headBucket({Bucket:a},(function(t,l){if(t)s.createBucket({Bucket:a},(function(t,l){if(t)return console.log(t),void n(null,(new u.default).callbackHandler(f.BAD_REQUEST,t));var i={Bucket:a,Key:e.pathParameters.email+"/"+e.pathParameters.filename,Body:o.image_buffer.content,ContentEncoding:"base64",ContentType:o.image_buffer.contentType,ACL:"public-read"};s.putObject(i,(function(e,t){return e?(console.log((0,r.default)(e.undefined,2)),void n(null,(new u.default).callbackHandler(f.FORBIDDEN,e))):(console.log("Successfully uploaded data to myBucket/myKey"),void n(null,(new u.default).callbackHandler(f.OK,"Image successfully saved !!!")))}))}));else{new Buffer(c.files[0]._readableState.buffer.head.data).toString("base64");var i={Bucket:a,Key:e.pathParameters.email+"/"+o.image_buffer.filename,Body:o.image_buffer.content,ContentEncoding:"base64",ContentType:o.image_buffer.contentType,ACL:"public-read"};s.putObject(i,(function(e,t){if(e)return console.log(e),void n((new u.default).callbackHandler(f.FORBIDDEN,e));console.log("Successfully uploaded data to myBucket/myKey"),t.ETag,n(null,(new u.default).callbackHandler(f.OK,"Image successfully saved !!!"))}))}}))};var a=n(4),u=(n(8),c(n(9)),c(n(10)),c(n(3))),o=c(n(5)),l=c(n(11)),i=c(n(17));function c(e){return e&&e.__esModule?e:{default:e}}var f=(new o.default).getStatusCode(),s=new a.S3},function(e,t){e.exports=require("lambda-multipart")}]));