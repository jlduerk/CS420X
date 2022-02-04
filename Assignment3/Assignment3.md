Assignment 3 - Reaction Diffusion
===

[Project](https://jlduerk.github.io/CS420X/Assignment3/assignment3.html)

[Repository](https://github.com/jlduerk/CS420X/tree/main/Assignment3)

### Explanation

This simulation was created to replicate reaction diffusion, with options to modify diffusion rates of chemicals A and B, as well as feed and kill rates. Additionally, a size parameter was added as well that allows the user to change the size of the reaction pattern. (The pattern becomes thinner with a smaller size.) The simulation was sped up by quadrupling the times the simulation was run per frame using two frame buffers. In order for the visuals to be black and white like the examples, the A chemical value was stored in the color channels, while the B chemical value was stored in the alpha channel. In this way, only the amount of A is shown while still maintaining the value of the B chemical. The reaction was initialized with 1.0 A in all cells and a rectangle of 1.0 B in the center.
