# rock-paper-scissors
a hard stone, a piece of a tree, and a cutting implement will go head to head in the battle of the century

things I learned: functions mostly. how to use them to make series of events happen. organizing my code and working around the pitfalls of scope WRT variables and such. had a bit of difficulty making it count points for a mo, as well as another problem i'd had earlier just making it differentiate between player inputs from the prompt; I believe I had messed up how it interpreted the text due to a syntax error, so it would interpret any string as correct for a while.

future improvements to work on: making my code cleaner and more efficient - I am well aware this could be accomplished in a much shorter format with less repetition. I tried to do it without using loops, for one thing. For another, it's simply the way I typed up the rock paper scissors if/else stuff - that could be much more organized/clean as well.

UPDATE: now I am working on a UI for this. We'll see how that goes.

Aaand done.

Closing Thoughts: This was a nice exercise, I learned how to attach actions to buttons, how to display text through DOM methods, used Google to learn about the location.reload() method (for refreshing the page) and setTimeout method to make the text display one after another in timed increments. I learned about disabling buttons, I learned how to use AI to assist me in figuring out boilerplate code (I used ChatGPT to help me come up with a function to gauge the win state after 5 rounds, which I was originally struggling with. I read the code it provided, and took a couple bits and made it my own to fit with the pre-existing code I had). I can see why even experienced developers use AI to help them kickstart the mundane tasks, although I must be careful not to over-rely on it and hamper my learning or independence. Still not certain what about my previous winState attempt didn't work, but oh well.... probably something super obvious I overlooked, despite hours of googling.

In future, I should make sure to write out pseudocode beforehand, and perhaps try using TDD (necessary? I don't know). I should also include more comments.

kNOWN ISSUES: Click overload will cause this app to behave unexpectedly. Fixing this is beyond the current scope of the project and my knowledge, but may come later. For now, please be patient and click no more than 5 times total.