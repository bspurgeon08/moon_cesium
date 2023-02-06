
let moonEllipsoid = Cesium.Ellipsoid.MOON;
var moon = {
  x: 1737400.0,
  y: 1737400.0,
  z: 1735970.0,
  baseColor: Cesium.Color.BLUE,
  defaultImagery: 'planetary-imagery/moon.jpg'
}

var providerOptions = {
  url: moon.defaultImagery,
  ellipsoid: moonEllipsoid
};

let imagery = new Cesium.SingleTileImageryProvider(providerOptions);

const viewer = new Cesium.Viewer('cesiumContainer', {
  // The CesiumWidget and the Globe get Ellipsoid from Scene.mapProjection.
  mapProjection: new Cesium.GeographicProjection(moonEllipsoid),
  // Don't forget your imagery provider that uses the ellipsoid.
  imageryProvider: imagery,
  // Set some other options too.
  selectionIndicator: false,
  infoBox: false,
  baseLayerPicker: false,
  geocoder: false,
  skyAtmosphere: false
});

const scene = viewer.scene;

let referenceFramePrimitive;

viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle(-23.43378
      - 3.02081
      - 23.41718
      - 3.00629),
    fill: false,
    outline: true,
    outlineColor: Cesium.Color.BLUE,
  },
})

//const pinBuilder = new Cesium.PinBuilder();

// var position = Cesium.Cartesian3.fromDegrees(-106.690647, 36.806761, 0);
// var offset = new Cesium.Cartesian3(-150.9, 126.26, 217.7);
// Cesium.Cartesian3.add(position, offset, position);


//Striped Rectangle that mimics same area for Apollo 15 Metric Cam DEM, ColorHillshade
const instance = new Cesium.GeometryInstance({
  geometry: new Cesium.RectangleGeometry({
    ellipsoid: moonEllipsoid,
    rectangle: Cesium.Rectangle.fromDegrees(-65.9995117, -31.9995117, 179.9995117, 32.0004883),
    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
  }),
});

scene.primitives.add(
  new Cesium.Primitive({
    geometryInstances: instance,
    appearance: new Cesium.EllipsoidSurfaceAppearance({
      material: Cesium.Material.fromType("Stripe"),
    }),
  })
);

/**
 * Access to NASA Moontrek WMTS API is 403 Forbidden. 
 */
// const apollo16MetricCam = new Cesium.WebMapTileServiceImageryProvider({
//   url: 'https://trek.nasa.gov/tiles/Moon/EQ/Apollo16_MetricCam_ClrShade_Global_1024ppd',
//   layer: 'Apollo16_MetricCam_ClrShade_Global_1024ppd',
//   // style: 'default',
//   // maximumLevel: 5,
//   // format: 'image/png',
//   credit: new Cesium.Credit(''),
//   ellipsoid: moonEllipsoid
// })

// viewer.imageryLayers.addImageryProvider(apollo16MetricCam)


// console.log(apollo16MetricCam)