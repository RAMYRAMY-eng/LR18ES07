var wms_layers = [];

var format_Northeastgeo_0 = new ol.format.GeoJSON();
var features_Northeastgeo_0 = format_Northeastgeo_0.readFeatures(json_Northeastgeo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Northeastgeo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Northeastgeo_0.addFeatures(features_Northeastgeo_0);
var lyr_Northeastgeo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Northeastgeo_0, 
                style: style_Northeastgeo_0,
                popuplayertitle: "North east geo",
                interactive: true,
    title: 'North east geo<br />\
    <img src="styles/legend/Northeastgeo_0_0.png" /> Quaternaire<br />\
    <img src="styles/legend/Northeastgeo_0_1.png" /> Quaternaire continentale<br />\
    <img src="styles/legend/Northeastgeo_0_2.png" /> Quaternaire-Tyrrhénien<br />\
    <img src="styles/legend/Northeastgeo_0_3.png" /> Pliocène marin<br />\
    <img src="styles/legend/Northeastgeo_0_4.png" /> Messinien-Pliocène<br />\
    <img src="styles/legend/Northeastgeo_0_5.png" /> Serravallien-Tortonien<br />\
    <img src="styles/legend/Northeastgeo_0_6.png" /> Langhien-Serravallien<br />\
    <img src="styles/legend/Northeastgeo_0_7.png" /> Miocène inférieur marin<br />\
    <img src="styles/legend/Northeastgeo_0_8.png" /> Oligocène supérieur-Miocène inférieur<br />\
    <img src="styles/legend/Northeastgeo_0_9.png" /> Oligocène<br />\
    <img src="styles/legend/Northeastgeo_0_10.png" /> Oligocène supérieur<br />\
    <img src="styles/legend/Northeastgeo_0_11.png" /> Oligocène inférieur<br />\
    <img src="styles/legend/Northeastgeo_0_12.png" /> Eocène supérieur<br />\
    <img src="styles/legend/Northeastgeo_0_13.png" /> Eocène inférieur<br />\
    <img src="styles/legend/Northeastgeo_0_14.png" /> Maastrichtien-Paléocène<br />\
    <img src="styles/legend/Northeastgeo_0_15.png" /> Campanien-Maastrichtien<br />\
    <img src="styles/legend/Northeastgeo_0_16.png" /> Turonien-Santonien<br />\
    <img src="styles/legend/Northeastgeo_0_17.png" /> Turonien<br />\
    <img src="styles/legend/Northeastgeo_0_18.png" /> Albien-Cénomanien<br />\
    <img src="styles/legend/Northeastgeo_0_19.png" /> Aptien<br />\
    <img src="styles/legend/Northeastgeo_0_20.png" /> Valanginien-Aptien<br />\
    <img src="styles/legend/Northeastgeo_0_21.png" /> Berriasien-Aptien<br />\
    <img src="styles/legend/Northeastgeo_0_22.png" /> Jurassique<br />\
    <img src="styles/legend/Northeastgeo_0_23.png" /> Trias<br />\
    <img src="styles/legend/Northeastgeo_0_24.png" /> Roche Volcanique<br />'
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Failles_3 = new ol.format.GeoJSON();
var features_Failles_3 = format_Failles_3.readFeatures(json_Failles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Failles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Failles_3.addFeatures(features_Failles_3);
var lyr_Failles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Failles_3, 
                style: style_Failles_3,
                popuplayertitle: "Failles",
                interactive: true,
                title: '<img src="styles/legend/Failles_3.png" /> Failles'
            });

lyr_Northeastgeo_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_Failles_3.setVisible(true);
var layersList = [lyr_Northeastgeo_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_Failles_3];
lyr_Northeastgeo_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code': 'Code', 'CHRONO': 'CHRONO', 'NOM_FOR': 'NOM_FOR', 'DES_PET': 'DES_PET', 'PERMEA': 'PERMEA', 'Shape_Leng': 'Shape_Leng', 'CCFP': 'CCFP', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Failles_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'type': 'type', 'code': 'code', 'Shape_Leng': 'Shape_Leng', });
lyr_Northeastgeo_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Code': 'TextEdit', 'CHRONO': 'TextEdit', 'NOM_FOR': 'TextEdit', 'DES_PET': 'TextEdit', 'PERMEA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'CCFP': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Failles_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'type': 'TextEdit', 'code': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Northeastgeo_0.set('fieldLabels', {'OBJECTID': 'no label', 'Code': 'no label', 'CHRONO': 'no label', 'NOM_FOR': 'no label', 'DES_PET': 'no label', 'PERMEA': 'no label', 'Shape_Leng': 'no label', 'CCFP': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Failles_3.set('fieldLabels', {'OBJECTID': 'no label', 'type': 'no label', 'code': 'no label', 'Shape_Leng': 'no label', });
lyr_Failles_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});