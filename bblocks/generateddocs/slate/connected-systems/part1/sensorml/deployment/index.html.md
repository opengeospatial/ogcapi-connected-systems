---
title: SensorML Deployment (Schema)


toc_footers:
  - Version 0.1
  - <a href='#'>SensorML Deployment</a>
  - <a href='https://blocks.ogc.org/register.html'>Building Blocks register</a>

search: true

code_clipboard: true

meta:
  - name: SensorML Deployment (Schema)
---


# SensorML Deployment `ogc.connected-systems.part1.sensorml.deployment`

A Deployment Feature in SensorML format

<p class="status">
    <span data-rainbow-uri="http://www.opengis.net/def/status">Status</span>:
    <a href="http://www.opengis.net/def/status/invalid" target="_blank" data-rainbow-uri>Invalid</a>
</p>

<aside class="warning">
Validation for this building block has <strong><a href="https://github.com/ogcincubator/ogcapi-connected-systems/blob/master/bblocks/tests/connected-systems/part1/sensorml/deployment/" target="_blank">failed</a></strong>
</aside>

# Examples

## SensorML deployment



```json
{
  "type": "Deployment",
  "id": "iv3f2kcq27gfi",
  "definition": "http://www.w3.org/ns/ssn/Deployment",
  "uniqueId": "urn:x-saildrone:mission:2025",
  "label": "Saildrone - 2017 Arctic Mission",
  "description": "In July 2017, three saildrones were launched from Dutch Harbor, Alaska, in partnership with NOAA Research...",
  "classifiers": [
    {
      "definition": "https://schema.org/DefinedRegion",
      "label": "Region",
      "value": "Arctic"
    }
  ],
  "contacts": [
    {
      "role": "http://sensorml.com/ont/swe/property/Operator",
      "organisationName": "Saildrone, Inc.",
      "contactInfo": {
        "website": "https://www.saildrone.com/",
        "address": {
          "deliveryPoint": "1050 W. Tower Ave.",
          "city": "Alameda",
          "postalCode": "94501",
          "administrativeArea": "CA",
          "country": "USA"
        }
      }
    },
    {
      "role": "http://sensorml.com/ont/swe/property/DataProvider",
      "organisationName": "NOAA Pacific Marine Environmental Laboratory (PMEL)",
      "contactInfo": {
        "website": "https://www.pmel.noaa.gov"
      }
    }
  ],
  "validTime": [
    "2017-07-17T00:00:00Z",
    "2017-09-29T00:00:00Z"
  ],
  "location": {
    "type": "Polygon",
    "coordinates": [[
      [-173.70, 53.76],
      [-173.70, 75.03],
      [-155.07, 75.03],
      [-155.07, 53.76],
      [-173.70, 53.76]
    ]]
  },
  "members": [
    {
      "href": "https://data.example.org/api/systems/2f35ofoms2l6?f=sml",
      "uid": "urn:x-saildrone:platforms:SD-1001",
      "title": "Saildrone SD-1001"
    },
    {
      "href": "https://data.example.org/api/systems/2f35ofoms2l8?f=sml",
      "uid": "urn:x-saildrone:platforms:SD-1002",
      "title": "Saildrone SD-1002"
    },
    {
      "type": "PhysicalSystem",
      "name": "Saildrone SD-1003",
      "uniqueId": "urn:x-saildrone:platforms:SD-1003",
      "typeOf": {
        "href": "https://data.example.org/api/systems/2f35ofoms2l9?f=sml"
      },
      "components": [
        {
          "name": "air_temp_sensor",
          "href": "https://data.example.org/api/systems/41548?f=sml",
          "uid": "urn:x-saildrone:sensors:temp01",
          "title": "Air Temperature Sensor"
        },
        {
          "name": "water_temp_sensor",
          "href": "https://data.example.org/api/systems/36584?f=sml",
          "uid": "urn:x-saildrone:sensors:temp02",
          "title": "Water Temperature Sensor"
        },
        {
          "name": "wind_sensor",
          "href": "https://data.example.org/api/systems/47752?f=sml",
          "uid": "urn:x-saildrone:sensors:wind01",
          "title": "Wind Speed and Direction Sensor"
        }
      ]
    }
  ],
  "links": [
    {
      "href" : "https://data.example.org/api/deployments/iv3f2kcq27gfi?f=sml",
      "rel" : "self",
      "type" : "application/sml+json",
      "title" : "this document"
    }, {
      "href" : "https://data.example.org/api/deployments/iv3f2kcq27gfi?f=json",
      "rel" : "alternate",
      "type" : "application/geo+json",
      "title" : "this resource as GeoJSON"
    }
  ]
}
```

<blockquote class="lang-specific json">
  <p class="example-links">
    <a target="_blank" href="https://ogcincubator.github.io/ogcapi-connected-systems/bblocks/tests/connected-systems/part1/sensorml/deployment/example_1_1.json">Open in new window</a>
    <a target="_blank" href="https://avillar.github.io/TreedocViewer/?dataParser=json&amp;dataUrl=https%3A%2F%2Fogcincubator.github.io%2Fogcapi-connected-systems%2Fbblocks%2Ftests%2Fconnected-systems%2Fpart1%2Fsensorml%2Fdeployment%2Fexample_1_1.json&amp;expand=2&amp;option=%7B%22showTable%22%3A+false%7D">View on JSON Viewer</a></p>
</blockquote>



# JSON Schema

```yaml--schema
$schema: http://json-schema.org/draft-07/schema#
allOf:
- $ref: ../../../../../../api/part1/openapi/schemas/sensorml/sensormlDefs.json#/definitions/Deployment
- properties:
    definition:
      const: http://www.w3.org/ns/ssn/Deployment
    links:
      description: Links to related resources
      $ref: ../../../../../../api/part1/openapi/schemas/common/links.json
  required:
  - definition

```

> <a target="_blank" href="https://avillar.github.io/TreedocViewer/?dataParser=yaml&amp;dataUrl=https%3A%2F%2Fogcincubator.github.io%2Fogcapi-connected-systems%2Fbblocks%2Fannotated-schemas%2Fconnected-systems%2Fpart1%2Fsensorml%2Fdeployment%2Fschema.yaml&amp;expand=2&amp;option=%7B%22showTable%22%3A+false%7D">View on YAML Viewer</a>

Links to the schema:

* YAML version: <a href="https://ogcincubator.github.io/ogcapi-connected-systems/bblocks/annotated-schemas/connected-systems/part1/sensorml/deployment/schema.yaml" target="_blank">https://ogcincubator.github.io/ogcapi-connected-systems/bblocks/annotated-schemas/connected-systems/part1/sensorml/deployment/schema.yaml</a>
* JSON version: <a href="https://ogcincubator.github.io/ogcapi-connected-systems/bblocks/annotated-schemas/connected-systems/part1/sensorml/deployment/schema.json" target="_blank">https://ogcincubator.github.io/ogcapi-connected-systems/bblocks/annotated-schemas/connected-systems/part1/sensorml/deployment/schema.json</a>

# For developers

The source code for this Building Block can be found in the following repository:

* URL: <a href="https://github.com/ogcincubator/ogcapi-connected-systems" target="_blank">https://github.com/ogcincubator/ogcapi-connected-systems</a>
* Path:
<code><a href="https://github.com/ogcincubator/ogcapi-connected-systems/blob/HEAD/bblocks/_sources/part1/sensorml/deployment" target="_blank">bblocks/_sources/part1/sensorml/deployment</a></code>

