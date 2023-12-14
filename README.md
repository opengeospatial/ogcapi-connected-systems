<img height="100" src="https://raw.githubusercontent.com/opengeospatial/connected-systems/master/logo.jpg">

# Connected Systems Standards Working Group

<br/>

## Overview

The Connected Systems SWG is focused on modernization of the SensorML and related Sensor Web Enablement (SWE) Standards, with an inclusive eye toward all manner of connected systems. This work includes the maintenance and update of SensorML, including finalization of the JSON encodings, adapting modern, RESTful approaches to SWE Standards (for discovery, , observation access, tasking, and processing), and integration of these updated Standards with other OGC APIs.


## Background

For more than two decades, the OGC community has enabled the transformation of all manner of devices into location-enabled, geographically-aware, connected systems.  The OGC community’s focus indeed began its journey by connecting systems that might be considered geospatial sensor systems.  Historically, the OGC's [Sensor Web Enablement](https://www.ogc.org/node/698) initiative has developed a generic framework for delivering sensor data, dealing with remote-sensing, moving platforms, and in-situ monitoring and sensing.  

The contemporaneous emergence of the Internet of Things (IoT) as a concept led many innovators and organizations to wrestle with the best technical strategies for connecting these simple devices.  Many lightweight IoT wireless protocols (e.g. LoRA, Zigbeen BLE, WiFi, 5G, etc.) and messaging protocols ([MQTT](https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html), AMQP, CoAP, etc.) emerged that created new options for connecting not only “Things”, but all kinds of systems. The OGC embraced this world of lightweight protocols for simple devices, launching its own [SensorThings API](https://ogcapi.ogc.org/sensorthings), which introduced a number of these IoT protocols to other parts of the wider OGC architecture.

Meanwhile, the miniaturization and commoditization of sensors, and innovation in actuators and advanced processing meant an explosion in related sectors like control systems, smart buildings, smart cities, robotics, and the wider field of autonomy.  Huge numbers of remote sensing and communications satellites have been put in orbit, and drones of all kinds (e.g, UAS, UGV, UUV/USV, etc) have become dynamic platforms for not only sensing, but undertaking all manner of tasks.  The expectation quickly became that all of these systems would be connected.  For some, the Internet of Things became the Internet of Everything.  But yet, just as the Internet was supercharged by the World Wide Web, the Internet of Things would require a broader set of web standards to supercharge its future.

One key piece to this was the development of a coherent set of standard semantic definitions for describing such systems.  The OGC and the W3C partnered in the development of the [Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn), drawing heavily from prior work on [SensorML](https://www.ogc.org/standards/sensorml) and [O&M](https://www.ogc.org/standards/om).  These and complementary definitions laid the groundwork for the coherent integration of connected systems in a way that could capture and convey meaning.

In the US, the National Institute for Standards and Technology launched its focus on [Smart Connected Systems](https://www.nist.gov/programs-projects/smart-and-connected-systems), recognizing that all of these various kinds of devices are ultimately systems that need to be connected in order to fulfill the tasks that we as users desire them to undertake on our behalf.  


## Connected Systems API

It is in this context that we propose a draft OGC API - Connected Systems Standard.  It is built upon accepted web formats such as GeoJSON as well as existing OGC information models, including [SensorML](https://www.ogc.org/standards/sensorml), [Observations and Measurements (O&M)](https://www.ogc.org/standards/om) (now called Observations, Measurements and Samples), [SWE Common Data Model](https://www.ogc.org/standards/swecommon), and the [Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn) (SOSA/SSN). It also inherits from the design patterns that have long underpinned the OGC SWE architecture, and that will be incorporated within a modern RESTful API that follows the OGC API strategic guidance.

The API is intended to act as a bridge between static data (geographic and other domain features) and dynamic data (observations of these feature properties, and commands/actuations that change these feature properties). To this end, **the API will be an extension of the [OGC API - Features](https://ogcapi.ogc.org/features)** and, in addition to providing its own mechanism for retrieving static and dynamic data, the API will allow linking to other APIs from the OGC ecosystem, such as [3D GeoVolumes](https://ogcapi.ogc.org/geovolumes/), [3D Tiles](https://github.com/CesiumGS/3d-tiles/tree/main/specification), [Coverages](https://ogcapi.ogc.org/coverages), [EDR](https://ogcapi.ogc.org/edr), [SensorThings](https://ogcapi.ogc.org/sensorthings), [Moving Features](https://ogcapi.ogc.org/movingfeatures), [Processes](https://ogcapi.ogc.org/processes), and other Features API instances.

The proposed API Standard consists of two parts and defines several resource types:

Part 1 - Feature Resources ([Current Draft Preview](https://opengeospatial.github.io/ogcapi-connected-systems/api/part1/standard/23-001r0.html), [OpenAPI Docs](https://opengeospatial.github.io/ogcapi-connected-systems/redoc/?url=../api/part1/openapi/openapi-connectedsystems-1.yaml))
- Systems (metadata of sensors, actuators, platforms, simulations, etc.)
- Procedures (metadata of procedures implemented by system, which includes automated system specs/datasheets and human driven activities)
- Deployments (metadata of system deployments)
- Sampling Features (metadata about sampling geometries/methodologies used by observing systems) 
- Subsystems / Components
- Property Definitions (semantical information for observed properties, controlled properties and system properties)

Part 2 - Dynamic Data ([Current Draft Preview](https://opengeospatial.github.io/ogcapi-connected-systems/api/part2/standard/23-002r0.html), [OpenAPI Docs](https://opengeospatial.github.io/ogcapi-connected-systems/redoc/?url=../api/part2/openapi/openapi-connectedsystems-2.yaml))
- Data Streams
- Observations
- Control Streams
- Commands and Command Status
- System Events

Part 3 - Pub/Sub ([AsyncAPI Docs](https://github.com/opengeospatial/ogcapi-connected-systems/blob/master/api/part2/asyncapi/asyncapi-connectedsystems-2.yaml))
- MQTT Bindings
- AMQP Bindings

Beyond the above resource types, a few query parameters are added to the ones defined by OGC API - Features:
- WKT geometry filter
- Full-text search based on keywords and prefix
- Filter on feature property values
- Filter on associated resource IDs (e.g. find all systems implementing a given procedure, all datastreams for a certain observable, etc.)

Certain types of join queries may be defined in a future extension.

A key objective of this API is to support, not only JSON based encodings, but also efficient binary encodings for observations and commands (e.g. protobuf). Initially, we plan to support the following formats:

For feature data:
- [GeoJSON](https://geojson.org/)
- [JSON-FG](https://docs.ogc.org/DRAFTS/21-045.html)
- SensorML (JSON and XML)
- FlatGeoBuff

For datastreams, controls, observations and commands:
- O&M (JSON and XML)
- SWE Common schema (JSON and XML)
- SWE Common data (JSON, text, binary, protobuf)


## Work Items

This SWG will work on the following tasks:

### SensorML Update
The SWG will undertake an update of the [SensorML Standard](https://www.ogc.org/standards/sensorml), including the needs of the Observations & Measurements (O&M) community, with a particular focus on JSON encodings.

### SWE Common Update
The SWG will undertake an update of the [SWE Common Data Model Standard](https://www.ogc.org/standards/swecommon) that provides data constructs used in SensorML and other OGC Standards. The SWG will also formalize the JSON encoding of SWE Common as well as work on enhanced binary bindings (e.g. protobuf).

### Connected Systems API
The SWG will revise the current draft of "OGC API - Connected Systems" Standard and complete the harmonization with [OGC API - Features](https://ogcapi.ogc.org/features). In parallel, the SWG will gather use cases involving all manner of connected systems, including sensors (e.g., space-based, airborne, mobile, in situ and terrestrial remote – of all phenomenologies), control systems, devices, robots, and various platforms, whether manned, remotely piloted, or autonomous  – in order to assure that the Connected Systems API is capable of supporting them. These use cases will help the group refine the draft spec as required.

### Connected Systems Definitions Server
The SWG will curate all of the semantic definitions required to build a future where connected systems are capable of self-describing their capabilities at the most granular level, to enable the highest possible level of interoperability. A multi-tier ontology architecture will be proposed where the most general cross-domain concepts are defined and hosted by OGC/W3C, while domain specific ontologies are hosted by other organizations, all the way down to local ontologies defined for specific projects.


## Communication

Most all work on the specification takes place in [GitHub issues](https://github.com/opengeospatial/connected_systems/issues), so browse there to get a good idea of what is happening, as well as past decisions. 


## Contributing

Anyone can get involved in the OGC’s Connected System SWG, and provide comments and feedback on the draft specification. We look forward to bringing your energy and experience together in this process to help connect all systems on Earth in a way that is location-enabled, geographically-aware, web-accessible, and secure!

The contributor understands that any contributions, if accepted by the OGC Membership, shall be incorporated into OGC Standards documents and that all copyright and intellectual property shall be vested to the OGC.

The OGC Connected Systems Standards Working Group (SWG) is the group at OGC responsible for the stewardship of the resultant Standard(s), but is working to do as much work in public as possible.

* [Open issues](https://github.com/opengeospatial/ogcapi-connected_systems/issues)
* [Copy of License Language](https://github.com/opengeospatial/ogcapi-connected_systems/blob/master/LICENSE)

Pull Requests from contributors are welcomed. However, please note that by sending a Pull Request or Commit to this GitHub repository, you are agreeing to the terms in the Observer Agreement https://portal.ogc.org/files/?artifact_id=103056


