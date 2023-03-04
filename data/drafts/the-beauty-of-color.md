### Palettes,themes and color schemes.

The arsenal of design tools today is amazing. From AI based apps that can do the job for you with little input to advanced ones that allow you to tweak all the details,the options are endless.

I had always been inspired by Google's Material Design theme generator that makes picking a palette for designing your next project a breeze. The experience is simplified and requires minimum input from the user thereby taking away the fuss that comes along with picking the right colors that can push your brand message.

However, being a programmer I have an odd attraction to dealing with complexities and that set me on the path to try and extend the reasoning of Google into different fields like generative art. Color is an interesting topic in frontend development and sometimes I feel like its not given as much attention as it deserves.

And then as I was browsing on GitHub for repositories that had any JavaScript based source code for dealing with color manipulations and conversions I stumbled upon Culori, an open source library for handling  scenarios like these. The API exposes functional utilities capable of being chained to produce different color outputs and in CSS convenient formats.


Having read [George Francis' post](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/) on dealing with color programmatically I became aware of the near endless possibilities of the tools that could be created with this library. I immediately embarked on drafting features I had wanted or would expect from a color tool basing the functionality from Culori's API.

Though it is in its infancy, efforts are underway to marshal open source contributions to the project so that frontend developers from all backgrounds can help shape up the functionalities. The tools out there may have attained this goal but the point is not to compete with the available choices but to allow room for developers to experiment and explore color in new (although nothing is new under the sun) and whacky but creative ways. After all, opinions and approaches differ for the same problems which is why we have many frameworks that solve the same problems but with different attitude. The project aims to do the same.


#### WTF is huetiful😂???

Naming things is hard (kinda makes me wonder how Adam managed to name everything after creation 🤔) but we can't avoid it because names give things an identity. With nearly all the good names taken I decided to be unconventional in picking a moniker for the project. I combined hue (which means a shade or color) and beautiful hence the name "huetiful" which means beautiful colour 🙃. 

### What am I trying to achieve?

I've been surfing the internet and I will admit that there's been a lot of effort to advance color science. There's a project called [colormind](https://colormind.io) and its an online color scheme generator that uses machine learning to generate the colors. The generator refreshes every 10 seconds returning new color scales every interval. 

Taking inspiration from projects like these it is possible to extend this idea into generative art. 

### Details, details and yet more details

The goal is to create a focused and simple to use API that implements the best practices out there like functional programming to make the library easy to consume and/or extend.

Using the JavaScript superset, Typescript, it's possible to define interfaces for the different types of color objects (to be honest I'm drafting what the outcome of this will be. Patience...)

The API should expose multiple ways to create custom palettes,themes and color schemes all with the benefits of being concise, functional and allowing the developer to chain the utilities to compose more complex behaviour or output. Enter lodash, an open source JavaScript library for facilitating functional programming. Using this module it would be possible to create encapsulated code that removes unnecessary complexities from userland whilst forcing the codebase to follow an easy to maintain pattern making contribution and maintenance a breeze. Honestly though,this is a mere dump of handy utilities for playing around with color in crazy ways


### Now what?

Right now the project is in its infancy stage but a public repository has been created and is open for anyone willing to contribute. And since this is a novel idea in a way, we'll be building in public so that we can gather all criticism positive or otherwise in the hopes of making this a joint effort and something that frontend developers can reach out to when there's a need for crazy creativity. 

We hope to see you there!👋

