# Chaos-Fundamentum

A minimalistic, elegant, flat CSS-frontend-framework. Good base for all sorts of web-projects. Inspired by Twitter's Bootstrap.

Intended support for
 * IE 10+
 * Firefox 24+
 * Chrome 21+
 * Safari 5.1+
 * Opera 12.1+
 * iOS Safari 5.1+
 * Android Browser 4+

## CSS

Only editing the three SASS-files in `css/` is needed, to customize your installation. Then, build your file with SASS.

### chaos

Omit any module, that you don't need to minimize your file-size. Only modules and components should be omitted, as the core-elements and print-styles are mandatory.

### fonts

Use this file to import your custom web fonts (e.g. from Google Fonts).

### variables

This file provides all the customization of the framework. Just change colors, styles, and sizings in this file without the need of touching anything else.

## JavaScript

The chaos/chaos.js is the central file that contains commands for the [Prepros tool](http://alphapixels.com/prepros/) on how to assemble the complete file. Hint: A `prepros.json` is provided, so you can easily build *Chaos Fundamentum* with the mentioned tool.
