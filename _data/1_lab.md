---
layout: mylayout.njk
---
# Lab 1 Instrutions
---

### Helpful Extensions

-   [Markdown All In One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
-   [Word Counter](https://marketplace.visualstudio.com/items?itemName=Ludwig.wordcounter)
-   [NJK Highlighter](https://marketplace.visualstudio.com/items?itemName=eseom.nunjucks-template)
---

### Instructions

-   Do a lab write-up documenting your experience using Static Site Generation (SSG).

-   The submission will be a markdown document of approximate length 1-2 pages (300-600 words), although there are no marks allocated for number of words. 

-   Read about at least 3 different template engines.  List what you think might be pro's and con's of each.  Choose 1 to use in your assignment.  Explain your choice.

-   Are there other SSG applications (other than 11ty)?  Which ones are popular?  What do you think the pro's and con's of some of the other options might be?

-   Read the configuration section of the 11ty documentation.  Which settings are we using and why?  Which settings exist that might be worth looking in to?

-   What is front matter?  How does it relate to the web?
 
### My Experience using SSG 

    My first time learning about Static Site Generation was last year during the CSS course. After the first Year at durham college where I learned vanilla js and html I decided to learn react. Where their was alot more freedom of how i wanted to structure the folder and I could make components that I could use almost anywhere in the project. Moving forward to the next year in the css Course I struggled because of how much more rigid using ejs was. In a way using an SSG was harder because React would let me know right away if a variable was spelt wrong or if i was importing an element wrong. An example could be a navigation bar where in react if I were to place a navigation bar into a page it would atomatically import it where this is not the case with an SSG. This sounds like a small incovience but I was able to be "lazy" with React but with SSG's I was not able to. So in the beginning their was a learning curve but now after using SSG's for some time now it feals pretty natural 


###  Three different template engines

## Nunjucks 
some of the pros of using numjucks are the built in filters esspecially being able to have conditinal fettures where in other language I would need to use js for that logic another filter that would be extremley useful is when working with arrays being able to slice, sort and, join. Template inheritance also looks extremley simple and because of how the rigid the folders are structured it makes it really organized. Some of the negatives are that because it has more feteares it may have a longer learning curve to get all of the value out of using it. Out of all the other options this is the most modular which makes it easier on bigger projects but I on a smaller project with less files other options could make more sence


## Handle Bars

pros of this is being able to use partials for modularity and also the logic of the code is seperate and you would need to add the logic using helpers which is helpful it makes the ocde easier to read but it also this process is more complex then using nunjuck where I could just use a filter. Also another con is that it is harder to use partials in handleabrs needing to register partials where in nunjucks you are able to just add partials to a partials file

## EJS

some of the pros of EJS are that it simple and barebone javascript. The documentation mentions "No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript." This looks good for smaller projects with less files but with bigger projects requiring structure would help keep the project organized


### lab 1
All things considered i will be using Nunjucks for my first assignment mainly because I uisng it so far it feels "natural" to me and it has the best method of including partials and layouts out of the other options 




### SSG

An SSG that I have been interensted in before is next.js. An advanage of it is that it is a react framework and I enjoy working with React. Routing in react is my favourite because I could manage part of it using next.js I would be able to restric access to certain parts of the project thier and using next.js I can use this while making a SSG.
## Configuration

the only setting that I would think about changing would be changing the direcory names. Other than that I have   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx @11ty/eleventy --serve"
  },
  so I am able to refresh the page anytime the file is saved 


### Front Matter

Using front matter is where stuff like meta data go such as the title but you are also able to store data that is used on the page here.



### Resources

https://mozilla.github.io/nunjucks/

https://ejs.co/

https://www.npmjs.com/package/handlebars

https://handlebarsjs.com/
