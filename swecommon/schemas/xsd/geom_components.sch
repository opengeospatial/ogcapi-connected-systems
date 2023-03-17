<?xml version="1.0" encoding="UTF-8"?>
<!--
    SWE Common is an OGC Standard.
    Copyright (c) 2010 Open Geospatial Consortium. 
    To obtain additional rights of use, visit http://www.opengeospatial.org/legal/ .
-->
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
    <sch:title>Additional validation rules for XML instances including geometry data components</sch:title>
    <sch:ns uri="http://www.opengis.net/swe/2.0" prefix="swe"/>
    <sch:ns uri="http://www.opengis.net/gml/3.2" prefix="gml"/>
    <sch:pattern>
        <sch:title>Req 51</sch:title>
        <sch:rule context="//swe:Geometry/swe:value/gml:MultiCurve/gml:curveMember">
            <sch:assert test="gml:LineString">
                Only MultiLineString is supported so a MultiCurve shall only contain LineString elements.
            </sch:assert>
        </sch:rule>
        <sch:rule context="//swe:Geometry/swe:value/gml:MultiSurface/gml:surfaceMember">
            <sch:assert test="gml:Polygon">
                Only MultiPolygon is supported so a MultiSurface shall only contain Polygon elements.
            </sch:assert>
        </sch:rule>
    </sch:pattern>
</sch:schema>