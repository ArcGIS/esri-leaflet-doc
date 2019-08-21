---
title: Utilities
layout: documentation.hbs
---

# L.esri.Util

Utility methods used internally by Esri Leaflet. These methods are useful for converting data between ArcGIS and Leaflet formats.

<table>
    <thead>
        <tr>
            <td>Method</td>
            <td>Returns</td>
            <td>Description</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>extentToBounds({{{param 'Extent' 'extent' 'https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm#ENVELOPE'}}})</code></td>
            <td><code><a href="https://leafletjs.com/reference.html#latlngbounds">LatLngBounds</a></code></td>
            <td>Converts ArcGIS Extent objects to Leaflet <a href="https://leafletjs.com/reference.html#latlngbounds">LatLngBounds</a> objects.</td>
        </tr>
        <tr>
            <td><code>boundsToExtent({{{param 'LatLngBounds' 'bounds' 'https://leafletjs.com/reference.html#latlngbounds'}}})</code></td>
            <td><code><a href="https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm#ENVELOPE">Extent</a></code></td>
            <td>Converts Leaflet <a href="https://leafletjs.com/reference.html#latlngbounds">LatLngBounds</a> objects to ArcGIS Extent objects.</td>
        </tr>
        <tr>
            <td><code>arcgisToGeoJSON({{{param 'ArcGIS Geometry' 'arcgis' 'https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm'}}})</code><br><code>arcgisToGeoJSON({{{param 'ArcGIS Feature' 'arcgis' 'https://developers.arcgis.com/documentation/common-data-types/feature-object.htm'}}})</code></td>
            <td><code><a href="https://tools.ietf.org/html/rfc7946#section-3">GeoJSON</a></code></td>
            <td>Converts <a href="https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm">ArcGIS Geometry Objects</a> or <a href="https://developers.arcgis.com/documentation/common-data-types/feature-object.htm">ArcGIS Feature Objects</a> to <a href="https://tools.ietf.org/html/rfc7946#section-3">GeoJSON</a>. If you pass a GeoJSON Feature or FeatureCollection you should also pass <code>idAttribute</code> to assign a property from the feature attributes to the ID of the GeoJSON Feature, <code>'OBJECTID'</code> or <code>'FID'</code> attributes by default.</td>
        </tr>
        <tr>
            <td>geojsonToArcGIS({{{param 'GeoJSON' 'geojson' 'https://tools.ietf.org/html/rfc7946#section-3'}}}, {{{param 'String' 'idAttribute'}}})</td>
            <td><code>Object</code></td>
            <td>Converts <a href="https://tools.ietf.org/html/rfc7946#section-3">GeoJSON</a> objects to <a href="https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm">ArcGIS Geometry Objects</a> or <a href="https://developers.arcgis.com/documentation/common-data-types/feature-object.htm">ArcGIS Feature Objects</a>. If you pass a GeoJSON Feature or FeatureCollection you should also pass <code>idAttribute</code> to assign a property in the output features to represent the features id, <code>'OBJECTID'</code> by default.</td>
        </tr>
        <tr>
            <td>responseToFeatureCollection({{{param 'Object' 'response'}}}, {{{param 'String' 'idAttribute'}}})</td>
            <td><code><a href="https://tools.ietf.org/html/rfc7946#section-3.3">FeatureCollection</a></code></td>
            <td>Converts an API response (returned by identify, query or find API methods) to a <a href="https://tools.ietf.org/html/rfc7946#section-3.3">GeoJSON FeatureCollection</a>. This is used internally by <code><a href="{{assets}}api-reference/tasks/query.html">L.esri.Query</a></code>, <code><a href="{{assets}}api-reference/tasks/identify-features.html">L.esri.IdentifyFeatures</a></code> and <code><a href="{{assets}}api-reference/tasks/find.html">L.esri.Find</a></code> to convert responses.</td>
        </tr>
        <tr>
            <td>cleanUrl({{{param 'String' 'url'}}})</td>
            <td><code>String</code></td>
            <td>Used internally to ensure that URLs have no leading or trailing whitespace and have a leading slash.</td>
        </tr>
    </tbody>
</table>
