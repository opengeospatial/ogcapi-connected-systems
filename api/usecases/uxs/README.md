# Unammed Systems (UxS) Examples

The following are examples of API resources related to Unmanned Vehicles use cases.


## Unmanned Surface Vehicle (USV)

These examples are based on a [Saildrone](https://www.saildrone.com) platform.

### Platform

* [SensorML](systems/saildrone-platform-SD1021-sml.json)

### Sensors

* CTD Sensor [SensorML](systems/saildrone-sensor-ctd-sml.json)
* Temp/RH Sensor [SensorML](systems/saildrone-sensor-temp-rh-sml.json)

### Datasheets

* Seabird SBE37SM (CTD) [SensorML](procedures/saildrone-sensor-SBE37SM-sml.json)
* Rotronic HC2 (Air Temp/RH) [SensorML](procedures/saildrone-sensor-HC2IM402-sml.json)

### Sampling Features

* Water Sampling Point [GeoJSON](sampling/saildrone-SD1021-watersf-geojson.json)
* Atmospheric Sampling Point [GeoJSON](sampling/saildrone-SD1021-atmsf-geojson.json)
* Nav Sampling Point (GPS Antenna) [GeoJSON](sampling/saildrone-SD1021-navsf-geojson.json)

### Deployments

* Atlantic 1021 Mission [SensorML](deployments/saildrone-mission-2131-sml.json)

### Datastreams

* CTD Datastream [JSON](datastreams/saildrone-ctd-datastream.json)
* CTD Obs Schema [JSON](datastreams/saildrone-ctd-obs-schema-omjson.json)

* Weather Datastream [JSON](datastreams/saildrone-weather-datastream.json)
* Weather Obs Schema [JSON](datastreams/saildrone-weather-obs-schema-omjson.json)

### Observations

* CTD Observation [OM-JSON](observations/saildrone-ctd-obs.json)
* Weather Observation [OM-JSON](observations/saildrone-weather-obs.json)