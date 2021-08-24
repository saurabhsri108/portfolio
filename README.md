
# Portfolio Website Project
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

This is my current Portfolio that is build from scratch using typescript, html, and css.



## Optimizations

Optimizations for Performance improvements is given the maximum attention to reduce the rendering time on first paint.

Here's something I did to improve the loading time of the page:

 - Used facade technique for iframes of YouTube Videos.
 - Used Imagekit CDN for profile image and loaded them using on the go transformation.
 - Used the following technique to load googleFonts:

    ```html
    <link rel="stylesheet" href="link_to_google_font&display=swap" media="print" onload="this.media='all'">
    <noscript>
        <link type="text/css" rel="stylesheet" href="link_to_google_font&display=swap">
    </noscript>
    ```
 - The usage of media="print" makes sure that page doesn't get blocked during critical rendering process and once the load completes, it replaces the media to 'all' for the effect to happen.
 

  
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  
## Authors

- [@vasudeveloper001](https://www.github.com/vasudeveloper001)

  