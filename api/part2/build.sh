#!/bin/sh
asciidoctor -a data-uri -o standard_document.html standard/standard_document.adoc

#asciidoctor-pdf --safe -o standard_document.pdf standard_document.adoc
