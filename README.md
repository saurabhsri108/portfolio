
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
 
![Before Optimization LightHouse Portfolio](https://user-images.githubusercontent.com/56103269/130655708-7812e8f4-6732-4358-a375-d8f47294daa7.png)
![After Optimization LightHouse Portfolio - version 4](https://user-images.githubusercontent.com/56103269/130655800-0863e05f-9d37-4827-a6d0-6754289c8f7a.png)
![After Optimization Desktop LightHouse Portfolio - version 4](https://user-images.githubusercontent.com/56103269/130655818-b4793d84-9b43-4e76-822f-a885a0bfaef3.png)


  
## Screenshots

![Portfolio-Desktop-Screenshot](https://user-images.githubusercontent.com/56103269/130655559-53560cba-c2db-42be-b1e6-e6f22e931f41.png)
![Portfolio-Mobile-Screenshot](https://user-images.githubusercontent.com/56103269/130655583-1b2e3862-99e7-4fab-a5c0-c81dee047c0e.png)


  
## Authors

- [@vasudeveloper001](https://www.github.com/vasudeveloper001)

  
