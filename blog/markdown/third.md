# Entry 3

Here's another entry!

## //aidanmellin.github.io//
My biggest thing that I figured out how to do was making it such that I can have my splash (home) page be in the center of the screen, but still be the first thing viewed when one visits the page.  
  
This was done through an onLoad() with an anchor, which was easy enough, but the hardest part was keeping with my "continuous" flow design, where everything is in a grid. It's hard to describe so I'll try and make a diagram  
  
Initially the setup was as follows  
 ______________________ ______________________   
|___ HOME PAGE________ | ______ BLOG PAGE ___ |  
|__ ABOUT PAGE________ | ____________________ |  
  
But I wanted to add a Projects page to the left of the splash page that contains all of my major git Projects. This was difficult because the initial setup used base <strong>vw</strong> and <strong>vh</strong> to define where the page divisions would be. I had to effectively completely redo that. With that, I expanded the total width of the page to 300vw, and had to pad a div such that my about could be in the same spot.  
  
Now, the setup is as such  
 _____________________ ______________________ ______________________   
|______ PROJECTS______|_____ HOME PAGE______ | _____ BLOG PAGE______ |  
|_____ BLANK DIV______|______ ABOUT PAGE____ | _____ UNUSED_________ |  
  
That blank div is there because its all counting. I have to give somewhat concrete references as to how the page will be layout, where from Left to Right, Top to Bottom, the divs are effectively numbered 1-6.  

This then means that if I want to add an upper section, I will need to expand the <strong> vh </strong> 200, and then pad 2 divs (numbers 1 and 3, or 0 and 2 depending on how you count)  

## //SWIFT & Web Checkers//
This is a new section that I will be adding to as I go. This is an aspect of my SWEN-261 class that has me working with 4 other people to make a team to develop a web application with. While there is programming in this, it has been emphasized that the primary focus is that of SWIFT and Agile Programming / Team work, to the point where I have heard that someone had a nonfunctioning project that received a 90% as a grade. I don't really know how I feel about this class. I understand these concepts of teamwork are important, however the rigidity is not something that I have ever seen truly demonstrated in a workspace. This feeling, however, is biased due to my hatred of academics in general, specifically college, such as the rigidity found in Computer Science classes -- which is the literal antithesis of the concept. Yes there are rules to follow, but having strict rules as to HOW you are to reach a goal defeats the purpose of the theory and programming of anything.  
  
(I'm done ranting / getting political)  
  
## //Next Steps//
Obviously I need to add to my projects page.
Some other things include
	- Populating About Me
	- Adding Resume with quick download <-- Maybe a web view with a quick download?
	- Make hover effects for the blog buttons
	- Work on School Projects
	- Play more Ultimate Frisbee (Sectionals in a month!)