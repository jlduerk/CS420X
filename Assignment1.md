Assignment 1 - Shader Live Coding
===

[Video](https://youtu.be/Tggh8flsgFc)

[Code](https://github.com/jlduerk/CS420X/blob/main/Assignment1Code)

### Explanation
This shader was created by layering different effects onto each other. First, the background color was created as a gradient from light on top to a little darker on the bottom. Additionally, I was able to make the background go from dark to light and back by adding a sin of time to this color. Then, I created the wavy, color changing "northern lights" effect by using sin functions in two four loops, one for the more vertical streaks and one for the more horizontal ones. I added in some white wavy lines using the sin function as well. The horizontal flying light streaks were made using the same effect but modifying the values. I used a random generator to create sparse twinkling stars in the background. The twinkling is due to the fact that it was being multiplied by time, and I modified the numbers in the vec2 until it was not too many stars.

Aesthetically, I wanted to go for a night sky. I used purple, blue, and green colors on a dark background to replicate the northern lights. Additionally, the sky would slowly transition from light to dark and back to indicate day and night cycles. The background has twinkling stars that I aimed not to detract from the lights themselves. I also created moving lights in the middle that look to me like starships, which align with my theme of the sky and space.

### Feedback

I received feedback from Karen. Her first impression was that it looked like a galaxy, and she thought it was very glowy. She enjoyed that it looked like space as well as the addition of the alien ships in the middle, which she said looked like people trying to travel. In general, her feedback aligns with my original goals for this project.
