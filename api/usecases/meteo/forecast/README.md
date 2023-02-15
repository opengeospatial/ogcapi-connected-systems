# Weather Forecast Examples

The following are examples of API resources used to model a weather forecast use case.


## Forecast Model (Procedure)

The forecast model (i.e. the algorithm itself) is modeled as a Procedure.

* [SensorML](procedures/ECMWF-HRES-forecast-model-sml.json)


## Forecasting System

The system running the forecast is modeled as a System of type Process (SimpleProcess in SensorML).

* [GeoJSON](systems/ECMWF-HRES-forecast-system-geojson.json)
* [SensorML](systems/ECMWF-HRES-forecast-system-sml.json)


## Sampling Features

The sampling feature is the entire surface of the globe:

* Worldwide Sampling Surface [GeoJSON](sampling/earth-surface-sampling-surface-geojson.json)


## Datastreams

In this example, we create a different datastream for each parameter and for each run. Thus, each datastream has a its result time set to the run time (time instant) while the phenomenon time range reflects the time horizon of each run (i.e. run time + 10 days).

Observation results are provided out-of-band through a WMS service.

**Surface Pressure (sp)**

* Datastream Description [JSON](datastreams/surface-pressure-datastream.json)
* Observation Schema [JSON](datastreams/surface-pressure-obs-schema-omjson.json)
* Observation [OM-JSON](observations/surface-pressure-obs.json)

**2m Surface Temperature (2t)**

* Datastream Description [JSON](datastreams/surface-temperature-datastream.json)
* Observation Schema [JSON](datastreams/surface-temperature-obs-schema-omjson.json)
* Observation [OM-JSON](observations/surface-temperature-obs.json)

