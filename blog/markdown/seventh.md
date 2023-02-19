---
title: Seventh
devlogDate: 2/19/23
---

# Quick updates
  
I actually have work on Sundays, but I spent this morning doing some pretty chill QOL updates for the website

## The Website

### Project Page
  
Most of what I did was more with the Javascript, and more specifically with the Github Repo table on the projects screen.  
  
**What it was**
  
It was an easy table that was converted from a dictionary with the name of the repo as the key to an array, then cycled through and turned into a long string of HTML code that makes a total table for the return. This was stupid so I  
  
**Changed it.**
  
First thing I did was make the initial "repoDict" an array. After that I had to redo how I was actually generating the formattedString to be appended to the element in the HTML. This meant first using a ForEach loop and an arrow function to grab the x.name, x.stargazers_count, and the x.size (which is actually in KB fun fact). I also got to figure out how to use formatted strings in JS which is super handy (you use `` as the string and ${var} to access specific vars within it).  
  
Next step was to sort the repos so the ones that I consider more important show up at the top of the table. First I sorted the array by the star count on the repo, and the secondary sort was then on the size of the repo (bigger usually means more work done on it). At some point I may have to add a scroll feature, but that can probably done strictly with CSS.

**Other ideas**  
- Demo of some specific programs?

### Devlog Page
  
So technically this issue hasn't happened yet, but I'm starting to think more about it. There is going to be an issue with how the blog posts are shown. Currently they are one one horizontal plane and I'm not sure if after this post if it will show on the next line or simply overflow. The first thing I'm going to do is probably be just making it fit in a box and then add scrolling function. I may also set a sort function with a dropdown such that you can sort based on chronological order. Other ideas to add to sorting include adding a star or other marker to mark a post as important or as a standard devlog (such as I would want to star the Word Hy-phen-ation devlog). This could be done with changing up the html template a little bit probably with adding a new variable and then when that dropdown is selected only displaying something `starred: true`.  
  
Other than having a scroll box of some kind, if it starts to get a lot more full because I maintain it regularly, I might end up adding a cool calendar feature, where a user can see the last 5 devlogs, some listed important ones they might like, and then access to past devlogs in a cool thing where the days that have active devlogs appear on a calendar with a white circle. Will have to think more on this.  
  
Actual changes for devlog page will probably be on the next devlog (hopefully tomorrow).
  
.