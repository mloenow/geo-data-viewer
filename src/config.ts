import { LogLevel } from "./logger";

// log level setting for prod. vs. dev run of this ext.
export const logLevel: LogLevel = LogLevel.Info; // change to .Debug for dev ...

export const supportedDataFiles: RegExp = /.*\.(csv|dbf|fgb|gpx|json|geojson|gml|kgl|kml|prj|shp|topojson|wkt)/;

export const mapboxToken: string = 'pk.eyJ1IjoiZGF0YXBpeHkiLCJhIjoiY2s1Mm10bHB1MThnbDNrdGVmemptd3J5eSJ9.xewq9dOWQLemerED1-qPXQ';

export const openFileFilters: any = {
  'JSON': ['json', 'geojson', 'kgl.json', 'topojson'],
  'CSV': ['csv'],
  'KML': ['kml'],
  'GML': ['gml'],
  'GPX': ['gpx'],
  'IGC': ['igc'],
  'Shapefile': ['shp'],
  'WKT': ['wkt'],
  'FlatGeobuf': ['fgb']
};

export const saveFileFilters: any = {
  'JSON': ['json', 'geojson', 'kgl.json'],
  'CSV': ['csv'],
  'Html': ['html']
};

// map list for the map gallery
export const mapList: Array<any> = [
  {
    name: 'Chicago Bike Routes',
    url: 'https://raw.githubusercontent.com/classicmatsuo/keplerGL-bikeRoute/master/src/data/bikeRouteWConfig.json',
    description: 'Chicago bike routes for 2019',
  },
  {
    name: 'Chicago Green Roofs',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/csv/chicago-green-roofs.map.json',
    description: 'Chicago green roofs sustainable development for 2012',
  },
  {
    name: 'Chicago Traffic Crashes',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/csv/chicago-traffic-crashes.map.json',
    description: 'Chicago traffic crashes for 2016 through 2019',
  },
  {
    name: 'Top Expat Desitinations',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/csv/top-expat-destinations.map.json',
    description: 'Top expat destinations ranked by country for 2014 through 2017',
  },
  {
    name: 'Top Expat Desitinations over Time',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/csv/top-expat-destinations-time.map.json',
    description: 'Top expat destinations ranked by country for 2014 through 2017',
  },
  {
    name: 'Georgia Population Map',
    url: 'https://gist.githubusercontent.com/bumbeishvili/fac2b30e3be09259a9b27d8c139b1456/raw/214c8e5b047aa6443a2e18607a216f52e02cfe0b/keplergl.json',
    description: 'Georgia Population Map',
  },
  {
    name: 'USA Airports',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/csv/usa-airports.map.json',
    description: 'USA Airports',
  },
  {
    name: 'USA Counties',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/topojson/usa-albers-counties.topo.json',
    description: 'USA Counties',
  },
  {
    name: 'Blue Hills Hiking',
    url: 'https://raw.githubusercontent.com/mapbox/togeojson/master/test/data/blue_hills.gpx',
    description: 'Blue Hills Hiking',
  },
  {
    name: 'World Cities',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/shapefiles/World_Cities.shp',
    description: 'World Cities',
  },
  {
    name: 'Major World Rivers',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/shapefiles/MajorRivers.shp',
    description: 'Major World Rivers',
  },
  {
    name: 'World Lakes',
    url: 'https://raw.githubusercontent.com/RandomFractals/geo-data-viewer/master/data/shapefiles/ne_10m_lakes.shp',
    description: 'World Lakes',
  },
  {
    name: 'Countries',
    url: 'https://raw.githubusercontent.com/bjornharrtell/flatgeobuf/master/test/data/countries.fgb',
    description: 'Countries',
  },
  {
    name: 'Geologic Lines',
    url: 'https://raw.githubusercontent.com/google/libkml/master/examples/kml/lines.kml',
    description: 'Marine County, CA Geologic Lines'
  }
];

export const KEPLER_GL_VERSION: string = '2.5.5';

export const mapConfigTemplate: any = {
  "config": {
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "isSplit": false,
      "latitude": 10.5117765,
      "longitude": 34.269600000000004,
      "pitch": 0,
      "zoom": 2
    },
    "mapStyle": {
      "mapStyles": {},
      "styleType": "muted_night",
      "threeDBuildingColor": [
        9.665468314072013,
        17.18305478057247,
        31.1442867897876
      ],
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "border": true,
        "building": true,
        "label": true,
        "land": true,
        "road": true,
        "water": true
      }
    },
    "visState": {
      "animationConfig": {
        "currentTime": null,
        "speed": 1
      },
      "filters": [],
      "interactionConfig": {
        "brush": {
          "enabled": false,
          "size": 0.5
        },
        "coordinate": {
          "enabled": false
        },
        "tooltip": {
          "enabled": true,
          "fieldsToShow": {}
        }
      },
      "layerBlending": "normal",
      "layers": [],
      "splitMaps": []
    }
  },
  "version": "v1"
};

/**
 * Creates an html file content for standalone kepler.gl map preview
 * @param {Object} options Map data and html config options
 * @param {string} options.mapboxApiAccessToken Mapbox token used to fetch mapbox tiles
 * @param {Array<Object>} options.datasets Data to include in the map
 * @param {Object} options.config Full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @param {string} version Version of Kepler.gl to load
 * @see https://github.com/keplergl/kepler.gl/blob/master/src/templates/export-map-html.js
 */
export const mapDataToHtml = (options: any, version: string = KEPLER_GL_VERSION) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Kepler.gl embedded map</title>

        <!--Uber Font-->
        <link rel="stylesheet" href="https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/uber-fonts/4.0.0/superfine.css">

        <!--MapBox css-->
        <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.1/mapbox-gl.css" rel="stylesheet">

        <!-— facebook open graph tags -->
        <meta property="og:url" content="http://kepler.gl/" />
        <meta property="og:title" content="Large-scale WebGL-powered Geospatial Data Visualization Tool" />
        <meta property="og:description" content="Kepler.gl is a powerful web-based geospatial data analysis tool. Built on a high performance rendering engine and designed for large-scale data sets." />
        <meta property="og:site_name" content="kepler.gl" />
        <meta property="og:image" content="https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/kepler.gl-meta-tag.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />

        <!-— twitter card tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@uber">
        <meta name="twitter:creator" content="@uber">
        <meta name="twitter:title" content="Large-scale WebGL-powered Geospatial Data Visualization Tool">
        <meta name="twitter:description" content="Kepler.gl is a powerful web-based geospatial data analysis tool. Built on a high performance rendering engine and designed for large-scale data sets.">
        <meta name="twitter:image" content="https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/kepler.gl-meta-tag.png" />

        <!-- Load React/Redux -->
        <script src="https://unpkg.com/react@16.8.4/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/redux@3.7.2/dist/redux.js" crossorigin></script>
        <script src="https://unpkg.com/react-redux@7.1.3/dist/react-redux.min.js" crossorigin></script>
        <script src="https://unpkg.com/styled-components@4.1.3/dist/styled-components.min.js" crossorigin></script>

        <!-- Load Kepler.gl -->
        <script src="https://unpkg.com/kepler.gl@${version}/umd/keplergl.min.js" crossorigin></script>

        <style type="text/css">
          body {margin: 0; padding: 0; overflow: hidden; background-color: #222}
        </style>

        <!--MapBox token-->
        <script>
          /**
           * Provide your MapBox Token
           **/
          const MAPBOX_TOKEN = '${options.mapboxApiAccessToken || 'PROVIDE_MAPBOX_TOKEN'}';
          const WARNING_MESSAGE = 'Please Provide a Mapbox Token in order to use Kepler.gl. Edit this file and fill out MAPBOX_TOKEN with your access key';
        </script>

        <!-- GA: Delete this as you wish, However to pat ourselves on the back, we only track anonymous pageview to understand how many people are using kepler.gl. -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-64694404-19', {
            'storage': 'none',
            'clientId': localStorage.getItem('ga:clientId')
          });
          ga(function(tracker) {
              localStorage.setItem('ga:clientId', tracker.get('clientId'));
          });
          ga('set', 'checkProtocolTask', null); // Disable file protocol checking.
          ga('set', 'checkStorageTask', null); // Disable cookie storage checking.
          ga('set', 'historyImportTask', null); // Disable history checking (requires reading from cookies).
          ga('set', 'page', 'keplergl-html');
          ga('send', 'pageview');
        </script>
      </head>
      <body>
        <!-- We will put our React component inside this div. -->
        <div id="app">
          <!-- Kepler.gl map will be placed here-->
        </div>

        <!-- Load our React component. -->
        <script>
          /* Validate Mapbox Token */
          if ((MAPBOX_TOKEN || '') === '' || MAPBOX_TOKEN === 'PROVIDE_MAPBOX_TOKEN') {
            alert(WARNING_MESSAGE);
          }

          /** STORE **/
          const reducers = (function createReducers(redux, keplerGl) {
            return redux.combineReducers({
              // mount keplerGl reducer
              keplerGl: keplerGl.keplerGlReducer.initialState({
                uiState: {
                  readOnly: ${options.mode === 'READ'}
                }
              })
            });
          }(Redux, KeplerGl));

          const middleWares = (function createMiddlewares(keplerGl) {
            return keplerGl.enhanceReduxMiddleware([
              // Add other middlewares here
            ]);
          }(KeplerGl));

          const enhancers = (function craeteEnhancers(redux, middles) {
            return redux.applyMiddleware(...middles);
          }(Redux, middleWares));

          const store = (function createStore(redux, enhancers) {
            const initialState = {};

            return redux.createStore(
              reducers,
              initialState,
              redux.compose(enhancers)
            );
          }(Redux, enhancers));
          /** END STORE **/

          /** COMPONENTS **/
          var KeplerElement = (function makeKeplerElement(react, keplerGl, mapboxToken) {
            var LogoSvg = function LogoSvg() {
              return react.createElement(
                "div",
                { className: "logo-container", style: {position: 'fixed', zIndex: 10000, padding: '4px'} },
                  react.createElement(
                    "svg",
                    {
                      className: "kepler_gl__logo",
                      width: "107px",
                      height: "21px",
                      viewBox: "0 0 124 24"
                    },
                    react.createElement(
                      "g",
                      { transform: "translate(13.500000, 13.500000) rotate(45.000000) translate(-13.500000, -13.500000) translate(4.000000, 4.000000)" },
                      react.createElement("rect", { x: "0", y: "6", transform: "matrix(2.535181e-06 1 -1 2.535181e-06 18.1107 6.0369)", fill: "#535C6C", width: "12.1", height: "12.1" }),
                      react.createElement("rect", { x: "6", y: "0", transform: "matrix(2.535182e-06 1 -1 2.535182e-06 18.1107 -6.0369)", fill:"#1FBAD6", width: "12.1", height: "12.1" })
                    ),
                    react.createElement(
                      "g",
                      {},
                      react.createElement("path", { fill:"#1FBAD6", d: "M39,8.7h2.2l-2.8,4.2l2.9,5.1H39l-2.4-4.2h-1.3V18h-2V5l2-0.1v7.3h1.3L39,8.7z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M42.4,13.3c0-1.5,0.4-2.7,1.1-3.5s1.8-1.2,3.1-1.2c1.3,0,2.2,0.4,2.8,1.1c0.6,0.7,0.9,1.8,0.9,3.3 c0,0.4,0,0.8,0,1.1h-5.8c0,1.6,0.8,2.4,2.4,2.4c1,0,2-0.2,2.9-0.6l0.2,1.7c-0.4,0.2-0.9,0.4-1.4,0.5s-1.1,0.2-1.7,0.2 c-1.5,0-2.6-0.4-3.3-1.2C42.8,16.1,42.4,14.9,42.4,13.3z M46.6,10.1c-0.7,0-1.2,0.2-1.5,0.5c-0.4,0.4-0.6,0.9-0.6,1.7h4 c0-0.8-0.2-1.4-0.5-1.7S47.2,10.1,46.6,10.1z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M57.1,18.2c-1,0-1.8-0.3-2.3-0.9l0,0l0,1.3v2.5h-2V8.7h1.5l0.3,0.9h0c0.3-0.3,0.7-0.6,1.2-0.7 c0.4-0.2,0.9-0.3,1.4-0.3c1.2,0,2.1,0.4,2.7,1.1c0.6,0.7,0.9,2,0.9,3.7c0,1.6-0.3,2.8-1,3.7C59.2,17.8,58.3,18.2,57.1,18.2z M56.7,10.3c-0.4,0-0.8,0.1-1.1,0.2c-0.3,0.2-0.6,0.4-0.8,0.7v4.3c0.2,0.3,0.4,0.5,0.7,0.7c0.3,0.2,0.7,0.3,1.1,0.3 c0.7,0,1.2-0.2,1.6-0.7c0.4-0.5,0.5-1.3,0.5-2.5c0-0.8-0.1-1.4-0.2-1.8s-0.4-0.7-0.7-0.9C57.6,10.4,57.2,10.3,56.7,10.3z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M63.2,16V5l2-0.1v10.8c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.6,0.2c0.3,0,0.6,0,0.9-0.1V18 c-0.4,0.1-1,0.2-1.6,0.2c-0.8,0-1.3-0.2-1.7-0.5S63.2,16.8,63.2,16z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M68.2,13.3c0-1.5,0.4-2.7,1.1-3.5c0.7-0.8,1.8-1.2,3.1-1.2c1.3,0,2.2,0.4,2.8,1.1c0.6,0.7,0.9,1.8,0.9,3.3 c0,0.4,0,0.8,0,1.1h-5.8c0,1.6,0.8,2.4,2.4,2.4c1,0,2-0.2,2.9-0.6l0.2,1.7c-0.4,0.2-0.9,0.4-1.4,0.5s-1.1,0.2-1.7,0.2 c-1.5,0-2.6-0.4-3.3-1.2C68.6,16.1,68.2,14.9,68.2,13.3z M72.4,10.1c-0.7,0-1.2,0.2-1.5,0.5c-0.4,0.4-0.6,0.9-0.6,1.7h4 c0-0.8-0.2-1.4-0.5-1.7S73,10.1,72.4,10.1z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M80.2,8.7l0.1,1.7h0c0.3-0.6,0.7-1.1,1.1-1.4c0.4-0.3,1-0.5,1.6-0.5c0.4,0,0.7,0,1,0.1l-0.1,2 c-0.3-0.1-0.7-0.2-1-0.2c-0.7,0-1.3,0.3-1.7,0.8c-0.4,0.5-0.7,1.2-0.7,2.1V18h-2V8.7H80.2z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M83.8,17c0-0.8,0.4-1.2,1.2-1.2c0.8,0,1.2,0.4,1.2,1.2c0,0.8-0.4,1.1-1.2,1.1C84.2,18.2,83.8,17.8,83.8,17z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M88.5,18.7c0-0.8,0.4-1.4,1.2-1.8c-0.6-0.3-0.9-0.8-0.9-1.5c0-0.7,0.4-1.2,1.1-1.6c-0.3-0.3-0.6-0.6-0.7-0.9 c-0.2-0.4-0.2-0.8-0.2-1.3c0-1,0.3-1.8,0.9-2.3c0.6-0.5,1.6-0.8,2.8-0.8c0.5,0,1,0,1.4,0.1c0.4,0.1,0.8,0.2,1.1,0.4l2.4-0.2v1.5 h-1.5c0.2,0.4,0.2,0.8,0.2,1.3c0,1-0.3,1.7-0.9,2.2s-1.5,0.8-2.7,0.8c-0.7,0-1.2-0.1-1.6-0.2c-0.1,0.1-0.2,0.2-0.3,0.3 c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.6,0.2l2.7,0.2c1,0.1,1.7,0.3,2.2,0.6c0.5,0.3,0.8,0.9,0.8,1.7 c0,0.6-0.2,1.1-0.5,1.5c-0.4,0.4-0.9,0.8-1.5,1c-0.7,0.2-1.5,0.4-2.4,0.4c-1.3,0-2.3-0.2-3-0.6C88.8,20.1,88.5,19.5,88.5,18.7z M95.1,18.4c0-0.3-0.1-0.5-0.3-0.7s-0.6-0.2-1.1-0.3l-2.7-0.3c-0.2,0.1-0.4,0.3-0.5,0.5c-0.1,0.2-0.2,0.4-0.2,0.6 c0,0.4,0.2,0.8,0.5,1c0.4,0.2,1,0.3,1.8,0.3C94.2,19.5,95.1,19.2,95.1,18.4z M94.3,11.5c0-0.6-0.1-1-0.4-1.2 c-0.3-0.2-0.7-0.3-1.3-0.3c-0.7,0-1.1,0.1-1.4,0.3c-0.3,0.2-0.4,0.6-0.4,1.2s0.1,1,0.4,1.2c0.3,0.2,0.7,0.3,1.4,0.3 c0.6,0,1.1-0.1,1.3-0.4S94.3,12,94.3,11.5z" }),
                      react.createElement("path", { fill:"#1FBAD6", d: "M99.4,16V5l2-0.1v10.8c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.6,0.2c0.3,0,0.6,0,0.9-0.1V18 c-0.4,0.1-1,0.2-1.6,0.2c-0.8,0-1.3-0.2-1.7-0.5S99.4,16.8,99.4,16z" })
                    )
                  )
                );
              };

            return function App() {
              var rootElm = react.useRef(null);
              var _useState = react.useState({
                width: window.innerWidth,
                height: window.innerHeight
              });
              var windowDimension = _useState[0];
              var setDimension = _useState[1];
              react.useEffect(function sideEffect(){
                function handleResize() {
                  setDimension({width: window.innerWidth, height: window.innerHeight});
                };
                window.addEventListener('resize', handleResize);
                return function() {window.removeEventListener('resize', handleResize);};
              }, []);
              return react.createElement(
                'div',
                {style: {position: 'absolute', left: 0, width: '100vw', height: '100vh'}},
                ${options.mode === 'READ' ? 'LogoSvg(),' : ''}
                react.createElement(keplerGl.KeplerGl, {
                  mapboxApiAccessToken: mapboxToken,
                  id: "map",
                  width: windowDimension.width,
                  height: windowDimension.height
                })
              )
            }
          }(React, KeplerGl, MAPBOX_TOKEN));

          const app = (function createReactReduxProvider(react, reactRedux, KeplerElement) {
            return react.createElement(
              reactRedux.Provider,
              {store},
              react.createElement(KeplerElement, null)
            )
          }(React, ReactRedux, KeplerElement));
          /** END COMPONENTS **/

          /** Render **/
          (function render(react, reactDOM, app) {
            reactDOM.render(app, document.getElementById('app'));
          }(React, ReactDOM, app));
        </script>
        <!-- The next script will show how to interact directly with Kepler map store -->
        <script>
          /**
           * Customize map.
           * In the following section you can use the store object to dispatch Kepler.gl actions
           * to add new data and customize behavior
           */
          (function customize(keplerGl, store) {
            const datasets = ${JSON.stringify(options.datasets)};
            const config = ${JSON.stringify(options.config)};

            const loadedData = keplerGl.KeplerGlSchema.load(
              datasets,
              config
            );

            store.dispatch(keplerGl.addDataToMap({
              datasets: loadedData.datasets,
              config: loadedData.config,
              options: {
                centerMap: false
              }
            }));
          }(KeplerGl, store))
        </script>
      </body>
    </html>
  `;
};
