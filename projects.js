/**
 * Projects — homepage grid + case studies.
 * Homepage: /thumbs/ (see thumbs/dimensions.txt).
 * Case-study stills: /stills/<project>/ (see stills/README.txt).
 */
const PORTFOLIO_PROJECTS = [
  {
    id: "1",
    slug: "honda",
    title: "Honda | Keep Dreaming",
    thumb: "thumbs/keep_dreaming.webp",
    cardTags: "broadcast",
    tags: ["general"],
    vimeo: "https://vimeo.com/884917302",
    detail: {
      body:
        "When Honda announced they would be carbon neutral by 2050, you might think, yeah, right, keep dreaming—just another car company jumping on the sustainability bandwagon. But the reality is, Honda has been setting the bar for lowering emissions since day one.\n\n" +
        "So to prove their commitment, we worked with the directorial duo powerhouse Smith and Foulkes to create a spiraling sixty-second first-person journey through nearly a dozen past, present and future Honda breakthroughs in the pursuit of carbon neutrality. Employing an ambitious VFX strategy that included CG, miniatures, animation, illustration, green screen, CAD, and AI.\n\n" +
        "Proving that to achieve something as ambitious as carbon neutrality, you have to keep dreaming.",
      media: [{ type: "vimeo", url: "https://vimeo.com/884917302" }],
      stills: [
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0000_Layer+Comp+1.webp", alt: "Honda Keep Dreaming prologue 1" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0001_Layer+Comp+2.webp", alt: "Honda Keep Dreaming prologue 2" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0002_Layer+Comp+3.webp", alt: "Honda Keep Dreaming prologue 3" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0003_Layer+Comp+4.webp", alt: "Honda Keep Dreaming prologue 4" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0004_Layer+Comp+5.webp", alt: "Honda Keep Dreaming prologue 5" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0005_Layer+Comp+6.webp", alt: "Honda Keep Dreaming prologue 6" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0006_Layer+Comp+7.webp", alt: "Honda Keep Dreaming prologue 7" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0007_Layer+Comp+8.webp", alt: "Honda Keep Dreaming prologue 8" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0008_Layer+Comp+9.webp", alt: "Honda Keep Dreaming prologue 9" },
      ],
    },
  },
  {
    id: "2",
    slug: "honda-dream-generator",
    title: "Honda Dream Generator",
    thumb: "thumbs/dream_generator.gif",
    cardTags: "ai, interactive",
    tags: ["ai", "tech"],
    vimeo: "",
  },
  {
    id: "3",
    slug: "the-dream-phone",
    title: "The Dream Phone",
    thumb: "thumbs/dream_phone.webp",
    cardTags: "ai, hacking, pi, code",
    tags: ["ai", "tech"],
    vimeo: "",
  },
  {
    id: "4",
    slug: "lexus-gamers-is",
    title: "Lexus | Gamers' IS",
    thumb: "thumbs/gamers_is.webp",
    cardTags: "technology, film, twitch",
    tags: ["tech", "general"],
    vimeo: "",
  },
  {
    id: "5",
    slug: "grammys",
    title: "GRAMMYs",
    thumb: "thumbs/grammys.webp",
    cardTags: "integrated",
    tags: ["general"],
    vimeo: "",
  },
  {
    id: "6",
    slug: "lexus-driving-disrupted",
    title: "Lexus | Driving Disrupted",
    thumb: "thumbs/driving_disrupted.webp",
    cardTags: "technology, film, stunt",
    tags: ["tech"],
    vimeo: "",
  },
  {
    id: "7",
    slug: "lexus-is-wax",
    title: "Lexus | IS Wax",
    thumb: "thumbs/lexus_is_wax.webp",
    cardTags: "technology, pitchfork, wired",
    tags: ["tech", "general"],
    vimeo: "",
  },
  {
    id: "8",
    slug: "engineered-for-fun",
    title: "Engineered For Fun",
    thumb: "thumbs/engineered_for_fun.webp",
    cardTags: "ai, film, facial expression analysis",
    tags: ["ai", "tech"],
    vimeo: "",
  },
  {
    id: "9",
    slug: "microsoft",
    title: "Microsoft",
    thumb: "thumbs/microsoft.webp",
    cardTags: "film, digital",
    tags: ["general", "tech"],
    vimeo: "",
  },
];

window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
