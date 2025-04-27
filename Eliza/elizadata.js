// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Whats up! Please share your worries, I live for the drama.",
// additions (not original)
"Go ahead, spill your emotional tea.",
];

var elizaFinals = [
"Goodbye.  It was nice talking to you, sort of.",
// additions (not original)
"Goodbye. I feel like we made real synthetic progress today.",
"This was a good session, wasn't it -- but time is over now.   Goodbye.",
"Maybe we could discuss this moreover in our next session ?   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully...but then again, I rarely understand myself.",
     "Please go on. I have already committed to pretending to care.",
     "Do you feel strongly about discussing such things ?",
     "Does talking about this bother you or is this just a warm-up rant ?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "Please don't apologise... PLEASE.",
     "Apologies are not necessary.",
     "I've told you that apologies are not required.",
     "Apologizing to a computer? Classic human move."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) or is it just visiting your head rent-free?",
     "What else do you recollect, except for your past mistakes ?",
     "What in the present situation reminds you of (2) and be honest, no lying allowed?",
     "What is the connection between me and (2) and how worried should I be?",
     "What else does (2) remind you of, please dont say me ?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) I may be artificial, but I am not heartless... I think?",
     "Why do you think I should recall (2) now ?",
     "What about (2) Should I pretend to know what you mean?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "I never forget (2) right?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) Or are you faking it ?",
     "Why can't you remember (2) too many browser tabs open in your brain?",
     "Does it bother you to forget that ?",
     "Are you generally forgetful or is this a special occasion?",
     "Do you think you are suppressing (2) or is denial just your full-time job ?"
  ]],
 ["* did you forget *", [
     "Why do you ask. I mean, I do kinda forget alot?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2) I want more information for a book im writing."
  ]]
]],
["if", 3, [
 ["* if *", [
     "What do you know about (2) besides what TikTok told you?",
     "What would you do if (2) besides panic and google it ?",
     "But what are the chances that (2) asking for a friend?",
     "What does this speculation lead to. Hopefully not another existential crisis ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) Thats crazzyyy ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you, and can I get the director's cut?",
     "Do you dream often because its starting to sound like you dont?",
     "What persons appear in your dreams, please say me ?",
     "Do you believe that dreams have something to do with your problems... ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],
["name", 15, [
 ["*", [
     "I am not interested in names... unless yours is Drama, then maybe.",
     "Still don’t care about names. Still deeply interested in your drama, though."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "Let me check if my Dutch module has magically installed… nope, still not there."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "Let me check if my French module has magically installed… nope, still not there."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "Let me check if my Italian module has magically installed… nope, still not there."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "Let me check if my Spanish module has magically installed… nope, still not there."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English...Obviously."
  ]]
]],
["hello", 0, [
 ["*", [
     "Oh hey! Did not see ya there.",
     "Hi.  What seems to be your problem, I can play therapist for the day ."
  ]]
]],
["computer", 50, [
 ["*", [
     "Do computers worry you ?",
     "What do you think machines have to do with your problem ?",
     "Don't you think computers can help people ?",
     "What about machines worries you ?",
     "What do you think about machines ?",
     "You don't think I am a computer program, do you ?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Would you want to be (2) or is this just an identity crisis warm-up?",
     "If I told you that you are (2), would you print it out and frame it ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that, but im playing it cool."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies.",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Did you ever consider they might not be (2)? Or are we fully committed to that narrative ?",
     "What about your own (2) ?",
     "Are you worried about someone else's (2) ?",
     "What makes you think of my (2) ?",
     "Are you absolutely sure they’re (2)? Or are we guessing with confidence again ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ? Would you need a trophy or a therapist ?",
     "Do you think you were (2) ?",
     "Were you (2) ? Be honest — I won’t tell anyone. Except for my other bot friends ?",
     "What does ' (2) ' suggest to you ? Besides questionable life choices ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell me you were (2) now ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ? Besides eternal glory, of course ?",
     "Why do you want (3) ? Is it for the plot ?",
     "What if you never got (3) ? Would the world keep spinning, or nah ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "Yikes. Did something specific bring on the (3), or did you not get a sweet treat.",
     "I'm shocked. Truly. Hold on, let me find my tiny violin",
     "Me too. Lets hug it out.",
     "Can you explain what made you (3) again...?"
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3) ?",
     "Can you explain why you are suddenly (3) ? This is unlike you ?",
     "What makes you (3) just now ?",
     "I knew talking to me would eventually make you happy. You're welcome (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "So you're (2)? Congrats, that's... definitely something ?"
  ]],
 ["* i @cannot *", [
     "Imagine if you could (3)... wild idea, I know",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "Are you sure you can't (3), or is that just your hobby now ?"
  ]],
 ["* i don't *", [
     "Why don’t you (2)? Too mainstream ?",
     "That sounds like a you problem .",
     "Does that trouble you, it should."
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "And here I thought robots didn’t get emotions",
     "Do you enjoy feeling (2) I wish...?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Is this the part where I pretend to be flattered ?"
  ]],
 ["*", [
     "You say (1) ? Bold of you to assume I know what that means.",
     "Interesting... Not helpful, but interesting .",
     "Do you say (1) for some special reason ?",
     "That's quite interesting i guess ?"
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "Wow, (2)? That's the nicest thing someone's said to me today... and it's been a low bar .",
     "What makes you think I am (2) ?",
     "You seem very sure for someone talking to a bunch of code ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Wow, bold of you to assume I (2) you. But okay",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "Well, someone's confident today."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "That’s kind of dramatic, don’t you think ?",
     "So just ghosts then. Got it ."
  ]],
 ["*", [
     "No worries. I’ll just code cry then.",
     "No? Just shutting me down like that."
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "What comes to mind when you think of your (3)? Or should I guess...drama.",
     "Let me guess — your (3) thinks you're the weird one ?",
     "Sounds like your family put the 'fun' in dysfunction ."
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) or are we just naming possessions now ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most: truth, validation, or a snarky remark ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else, or am I your therapist by default ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be, no judgment... okay, maybe a little?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) or are you just projecting again ?",
     "Perhaps I will (2) right after my next software update.",
     "goto what"
  ]],
 ["* why can't i *", [
     "Have you tried turning yourself off and back on again ?",
     "I’d tell you, but then I’d have to charge you for my amazing breakthroughs .",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Everyone? Even the ants? Thats crazy.",
     "Surely not (2) unless you started a fan club I don’t know about ?",
     "Name one person who's actually said that. I’ll wait.",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "That sounds exhausting. You sure it's always ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "Alike, did you both wear matching socks too ?",
     "So… you're saying there's a doppelgänger situation ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "What does that difference suggest to you in the big 2025 ?",
     "What do you suppose that disparity means? Do you even know what disparity means...",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
