'use strict';

var L = require('leaflet');

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
  }),
  osm_de = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
  });

module.exports = {
  defaultState: {
    center: L.latLng(-41.278507,174.788991),  
    zoom: 13,
    waypoints: [],
    language: 'en',
    alternative: 0,
    layer: osm
  },
  services: [{
    label: 'Car (fastest)',
    path: 'https://router.project-osrm.org/route/v1'
  }],
  layer: [{
    'openstreetmap.org': osm,
    'openstreetmap.de.org': osm_de
  }]/*,
  overlay: {
    'Small Components': small_components
  }*/,
  baselayer: {
    one: osm,
    two: osm_de
  }
};
