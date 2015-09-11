/* leaflet-shape-markers - v1.0.4 - Fri Sep 11 2015 10:40:11 GMT-0700 (PDT)
 * Copyright (c) 2015 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?factory(exports,require("leaflet")):typeof define==="function"&&define.amd?define(["exports","leaflet"],factory):factory(global.L.shapeMarkers={},L)})(this,function(exports,L){"use strict";var ShapeMarker=L.Path.extend({initialize:function(latlng,size,options){L.setOptions(this,options);this._size=size;this._latlng=L.latLng(latlng);this._svgCanvasIncludes()},_svgCanvasIncludes:function(){},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_update:function(){if(this._map){this._updatePath()}},_updatePath:function(){},setLatLng:function(latlng){this._latlng=L.latLng(latlng);this.redraw();return this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setSize:function(size){this._size=size;return this.redraw()},getSize:function(){return this._size}});var CrossMarker=ShapeMarker.extend({initialize:function(latlng,size,options){ShapeMarker.prototype.initialize.call(this,latlng,size,options)},_updatePath:function(){this._renderer._updateCrossMarker(this)},_svgCanvasIncludes:function(){L.Canvas.include({_updateCrossMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;var ctx=this._ctx;ctx.beginPath();ctx.moveTo(latlng.x,latlng.y+offset);ctx.lineTo(latlng.x,latlng.y-offset);this._fillStroke(ctx,layer);ctx.moveTo(latlng.x-offset,latlng.y);ctx.lineTo(latlng.x+offset,latlng.y);this._fillStroke(ctx,layer)}});L.SVG.include({_updateCrossMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;if(L.Browser.vml){latlng._round();offset=Math.round(offset)}var str="M"+latlng.x+","+(latlng.y+offset)+"L"+latlng.x+","+(latlng.y-offset)+"M"+(latlng.x-offset)+","+latlng.y+"L"+(latlng.x+offset)+","+latlng.y;this._setPath(layer,str)}})}});exports.crossMarker=function(latlng,size,options){return new CrossMarker(latlng,size,options)};var XMarker=ShapeMarker.extend({initialize:function(latlng,size,options){ShapeMarker.prototype.initialize.call(this,latlng,size,options)},_updatePath:function(){this._renderer._updateXMarker(this)},_svgCanvasIncludes:function(){L.Canvas.include({_updateXMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;var ctx=this._ctx;ctx.beginPath();ctx.moveTo(latlng.x+offset,latlng.y+offset);ctx.lineTo(latlng.x-offset,latlng.y-offset);this._fillStroke(ctx,layer)}});L.SVG.include({_updateXMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;if(L.Browser.vml){latlng._round();offset=Math.round(offset)}var str="M"+(latlng.x+offset)+","+(latlng.y+offset)+"L"+(latlng.x-offset)+","+(latlng.y-offset)+"M"+(latlng.x-offset)+","+(latlng.y+offset)+"L"+(latlng.x+offset)+","+(latlng.y-offset);this._setPath(layer,str)}})}});exports.xMarker=function(latlng,size,options){return new XMarker(latlng,size,options)};var SquareMarker=ShapeMarker.extend({options:{fill:true},initialize:function(latlng,size,options){ShapeMarker.prototype.initialize.call(this,latlng,size,options)},_updatePath:function(){this._renderer._updateSquareMarker(this)},_svgCanvasIncludes:function(){L.Canvas.include({_updateSquareMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;var ctx=this._ctx;ctx.beginPath();ctx.moveTo(latlng.x+offset,latlng.y+offset);ctx.lineTo(latlng.x-offset,latlng.y+offset);ctx.lineTo(latlng.x-offset,latlng.y-offset);ctx.lineTo(latlng.x+offset,latlng.y-offset);ctx.closePath();this._fillStroke(ctx,layer)}});L.SVG.include({_updateSquareMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;if(L.Browser.vml){latlng._round();offset=Math.round(offset)}var str="M"+(latlng.x+offset)+","+(latlng.y+offset)+"L"+(latlng.x-offset)+","+(latlng.y+offset)+"L"+(latlng.x-offset)+","+(latlng.y-offset)+"L"+(latlng.x+offset)+","+(latlng.y-offset);str=str+(L.Browser.svg?"z":"x");this._setPath(layer,str)}})}});exports.squareMarker=function(latlng,size,options){return new SquareMarker(latlng,size,options)};var DiamondMarker=ShapeMarker.extend({options:{fill:true},initialize:function(latlng,size,options){ShapeMarker.prototype.initialize.call(this,latlng,size,options)},_updatePath:function(){this._renderer._updateDiamondMarker(this)},_svgCanvasIncludes:function(){L.Canvas.include({_updateDiamondMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;var ctx=this._ctx;ctx.beginPath();ctx.moveTo(latlng.x,latlng.y+offset);ctx.lineTo(latlng.x-offset,latlng.y);ctx.lineTo(latlng.x,latlng.y-offset);ctx.lineTo(latlng.x+offset,latlng.y);ctx.closePath();this._fillStroke(ctx,layer)}});L.SVG.include({_updateDiamondMarker:function(layer){var latlng=layer._point;var offset=layer._size/2;if(L.Browser.vml){latlng._round();offset=Math.round(offset)}var str="M"+latlng.x+","+(latlng.y+offset)+"L"+(latlng.x-offset)+","+latlng.y+"L"+latlng.x+","+(latlng.y-offset)+"L"+(latlng.x+offset)+","+latlng.y;str=str+(L.Browser.svg?"z":"x");this._setPath(layer,str)}})}});exports.diamondMarker=function(latlng,size,options){return new DiamondMarker(latlng,size,options)};exports.VERSION="1.0.4"});
//# sourceMappingURL=./leaflet-shape-markers.js.map