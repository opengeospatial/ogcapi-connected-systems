# Saildrone USV Examples

The following are examples of API resources used to model the [Saildrone](https://www.saildrone.com) use case.

Saildrone platforms are wind-powered Unmanned Surface Vehicles (USV) that can be deployed for long periods at sea. They can cross oceans in a fully autonomous manner.


## Platform

* Saildrone Explorer Platform [SensorML](systems/saildrone-platform-SD1021-sml.json)


## Deployments

* Atlantic 1021 Mission [SensorML](deployments/saildrone-mission-2131-sml.json)


## Sensors

* CTD Sensor [SensorML](systems/saildrone-sensor-ctd-sml.json)
* Temp/RH Sensor [SensorML](systems/saildrone-sensor-temp-rh-sml.json)


## Datasheets

* Seabird SBE37SM (CTD) [SensorML](procedures/saildrone-sensor-SBE37SM-sml.json)
* Rotronic HC2 (Air Temp/RH) [SensorML](procedures/saildrone-sensor-HC2IM402-sml.json)


## Sampling Features

* Water Sampling Point [GeoJSON](sampling/saildrone-SD1021-watersf-geojson.json)
* Atmospheric Sampling Point [GeoJSON](sampling/saildrone-SD1021-atmsf-geojson.json)
* Nav Sampling Point (GPS Antenna) [GeoJSON](sampling/saildrone-SD1021-navsf-geojson.json)


## Datastreams & Observations

**Water Temp/Salinity** 
* CTD Datastream [JSON](datastreams/saildrone-ctd-datastream.json)
* CTD Obs Schema [JSON](datastreams/saildrone-ctd-obs-schema-omjson.json)
* CTD Observation [OM-JSON](observations/saildrone-ctd-obs.json)

**Weather**
* Weather Datastream [JSON](datastreams/saildrone-weather-datastream.json)
* Weather Obs Schema [JSON](datastreams/saildrone-weather-obs-schema-omjson.json)
* Weather Observation [OM-JSON](observations/saildrone-weather-obs.json)

**Navigation**
* Navigation Datastream [JSON](datastreams/saildrone-nav-datastream.json)
* Navigation Obs Schema [JSON](datastreams/saildrone-nav-obs-schema-omjson.json)
* Navigation Observation [OM-JSON](observations/saildrone-nav-obs.json)

