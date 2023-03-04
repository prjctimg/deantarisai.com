## Utilities API (draft)

`classicPalettes()`

Params: `baseColor`

This function takes a single base color and returns a `Map` object with the palette type as key and an array of hex codes as values.
 Currently returns:
- Split complimentary
- Monochromatic
- Tetradic
- Triadic
- Analogous

*Plans to support more palette types are currently in development.

#### Example
```
Code example goes here
```

`tonalPalette()`
Params: `baseColor` Any recognizable color token. 


This function takes a color and returns a tonal palette as an array with 13 color values as per Google's Material Design Guidelines.  

## Example
```
Code example goes here
```

`hueShiftPalette()`

Params: (baseColor)=>(minLightness=10,maxLightness=90)=>(hueStep) 
*This function is curried. You can see how to work with curried functions [here](https://www.google.com/amp/s/www.geeksforgeeks.org/what-is-currying-function-in-javascript/amp/)

As a color becomes lighter, its hue shifts up; as it becomes darker, it shifts down. This technique helps ensure shades/tints of a color are vivid and impactful.(see the original source code [here](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/). It returns an array with the color values.

## Example
```
Code example goes here
```
