---
title: Word Hy-phen-ation
devlogDate: 2/18/23
---
# Word Hy-phen-ation
  
  Liang's Thesis is [here](https://www.tug.org/docs/liang/) by the way.  
  
## A little bit more about my new personal project
This one is kind of a biggie. I'm going to be using Frank Liang's thesis from 1983 concerning the auto-generation of hyphens between words for the original TeX system for my own personal ideas. The simple translation is thus: the Liang Method of word hyphenation splits words on the syllables of words such that someone reading a passage doesn't come into any interruptions that may occur when having to switch lines. To make this a little bit easier to understand, its the difference between reading:  
  
  the longest side of a triangle is called the hypot-  
  enuse and can be solved with Pythagoras' Theorem.  
  
  and  
  
  The longest side of a triangle is called the hy-  
  potenuse and can be solved with Pythagoras' Theorem.  
  
This is cool and all, but what good is it if it's already been implemented some fifty years ago? Well the answer is twofold:  
  1. There's no obvious examples of it being written in a HLL today that anyone can implement.  
  2. I want to use it to make poems.
  
Okay I don't really want to have it automatically make poems, but I want it to be able to read input and tell me if it follows some poem syllabic scheme. The most obvious form of poetry that will fit this bill is a haiku, but with a little tweaking it can also incorporate things like Limericks. My main purpose for doing this is as yet another incorporation into my Discord Bot. If you are unfamiliar with that project, the link is [here](https://github.com/aidanMellin/discordBot). There are a couple of these "bots" that float around online on Tumblr and Reddit, but as far as I can tell they just use a series of dictionaries to define various syllables and how they fit in words. This takes up a lot of space, and the lookups alone mean that someone probably has to manually call the bot in order to run the script so that there isn't too much processing power used.

## More specifics.
The overall project can be broken down into two essential features:
1. The dictionary and storage of it
2. The method for selecting the hyphen locations
Theres also a question of best place to place said hyphens discussed in the paper, but given that my idea is to simply use all of possible hyphen locations, this probably won't be an issue. (Remember that this was for very specific instances of hyphenating a word such that there isn't any "ghastly white space" using narrow columns)  
  
### Storage
  
Liang introduced the idea of a packed trie, which is very similar to an indexed trie, except a lot more condensed. Let me explain.  
  
A trie (also known as a prefix tree) is similar to most other trees with a little twist. Basically it's an elegant solution to determining if a word is in a given set. You search letter by letter until you get (usually a boolean) response of whether or not a word exists in the set (tree).  
  
A simple trie would look something like this:  
  
            root    
           /    \  
          A      B  
          |     / \  
          P    A   I  
         / \   |   |  
        E   P  T   G  
            |  
            L  
            |  
            E  
  
It's not too particularly hard to implement and it's pretty easy to insert, delete, etc. It's cool and all, but what if the lookup time complexity could be greatly reduced?  
  
*Enter indexed tries:*  
Indexed tries use a large array to store pointers for each of the children contained in the array. You have to intialize a super large array (26<sup>2</sup>) to be precise. The issue with this is that not all of these spaces allocated in the array are actually going to be used. It's a lot of wasted space. All of those null pointers and nulls don't need to be there.  
  
So, **Packed tries**.  
Packed tries are essentially indexed tries, but just... packed tighter.
You loop through the trie initially created, and simply go level by level putting in pointers in a first fit method, where there is no overlap of the pointers themselves, or where they're pointing to. But what do I mean by that? I probably won't do Liang's explanation justice, but essentially our packed trie is going to store two items per index in the array: the letter it corresponds to, and the pointer to the next related letter.  
All letters are assigned their own index (think offset) such that if we wanted to find HAVE (the example provided in the thesis) we would first look for H with the provided offset (8), and see that in that index, there is both an H and 30.  
We travel to 30, and know that the next letter we are looking for is an A, so we add one (the offset of A) to the index of 30, and find our A with a provided pointer to 29. (Alternatively if we wanted to find HE, we would go to 30, add 5, and in index 35 there exists an E that can function as a terminal state).  
We go to 29, and indexing by V gets us a 51, this points to 2.  
In location 7 (2 -- given index plus 5 -- offset of E), we find E that coincidentally points to 0, which means there are no possible children states.
  
If none of this made sense, that's fine. It took me a while. Just check out the actual thesis itself linked at the top of the page. Theres a nice visual to go along with it on page 16.  
  
That's pretty much the gist of the storage of the dictionary. While mostly considered a nonissue nowadays with people having access to what is esentially unlimited storage, I wish to stay true to form and implement it in this way. That means next we talk about the:  
    
### Selecting Hyphens.
  
Admittedly I don't completely understand how this section works as I would argue I haven't fully grasped its topic yet, but I will definitely come back around and update this devlog with what I figure out. What I do know is that there is a lot of focus on using patterns and inhibiting patterns (instead of exceptions) for building the heuristic of the selecting hyphens.  
The TeX system used a series of 5 passes of both inhibiting and regular patterns to build their dictionary, and achieved rather high accuracy (the goal of the project). I haven't given much thought as to how to actually start it yet, but obviously that comes a little bit later.

## Side notes
- Obviously this will need testing in order to build it out, so I'm either going to have to find an available source for hyphens and words, or build my own. Getting a dictionary won't be too hard, but finding a source with good hyphenations might be a little bit harder.
- I have to come back around and finish writing the selecting hyphens section, but that comes later and with understanding.
- I still have some ideas with what to do with the website, so I'm going to probably bounce between planning this project and doing simple tweaks to the website.
- I also know that no one is really reading this, but my simple act of writing how I understand this has allowed me to reinforce what I've learned and leave proof that I'm not going to flake on this project.
- Maybe I can use my word hyphenation to fix the weird white space on my devlogs??