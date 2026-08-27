const SKILL_META={
focus:{name:"Deep Focus",plant:"oak",color:"#166534"},
fitness:{name:"Fitness",plant:"sunflower",color:"#ca8a04"},
nutrition:{name:"Nutrition",plant:"tomato",color:"#dc2626"},
mindfulness:{name:"Mindfulness",plant:"lotus",color:"#7c3aed"},
sleep:{name:"Sleep",plant:"moonflower",color:"#4f46e5"},
learning:{name:"Learning",plant:"ivy",color:"#0d9488"},
creativity:{name:"Creativity",plant:"orchid",color:"#db2777"},
relationships:{name:"Relationships",plant:"rose",color:"#e11d48"},
finance:{name:"Finance",plant:"bamboo",color:"#65a30d"},
career:{name:"Career",plant:"pine",color:"#1e3a2f"},
communication:{name:"Communication",plant:"lily",color:"#0891b2"},
discipline:{name:"Discipline",plant:"cactus",color:"#854d0e"},
outdoor:{name:"Outdoor Time",plant:"fern",color:"#15803d"},
digital:{name:"Digital Wellness",plant:"aloe",color:"#047857"},
gratitude:{name:"Gratitude",plant:"daisy",color:"#f59e0b"}
};
const HABIT_LIBRARY={
focus:[
{id:"f1",title:"25-min deep work sprint(no phone)",xp:15,time:"25 min"},
{id:"f2",title:"Single-task for 15 minutes",xp:10,time:"15 min"},
{id:"f3",title:"Clear desk+close all tabs before starting",xp:8,time:"5 min"},
{id:"f4",title:"Use a focus playlist or white noise",xp:5,time:"2 min"},
{id:"f5",title:"Write tomorrow's top 3 priorities tonight",xp:10,time:"5 min"}
],
fitness:[
{id:"fi1",title:"10-min bodyweight movement",xp:12,time:"10 min"},
{id:"fi2",title:"Walk 20 minutes outdoors",xp:15,time:"20 min"},
{id:"fi3",title:"Stretch for 8 minutes",xp:8,time:"8 min"},
{id:"fi4",title:"Do 20 push-ups or modified version",xp:10,time:"5 min"},
{id:"fi5",title:"Stand and move every hour for 2 min",xp:6,time:"ongoing"}
],
nutrition:[
{id:"n1",title:"Eat a protein-rich breakfast",xp:12,time:"meal"},
{id:"n2",title:"Drink 2 glasses of water before noon",xp:8,time:"morning"},
{id:"n3",title:"Add one vegetable to lunch or dinner",xp:10,time:"meal"},
{id:"n4",title:"Prepare one healthy snack in advance",xp:10,time:"10 min"},
{id:"n5",title:"No sugary drinks today",xp:12,time:"all day"}
],
mindfulness:[
{id:"m1",title:"5-min breathing or meditation",xp:12,time:"5 min"},
{id:"m2",title:"Body scan for 3 minutes",xp:8,time:"3 min"},
{id:"m3",title:"Name 3 things you can see,hear,feel",xp:6,time:"2 min"},
{id:"m4",title:"One mindful meal(no screens)",xp:10,time:"meal"},
{id:"m5",title:"Journal 5 lines about how you feel",xp:10,time:"5 min"}
],
sleep:[
{id:"s1",title:"Screens off 45 min before bed",xp:15,time:"evening"},
{id:"s2",title:"Consistent bedtime within 30 min window",xp:15,time:"night"},
{id:"s3",title:"Dim lights after 9 pm",xp:8,time:"evening"},
{id:"s4",title:"No caffeine after 2 pm",xp:10,time:"afternoon"},
{id:"s5",title:"10-min wind-down routine",xp:12,time:"10 min"}
],
learning:[
{id:"l1",title:"Read 10 pages of a non-fiction book",xp:12,time:"15 min"},
{id:"l2",title:"Watch one educational video(no autoplay)",xp:10,time:"15 min"},
{id:"l3",title:"Practice a skill for 15 focused minutes",xp:15,time:"15 min"},
{id:"l4",title:"Write 3 key takeaways from something learned",xp:8,time:"5 min"},
{id:"l5",title:"Review flashcards or notes for 10 min",xp:10,time:"10 min"}
],
creativity:[
{id:"c1",title:"Free-write or sketch for 10 minutes",xp:12,time:"10 min"},
{id:"c2",title:"Make something small(doodle,riff,prototype)",xp:15,time:"15 min"},
{id:"c3",title:"Collect 3 inspiring images or ideas",xp:6,time:"5 min"},
{id:"c4",title:"Try a new creative constraint for 10 min",xp:10,time:"10 min"},
{id:"c5",title:"Share one creative thing with someone",xp:8,time:"5 min"}
],
relationships:[
{id:"r1",title:"Send a thoughtful message to someone",xp:10,time:"5 min"},
{id:"r2",title:"Have a 10-min undistracted conversation",xp:15,time:"10 min"},
{id:"r3",title:"Express specific appreciation to one person",xp:10,time:"3 min"},
{id:"r4",title:"Schedule or confirm a social plan",xp:8,time:"5 min"},
{id:"r5",title:"Listen fully without planning your reply",xp:12,time:"ongoing"}
],
finance:[
{id:"fn1",title:"Track today's spending for 3 minutes",xp:10,time:"3 min"},
{id:"fn2",title:"Check account balances(no stress spiral)",xp:8,time:"5 min"},
{id:"fn3",title:"Move a small amount to savings",xp:12,time:"2 min"},
{id:"fn4",title:"Review one subscription or bill",xp:10,time:"5 min"},
{id:"fn5",title:"Write one money intention for the week",xp:8,time:"3 min"}
],
career:[
{id:"ca1",title:"Block 30 min for deep professional work",xp:15,time:"30 min"},
{id:"ca2",title:"Update one section of LinkedIn or resume",xp:10,time:"10 min"},
{id:"ca3",title:"Reach out to one useful contact",xp:12,time:"5 min"},
{id:"ca4",title:"Learn one new tool or shortcut",xp:10,time:"15 min"},
{id:"ca5",title:"Reflect:what went well at work today?",xp:8,time:"5 min"}
],
communication:[
{id:"co1",title:"Practice clear,concise messaging(1 email/text)",xp:10,time:"5 min"},
{id:"co2",title:"Ask one clarifying question in a conversation",xp:8,time:"ongoing"},
{id:"co3",title:"Record yourself speaking for 2 minutes",xp:12,time:"5 min"},
{id:"co4",title:"Give specific,kind feedback to someone",xp:10,time:"5 min"},
{id:"co5",title:"Practice active listening in one interaction",xp:12,time:"ongoing"}
],
discipline:[
{id:"d1",title:"Do the hardest task first(2-min start)",xp:15,time:"2 min start"},
{id:"d2",title:"Keep one small promise to yourself",xp:12,time:"varies"},
{id:"d3",title:"Delay gratification:wait 10 min before a treat",xp:10,time:"10 min"},
{id:"d4",title:"Complete a 5-min ugly chore you've avoided",xp:12,time:"5 min"},
{id:"d5",title:"Review yesterday's wins and one improvement",xp:8,time:"5 min"}
],
outdoor:[
{id:"o1",title:"Spend 15 minutes outside intentionally",xp:15,time:"15 min"},
{id:"o2",title:"Walk without headphones and notice nature",xp:12,time:"15 min"},
{id:"o3",title:"Sit in sunlight for 10 minutes",xp:10,time:"10 min"},
{id:"o4",title:"Tend a plant or water something living",xp:8,time:"5 min"},
{id:"o5",title:"Take a photo of something beautiful outside",xp:6,time:"5 min"}
],
digital:[
{id:"di1",title:"Phone-free first 30 min of the day",xp:15,time:"30 min"},
{id:"di2",title:"Turn off non-essential notifications for today",xp:12,time:"2 min"},
{id:"di3",title:"One social media session under 15 min",xp:10,time:"15 min"},
{id:"di4",title:"Delete or archive 20 old photos/emails",xp:8,time:"10 min"},
{id:"di5",title:"Set a hard stop time for screens tonight",xp:12,time:"evening"}
],
gratitude:[
{id:"g1",title:"Write 3 specific things you're grateful for",xp:10,time:"5 min"},
{id:"g2",title:"Tell someone why you appreciate them",xp:12,time:"3 min"},
{id:"g3",title:"Savor one ordinary moment fully",xp:8,time:"2 min"},
{id:"g4",title:"Note one thing that went better than expected",xp:8,time:"3 min"},
{id:"g5",title:"End the day with a short gratitude reflection",xp:10,time:"5 min"}
]
};
let state={
user:{},
answers:{},
skills:[],
skillXP:{},
totalXP:0,
habits:[],
completedToday:{},
lastDate:null
};
