Assignment 2 - WebGL Intro
===

[Project](https://jlduerk.github.io/CS420X/Assignment2/index.html)

[Repository](https://github.com/jlduerk/CS420X/tree/main/Assignment2)

### Explanation

For this project, I began by adding a brightness modifier. This was done by multiplying the modifier to all the color values. I used dat.GUI for sliders and checkboxes that can be controlled by the user. (TweakPane was not working for me.) I then added the option to invert all the colors. The noise function was created referencing the domain warping example from the Book of Shaders. Finally, a pixelation option was created by duplicating pixels to their neighboring pixels to create a certain resolution. I also made this resolution changeable with a slider.

Aesthetically, I aimed to create a stormy visual. This was achieved by increasing brightness, turning on the invert and noise options. I created the noise to look like stormclouds when the invert option was turned on, so by default it is a grey-orange color so that it turns a dark blue. I struggled with the pixelation, as I wasn't able to make it pixelate the noise and the noise just overlays the pixels, which is not quite the aesthetic vision I was going for. However, I do like how the pixelation can be edited so that it can make you look like an 8-bit figure or a video game avatar.


### Feedback

I got my feedback from Karen. She said that she liked the pixelate and pixel resolution combo and thought it was neat. She also thought it was smart to use invert as an input, and the noise was interesting and seemed bark-like. This is unexpected for me because I never really observed much how the noise looked without invert on, so I was focused on making it look good with the invert and didn't realize it looked like bark without the invert.
