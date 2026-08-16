// The Wisdom Chest — everything on /wisdom is edited from here.
// Add, remove, or reorder freely. Nothing here needs code changes elsewhere.

export type Quote = {
  text: string;
  author?: string;
  note?: string;
};

export type Resource = {
  title: string;
  creator: string;
  note: string;
  href?: string;
};

export type Person = {
  name: string;
  relationship: string;
  note: string;
  href?: string;
};

export type WisdomSection = {
  key: string;
  label: string;
};

export const wisdomSections: WisdomSection[] = [
  { key: "quotes", label: "Quotes I Ponder On" },
  { key: "books", label: "Books" },
  { key: "podcasts", label: "Podcasts" },
  { key: "videos", label: "YouTube & Videos" },
  { key: "people", label: "People" },
  { key: "tools", label: "Apps & Tools" },
];

// Short, personal reminders — not attributed to anyone, because they're mine.
export const notesToMyself: Quote[] = [
  {
    text: "I'm not special. I can get better at anything.",
    note: "One I have to tell myself more than once.",
  },
  { text: "It's supposed to be hard." },
  { text: "Spend less than you make. Save the difference. Be patient." },
  { text: "Yes, and..." },
  { text: "Don't grow too fast." },
  { text: "Hard way is the right way. There are no shortcuts." },
  { text: "Short-term gains, long-term losses." },
  { text: "People come from people." },
  { text: "Do you want to be right, or do you want this outcome?" },
  { text: "Happiness comes from solving problems." },
];

export const quotes: Quote[] = [
  {
    text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is.",
    author: "Albert Einstein",
  },
  {
    text: "Being defeated is often a temporary condition. Giving up is what makes it permanent.",
    author: "Marilyn vos Savant",
  },
  {
    text: "What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.",
    author: "Pericles",
    note: "Why this whole site exists, honestly.",
  },
  {
    text: "There will always be a reason why you meet people. Either you need them to change your life, or you're the one to change theirs.",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    note: "I come back to this every time I catch myself waiting for the 'right' moment.",
  },
  {
    text: "When you change the way you look at things, the things you look at change.",
    author: "Wayne Dyer",
  },
  { text: "Fear is not recorded, courage is." },
  {
    text: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    text: "A goal should scare you a little, and excite you a lot.",
    author: "Joe Vitale",
  },
  {
    text: "Never doubt that you are valuable and powerful and deserving of every chance in the world to pursue your dreams.",
    author: "Hillary Clinton",
  },
  {
    text: "Deciding what not to do is as important as deciding what to do.",
    author: "Steve Jobs",
  },
  {
    text: "People overestimate what they can do in a single day, and underestimate what they can do in their whole lives.",
  },
  {
    text: "Don't be afraid to fail. Be afraid not to try.",
    author: "Michael Jordan",
  },
  {
    text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day whispering, 'I will try again tomorrow.'",
    author: "Mary Anne Radmacher",
  },
  {
    text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
  },
  {
    text: "A bar of iron costs £5. Made into horseshoes, it's worth £12. Made into needles, it's worth £3,500. Made into balance springs for watches, it's worth £300,000.",
    note: "Your own value is also determined by what you're able to make of yourself. Choose wisely.",
  },
  {
    text: "Never look back unless you are planning to go that way.",
    author: "Henry David Thoreau",
  },
  {
    text: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill",
  },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  {
    text: "The thing that is really hard, and really amazing, is giving up on being perfect and beginning the work of becoming yourself.",
    author: "Anna Quindlen",
  },
  {
    text: "Live your dream, and share your passion.",
    author: "Holstee Manifesto",
  },
  {
    text: "Happiness is not the absence of problems, it's the ability to deal with them.",
  },
  {
    text: "As long as you're being a copycat, you will never be the best copycat.",
    author: "Dr. Eric Thomas",
  },
  {
    text: "Every morning we are born again. What we do today is what matters most.",
    author: "Buddha",
  },
  {
    text: "Hard work beats talent when talent fails to work hard.",
    author: "Tim Notke",
  },
  {
    text: "If you don't like something, change it. If you can't change it, change your attitude. Don't complain.",
    author: "Maya Angelou",
  },
  {
    text: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    text: "One day you will wake up and there won't be any more time to do the things you've always wanted. Do it now.",
    author: "Paulo Coelho",
  },
  {
    text: "Care about what other people think and you will always be their prisoner.",
    author: "Lao Tzu",
  },
  {
    text: "Failure is simply the opportunity to begin again, this time more intelligently.",
    author: "Henry Ford",
  },
  {
    text: "Progress lies not in enhancing what is, but in advancing toward what will be.",
    author: "Khalil Gibran",
  },
  {
    text: "To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it. It's unfortunate that this has happened. No — it's fortunate that this has happened and I've remained unharmed by it, not shattered by the present or frightened of the future. It could have happened to anyone, but not everyone could have remained unharmed by it. So remember this principle when something threatens to cause you pain: the thing itself was no misfortune at all; to endure it and prevail is great good fortune.",
    author: "Marcus Aurelius",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  { text: "Don't just wait for inspiration. Become it." },
  {
    text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Nothing will bring you peace; you must bring yourself to it.",
    author: "Gant Laborde",
  },
  { text: "How many success stories do you need to hear before you make your own?" },
  {
    text: "The cure to boredom is curiosity. There is no cure for curiosity.",
    author: "Dorothy Parker",
  },
  {
    text: "Muddy water is best cleared by leaving it alone.",
    author: "Alan Watts",
  },
  {
    text: "There are no quick fixes. But by taking action just a little bit every day, you will build up a powerful reservoir of confidence, self-esteem, and discipline.",
    author: "Scott Allan",
  },
  { text: "The struggle you're in today is developing the strength you need for tomorrow." },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Edward J. Stieglitz",
  },
  {
    text: "If you are always trying to be normal, you will never know how amazing you can be.",
    author: "Maya Angelou",
  },
  {
    text: "Continuous improvement is better than delayed perfection.",
    author: "Mark Twain",
  },
  {
    text: "Ask yourself: who do you want to be? Figure out for yourself what makes you happy, no matter how crazy it may sound to other people.",
    author: "Arnold Schwarzenegger",
  },
  { text: "Slow progress is better than no progress." },
  { text: "He who said money can't buy happiness hasn't given enough away." },
  {
    text: "You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you.",
  },
  {
    text: "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo",
  },
  {
    text: "One who knows all the answers has not been asked all the questions.",
    author: "Confucius",
  },
  {
    text: "Never say never, because limits, like fears, are often just an illusion.",
    author: "Michael Jordan",
  },
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
  },
  {
    text: "Long-term consistency trumps short-term intensity.",
    author: "Bruce Lee",
  },
  {
    text: "We question all our beliefs, except for the ones that we truly believe in, and those we never think to question.",
    author: "Orson Scott Card",
  },
  { text: "The harder you work, the luckier you get." },
  {
    text: "An amateur practices until they can play it correctly; a professional practices until they can't play it incorrectly.",
  },
  {
    text: "The moment one definitely commits oneself, then Providence moves too.",
    author: "W. H. Murray",
  },
  {
    text: "We are what we repeatedly do.",
    author: "Aristotle",
    note: "Often paraphrased by Will Durant — and, more recently, by Alex Hormozi.",
  },
  { text: "Play nice but win." },
  {
    text: "Be not afraid of growing slowly; be afraid only of standing still.",
    author: "Chinese Proverb",
  },
  {
    text: "Never let success get to your head, and never let failure get to your heart.",
    author: "Drake",
  },
  {
    text: "If you find yourself constantly trying to prove your worth to someone, you have already forgotten your value.",
  },
  { text: "Be the one who decided to go for it." },
  {
    text: "Life won't give you what you want if you want everything.",
    author: "Alex Hormozi",
  },
  {
    text: "Obsessed is a word that the lazy use to describe the dedicated.",
  },
  {
    text: "You don't have to be cruel to be tough.",
    author: "Franklin D. Roosevelt",
  },
];

export const books: Resource[] = [
  {
    title: "The E-Myth Revisited",
    creator: "Michael Gerber",
    note: "The book that made me realize working IN my business and working ON it are two different jobs.",
  },
  {
    title: "Deep Work",
    creator: "Cal Newport",
    note: "Reset how I think about attention as a founder's scarcest resource.",
  },
];

export const podcasts: Resource[] = [
  {
    title: "Add a podcast you actually listen to",
    creator: "Host name",
    note: "One line on why it earned a permanent spot in your queue.",
  },
];

export const videos: Resource[] = [
  {
    title: "Add a talk or video that shifted something for you",
    creator: "Speaker name",
    note: "What changed after you watched it.",
  },
];

export const people: Person[] = [
  {
    name: "Add someone who shaped you",
    relationship: "How you know them",
    note: "What they taught you, in a sentence or two — the kind of thing you'd want your kids to know about this person even if they never meet them.",
  },
];

// Tools that got you here — the ones you've since moved on from but that mattered at the time.
export const toolsThen: Resource[] = [
  {
    title: "Add a tool that got you here",
    creator: "What it was for",
    note: "What it did for you at the time, even if you don't use it anymore.",
  },
];

// Tools you actually rely on today.
export const toolsNow: Resource[] = [
  {
    title: "Add a tool you use every day now",
    creator: "What it's for",
    note: "Why it's still in daily rotation.",
  },
];
