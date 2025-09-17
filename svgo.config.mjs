export default {
  multipass: true,
  plugins: [
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeEditorsNSData",
    "cleanupAttrs",
    "minifyStyles",
    "convertStyleToAttrs",
    "cleanupIDs",
    "removeUselessDefs",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "removeHiddenElems",
    "removeEmptyText",
    "collapseGroups",
    "convertPathData",
    "mergePaths",
    // keep viewBox for responsiveness
    { name: "removeViewBox", active: false },
    // IMPORTANT: strip embedded rasters (your little picture)
    "removeRasterImages"
  ]
};
