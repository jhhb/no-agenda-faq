const TAGS = {
  v4v: "value-for-value",
  donate: "donate",
  terms: "terms",
  podcasting20: "podcasting 2.0",
  art: "art",
  community: "community",
  meetup: "meetup",
  jingles: "jingles",
  meta: "meta",
};

export const FAQ_DATA = {
  elements: [
    {
      heading: "What is the No Agenda Show?",
      detail: `Taken directly from <a href="https://noagendashow.net/">https://noagendashow.net</a>: 'No Agenda, a show where former VJ Adam Curry and columnist John C. Dvorak, two experts from the media industry, have a conversation about politics. Twice a week they deconstruct the news cycle and give insights into the narrative of the mainstream media, political campaigns and the government.'`,
      tags: [],
    },
    {
      heading: "When and how can I listen to the No Agenda Show?",
      detail:
        "You can catch the show live, twice a week on Thursday and Sunday, 9AM Pacific Time, or listen to episodes any time you want using your favorite podcasting app.",
      tags: [],
    },
    {
      heading: "What is the basic structure of a show?",
      detail:
        "Each show is about 3 hours, give or take, and is broken up into a first half and an Executive Producer donation segment where John and Adam thank the Executive Producers for the episode and read donation notes. Then, the show concludes with a second half, an Associate Executive Producer donation segment, and a segment that announces upcoming No Agenda meetups (in the 3D world), new knights and dames of the round table, title changes, and end-of-show mixes.",
      tags: [],
    },
    {
      heading: "How can I keep up to date with the No Agenda Show?",
      detail: `Listen to the episodes and sign up for the newsletter at <a href="https://www.gitmonation.com/signup.htm">https://www.gitmonation.com/signup.htm</a>. The newsletter goes out on Wednesdays and Saturdays, the day before each episode.`,
      tags: [],
    },
    {
      heading: "How does the show make money?",
      detail:
        "The show makes money entirely by donations from listeners. There are no ads. You contribute what you can to the show based on what you have to contribute, and how much value you think the show has provided to you. This is called a 'value-for-value' model.",
      tags: [TAGS.donate, TAGS.v4v],
    },
    {
      heading: "Where and how can I donate?",
      detail: `The best place to find info on donating is at <a href="https://dvorak.org/na/">https://dvorak.org/na/</a>. You can donate by card, PayPal, check, or bank transfer.`,
      tags: [TAGS.donate],
    },
    {
      heading: "What is value-for-value?",
      detail: `<a href="https://noagendaglossary.com/glossary/value-for-value-model/">Value-for-value</a> is a business model where users of a service for the service based on what they have to contribute, and based on the value they believe the service has provided to them. This is the model that the No Agenda Show uses for funding.`,
      tags: [TAGS.donate, TAGS.terms],
    },
    {
      heading: "What is a producer?",
      detail:
        "A producer is the name for anyone who contributes to the No Agenda Show with their time, talent, or treasure. You are a producer any time you provide money to sustain the show, produce and share content for the show, or build applications or services to enable the No Agenda community. These are just a few examples.",
      tags: [TAGS.donate, TAGS.terms],
    },
    {
      heading: "What does <weird word or phrase I don't know> mean?",
      detail: `You can find most any word or phrase you don't know at <a href="https://noagendaglossary.com/">No Agenda Glossary</a>`,
      tags: [TAGS.terms],
    },
    {
      heading:
        "Where can I find more projects, websites, etc., from the No Agenda community?",
      detail: "TODO",
      tags: [TAGS.community],
    },
    {
      heading: "How many jingles can I request?",
      detail: "4 jingles is the maximum. Or else.",
      tags: [TAGS.jingles],
    },
    {
      heading: "This FAQ website SUCKS. How can I make it better?",
      detail: `You can make it better by sending emails to noagendafaq (AT) fastmail (DOT) com. Or, if you have content that you'd like to add or update directly, you can open an issue <a href="https://github.com/jhhb/no-agenda-faq">on Github</a>`,
      tags: [TAGS.meta],
    },
  ],
};

const ignore = {
  elements: [
    {
      heading: "What are the social media handles for John and Adam?",
      detail: "",
      tags: [],
    },
    {
      heading: "Why does the show art change all the time in my podcast app?",
      detail: "fadsf dsaf dsfdsfdf sdafsdfsdf sdfdsf ssfdsf sdfs",
      tags: [TAGS.art],
    },
    {
      heading: "What is the troll room?",
      detail: "",
      tags: [TAGS.terms],
    },
    {
      heading: "What is podcasting 2.0?",
      detail: "fadsf dsaf dsfdsfdf sdafsdfsdf sdfdsf ssfdsf sdfs",
      tags: [TAGS.podcasting20, TAGS.terms],
    },
    {
      heading: "Where can I go to submit episode art?",
      detail: "fadsf dsaf dsfdsfdf sdafsdfsdf sdfdsf ssfdsf sdfs",
      tags: [TAGS.art],
    },
    {
      heading: "What is a No Agenda meetup?",
      detail: "TODO",
      tags: [TAGS.community, TAGS.meetup],
    },
  ],
};
