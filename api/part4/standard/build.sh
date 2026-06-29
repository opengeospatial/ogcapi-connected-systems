#!/bin/sh
ln -sfn ../openapi openapi
metanorma compile --agree-to-terms -t ogc -x html 23-004r0.adoc
