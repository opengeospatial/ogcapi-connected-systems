#!/bin/sh
#libreoffice --headless --convert-to svg *.wmf
#inkscape --export-dpi=150 --export-type=png --export-area-drawing *.svg
libreoffice --headless --convert-to emf *.wmf
inkscape --export-dpi=150 --export-type=png --export-area-drawing *.emf
