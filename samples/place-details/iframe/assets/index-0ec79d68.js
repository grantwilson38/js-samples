(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function m(){const r=new google.maps.Map(document.getElementById("map"),{center:{lat:-33.866,lng:151.196},zoom:15}),n={placeId:"ChIJN1t_tDeuEmsRUsoyG83frY4",fields:["name","formatted_address","place_id","geometry"]},s=new google.maps.InfoWindow;new google.maps.places.PlacesService(r).getDetails(n,(e,t)=>{if(t===google.maps.places.PlacesServiceStatus.OK&&e&&e.geometry&&e.geometry.location){const o=new google.maps.Marker({map:r,position:e.geometry.location});google.maps.event.addListener(o,"click",()=>{const c=document.createElement("div"),d=document.createElement("h2");d.textContent=e.name,c.appendChild(d);const l=document.createElement("p");l.textContent=e.place_id,c.appendChild(l);const a=document.createElement("p");a.textContent=e.formatted_address,c.appendChild(a),s.setContent(c),s.open(r,o)})}})}window.initMap=m;