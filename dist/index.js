"use strict";var v=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var i=v(function(L,x){
var o=require('@stdlib/blas-ext-base-gfirst-index-less-than-equal/dist').ndarray;function f(r,a,e,n,u,t,q){var s;return r<=0?-1:(n+=(r-1)*e,q+=(r-1)*t,e*=-1,t*=-1,s=o(r,a,e,n,u,t,q),s<0?s:r-1-s)}x.exports=f
});var y=v(function(T,c){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=i();function h(r,a,e,n,u){return g(r,a,e,l(r,e),n,u,l(r,u))}c.exports=h
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),E=i();p(d,"ndarray",E);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
