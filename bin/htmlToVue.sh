#!/bin/sh

# Copyright 2020 Imre Tabur <imre.tabur@eesti.ee>

HTML_FILE_NAME=${1}
VUE_FILE_NAME=${2}

echo "<template>"							>  ${VUE_FILE_NAME}
echo "<div class=\"odt\">"						>> ${VUE_FILE_NAME}
cat  ${HTML_FILE_NAME}							>> ${VUE_FILE_NAME}
echo "</div>"								>> ${VUE_FILE_NAME}
echo "</template>" 							>> ${VUE_FILE_NAME}
echo "<script src=\"./odtComponent.js\" />" 				>> ${VUE_FILE_NAME}
echo "<style scoped src=\"./odtComponent.less\" lang=\"less\"/>"	>> ${VUE_FILE_NAME}
echo "<style scoped src=\"./odtComponent.scss\" lang=\"sass\"/>"	>> ${VUE_FILE_NAME}

exit 0
