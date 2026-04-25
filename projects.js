/**
 * Projects — homepage grid + case studies.
 * Homepage: /thumbs/ (see thumbs/dimensions.txt).
 * Case-study stills: /stills/<project>/ (see stills/README.txt).
 * Use detail.body (plain) or detail.bodyHTML (for links; recognition, etc.)
 * Project title: use the top H1 only (all caps via CSS, not bold). In bodyHTML: p.case-study-line
 * for each award/recognition/press line (one block per line), then
 * p.case-study-sect: <i>Insight</i> / <i>Idea</i> / <i>Objective</i> (italic section labels, not h1–h3).
 * Optional: detail.railHTML — HTML in the right column below stills (e.g. extra Vimeo embeds).
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
      bodyHTML:
        "<p>When Honda announced they would be carbon neutral by 2050, you might think, yeah, right, keep dreaming—just another car company jumping on the sustainability bandwagon. But the reality is, Honda has been setting the bar for lowering emissions since day one.</p>" +
        "<p>So to prove their commitment, we worked with the directorial duo powerhouse Smith and Foulkes to create a spiraling sixty-second first-person journey through nearly a dozen past, present and future Honda breakthroughs in the pursuit of carbon neutrality. Employing an ambitious VFX strategy that included CG, miniatures, animation, illustration, green screen, CAD, and AI.</p>" +
        "<p>Proving that to achieve something as ambitious as carbon neutrality, you have to keep dreaming.</p>",
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
    vimeo: "https://vimeo.com/935982647",
    detail: {
      bodyHTML:
        '<p class="case-study-line">Shorty Awards × 2</p>' +
        '<p class="case-study-line">Gold — Animation</p>' +
        '<p class="case-study-line">Silver — Automotive</p>' +
        '<p class="case-study-line">ADDYs — Silver, Innovation in Interactive</p>' +
        '<p class="case-study-line">The One Show — Finalist</p>' +
        '<p class="case-study-line"><a href="https://adage.com/article/marketing-news-strategy/honda-offers-ai-generated-create-your-own-adventure-videos-around-new-suv/2546561" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="https://finance.yahoo.com/news/honda-leverages-ai-dream-generator-090000510.html" target="_blank" rel="noopener noreferrer">Marketing Dive</a></p>' +
        '<p class="case-study-line"><a href="https://shortyawards.com/17th/amazon-honda-dream-generator" target="_blank" rel="noopener noreferrer">Shorty Awards</a></p>' +
        '<p class="case-study-line"><a href="https://www.lovethework.com/work-awards/campaigns/honda-dream-generator-1618272" target="_blank" rel="noopener noreferrer">Cannes Love The Work</a></p>' +
        '<p class="case-study-line"><a href="https://www.designrush.com/news/honda-and-amazon-ads-team-up-to-create-dream-generator" target="_blank" rel="noopener noreferrer">Design Rush</a></p>' +
        '<p class="case-study-line"><a href="https://thedrumawards.com/live/en/page/content-results" target="_blank" rel="noopener noreferrer">The Drum Awards</a></p>' +
        '<p class="case-study-line"><a href="https://www.aaflosangeles.org/2025-winners-list" target="_blank" rel="noopener noreferrer">AAF LA</a></p>' +
        "<p>Honda and AI have something in common: they both bring dreams to life.</p>" +
        "<p>To make the Honda Prologue feel more fun and approachable for families, we partnered with Amazon to create The Honda Dream Generator—an AI-powered experience that turned simple family inputs into custom animated adventure films.</p>" +
        "<p>Families chose who they wanted to travel with and where they wanted to go. From there, AI generated a one-of-a-kind dream film, sending them through jungles, cloud forests, deep space, microscopic gardens, and more.</p>" +
        "<p>Behind the scenes, we built a hybrid production pipeline that combined hand-drawn illustration, animation, motion design, AI engineering, and development. Every source image was artist-created and fully cleared, proving AI can amplify artists rather than replace them.</p>" +
        "<p>Nearly 200 unique films could be generated, helping families see EVs—and the Prologue—as more imaginative, accessible, and adventure-ready.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/935982647" }],
      stills: [],
    },
  },
  {
    id: "3",
    slug: "the-dream-phone",
    title: "The Dream Phone",
    thumb: "thumbs/dream_phone.webp",
    cardTags: "ai, hacking, pi, code",
    tags: ["ai", "tech"],
    vimeo: "https://vimeo.com/1171158209",
    detail: {
      bodyHTML:
        "<p><i>A Raspberry Pi–powered rotary phone that uses real-time voice AI and modular persona prompts to let you call the past—delivering modern intelligence through a perfectly preserved analog illusion.</i></p>" +
        "<p>The rotary phone.</p>" +
        "<p>If you grew up with one, then it probably conjures up a certain feeling. When you pick up the handle, turn the dial and listen to the clicks, there is a warmth, a familiarity. But today, it is nothing more than a link to the past. And the voice on the other end has long since grown silent.</p>" +
        "<p>So I set out to breathe new life into the rotary phone. And to bring back voices that no telephone wire could reach before ...</p>" +
        "<p>The Dream Phone crosses the great divide to connect us with dreamers and innovators whose voices have also grown silent.</p>" +
        "<p>Soichiro Honda.<br>Steve Jobs.<br>John Lennon.<br>Jesse Owens.</p>" +
        "<p>The Dream Phone directory goes on and on.</p>" +
        "<p>It works just like the rotary phone you maybe had as a child. Only instead of dialing seven digits, you dial four. The four numbers that make up the year that your dreamer left this earth.</p>" +
        "<p>For instance, to reach Steve Jobs, dial #2011.</p>" +
        "<p>Then hold on.</p>" +
        "<p>Because if you knew—or know—Steve Jobs, he can be demanding.<br>And Lennon can be dry and witty.<br>And Soichiro Honda can be inspiring.<br>Same with Owens.</p>" +
        "<p>Each dreamer you connect with has the same personality and voice you remember.</p>" +
        "<p>And because it's coming through a rotary phone—analogue and true—you just might forget that it's all just a dream. And for a few seconds, that divide between the past and present vanishes.</p>" +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/1171158209?title=0&byline=0&portrait=0" title="The Dream Phone — demo" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="case-study-sect"><i>The tech</i></p>' +
        "<p><i>Hardware</i></p>" +
        "<p>Raspberry Pi Zero 2 W — the brain inside the phone<br>" +
        "Rotary dial + hook switch — physical input system<br>" +
        "Analog handset + speaker — authentic audio I/O<br>" +
        "12V → 5V power (buck converter) — keeps everything stable<br>" +
        "Ring hardware + transistor control for real bell actuation</p>" +
        "<p>👉 Required much hardware research and manipulation. Replacing headset mic and speaker, splicing and soldering new cables from the handset cradle and rotary dial contact terminals, connecting via Dupont to Pi GPIO.</p>" +
        "<p><i>Conversation Engine (The Voice Brain)</i></p>" +
        "<p>Hume EVI — real-time conversational layer<br>" +
        "WebSocket streaming for live dialogue<br>" +
        "Emotion + prosody control (tuned down to prevent voice drift)<br>" +
        "ChatGPT as the language brain</p>" +
        "<p>👉 Took a lot of trial and error to settle on the best TTS service, but ultimately, Hume won out hands down. Expensive, but makes conversations emotional, interruptible, and believable.</p>" +
        "<p><i>Persona System</i></p>" +
        "<p>Text-based personality files (personality.txt) per caller<br>" +
        "Modular inserts (micro-lines, triggered dynamically)<br>" +
        "Knowledge constraints (e.g., stops at year of death)<br>" +
        "Recognition logic (“Who’s calling?” → personalized response)</p>" +
        "<p>👉 Vibe-coded admin page hosted on Cloudflare, enabling admin to add and adjust personas. Pushed and pulled from a GitHub repo.</p>" +
        "<p><i>Experience Layer (The Magic)</i></p>" +
        "<p>Rotary dialing = input (year of death)<br>" +
        "Ring → pickup → voice appears<br>" +
        "Real-time, unscripted conversation<br>" +
        "Delivered through analog hardware</p>" +
        "<p>👉 The trick: modern AI hidden inside a completely analog interaction</p>",
      media: [{ type: "image", src: "thumbs/dream_phone.webp", alt: "The Dream Phone" }],
      stills: [],
    },
  },
  {
    id: "4",
    slug: "lexus-gamers-is",
    title: "Lexus | Gamers' IS",
    thumb: "thumbs/gamers_is.webp",
    cardTags: "technology, film, twitch",
    tags: ["tech", "general"],
    vimeo: "https://vimeo.com/670863804",
    detail: {
      bodyHTML:
        '<p class="case-study-line">Ad Age</p>' +
        '<p class="case-study-line">Marketing Dive</p>' +
        '<p class="case-study-line">SlashGear</p>' +
        '<p class="case-study-line">Car and Driver</p>' +
        '<p class="case-study-line">CNET</p>' +
        '<p class="case-study-line">Hypebeast</p>' +
        '<p class="case-study-line">Baller Status</p>' +
        '<p class="case-study-line">Called “the model for marketers” by Twitch’s CEO</p>' +
        "<p>How do you get Twitch gamers to consider the Lexus IS?</p>" +
        "<p>Definitely not with a commercial.</p>" +
        "<p>Instead, we built the world’s first mobile gaming space: Gamers’ IS. Partnering with Twitch streamer Fuslie, we let her livestream audience vote on the gaming features they wanted most—then turned their dream build into a real, one-of-one Lexus.</p>" +
        "<p>The finished car was revealed on a second livestream, packed with gamer-approved details, from RGB lighting to a fully integrated gaming setup.</p>" +
        "<p>The results were huge. The initiative helped contribute to a 178% spike in IS sales and helped push the Lexus IS to become the #2 top-selling car in the U.S.—a serious win for a sport sedan in a category most people had written off.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/670863804" }],
      stills: [
        { src: "stills/lexus-gamers-is/1.png", alt: "Gamers' IS 1" },
        { src: "stills/lexus-gamers-is/2.png", alt: "Gamers' IS 2" },
        { src: "stills/lexus-gamers-is/3.png", alt: "Gamers' IS 3" },
        { src: "stills/lexus-gamers-is/4.png", alt: "Gamers' IS 4" },
        { src: "stills/lexus-gamers-is/5.gif", alt: "Gamers' IS 5" },
      ],
      railHTML:
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/526343448?title=0&byline=0&portrait=0" title="Gamers’ IS — livestream recap" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/526328758?title=0&byline=0&portrait=0" title="Gamers’ IS" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>',
    },
  },
  {
    id: "5",
    slug: "grammys",
    title: "GRAMMYs",
    thumb: "thumbs/grammys.webp",
    cardTags: "integrated",
    tags: ["general"],
    vimeo: "https://vimeo.com/20124076",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="http://www.graphis.com/entry/c2ad319e-4b31-11e2-a2c9-f23c91dffdec/" target="_blank" rel="noopener noreferrer">Graphis</a></p>' +
        '<p class="case-study-line"><a href="http://thefwa.com/shortlist/music-is-life-is-music" target="_blank" rel="noopener noreferrer">The FWA</a></p>' +
        '<p class="case-study-line"><a href="http://www.commarts.com/exhibit/musicislifeismusic.html" target="_blank" rel="noopener noreferrer">Communications Arts Exhibit</a></p>' +
        "<p class=\"case-study-line\">D&amp;AD Pencil</p>" +
        "<p class=\"case-study-line\">Webby Awards</p>" +
        "<p>How do you get music lovers excited about the GRAMMYs again? You create a groundbreaking social media platform " +
        "that gives them the ability to share the soundtrack of their lives.</p>" +
        "<p>Our platform allowed users to tag a song to a location. Then describe a memory that the song evokes. " +
        "Giving music lovers the chance to author their own audio autobiographies.</p>" +
        "<p>In addition to helping concept and write the campaign's website and iOS app, I helped concept and produce " +
        "all the TV, posters, OOH and more. Which included everything from filming Katy Perry in the basement of " +
        "Staples Center to recording Samuel Jackson at CBS.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/20124076" }],
      stills: [],
    },
  },
  {
    id: "6",
    slug: "lexus-driving-disrupted",
    title: "Lexus | Driving Disrupted",
    thumb: "thumbs/driving_disrupted.webp",
    cardTags: "technology, film, stunt",
    tags: ["tech"],
    vimeo: "https://vimeo.com/716637087",
    detail: {
      bodyHTML:
        '<p class="case-study-line">MediaPost</p>' +
        "<p class=\"case-study-line\">Car and Driver</p>" +
        '<p class="case-study-line"><a href="https://www.luxurydaily.com/lexus-driving-disrupted/" target="_blank" rel="noopener noreferrer">Luxury Daily</a></p>' +
        '<p class="case-study-line"><a href="https://www.jalopnik.com/the-lexus-nx-4-6-is-like-beer-goggles-for-distracted-dr-1846661064/" target="_blank" rel="noopener noreferrer">Jalopnik</a></p>' +
        '<p class="case-study-line"><a href="https://www.the360mag.com/tag/driving-safety/" target="_blank" rel="noopener noreferrer">360 Magazine</a></p>' +
        "<p class=\"case-study-sect\"><i>Insight</i></p>" +
        "<p>4.6 seconds is the average amount of time a text takes our eyes off the road.</p>" +
        "<p class=\"case-study-sect\"><i>Objective</i></p>" +
        "<p>Boost awareness of how long texting and driving truly distracts drivers.</p>" +
        "<p class=\"case-study-sect\"><i>Idea</i></p>" +
        "<p>Use SmartTint technology in a novel way to remove a driver’s vision for 4.6 seconds—making the danger of distracted driving impossible to ignore.</p>" +
        "<p class=\"case-study-sect\"><i>Results</i></p>" +
        "<p>224.7 million earned media impressions, with coverage in marketing, automotive, and lifestyle media including MediaPost, Car and Driver, Luxury Daily, Jalopnik, and 360 Magazine.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/716637087" }],
      stills: [],
    },
  },
  {
    id: "7",
    slug: "lexus-is-wax",
    title: "Lexus | IS Wax",
    thumb: "thumbs/lexus_is_wax.webp",
    cardTags: "technology, pitchfork, wired",
    tags: ["tech", "general"],
    vimeo: "https://vimeo.com/644584180",
    detail: {
      bodyHTML:
        "<p class=\"case-study-line\">Clio Awards — Bronze, Public Relations</p>" +
        "<p class=\"case-study-line\">The One Show — Shortlist</p>" +
        "<p class=\"case-study-line\">Pitchfork</p>" +
        "<p class=\"case-study-line\">WIRED</p>" +
        "<p class=\"case-study-line\">Uncrate</p>" +
        "<p class=\"case-study-line\">Hypebeast</p>" +
        "<p class=\"case-study-line\">Car and Driver</p>" +
        "<p class=\"case-study-line\">Motor1</p>" +
        "<p class=\"case-study-line\">MotorTrend</p>" +
        "<p class=\"case-study-line\">Jalopnik</p>" +
        "<p>To reach audiophiles, we partnered with Pitchfork, Madlib, and Kaytranada to create something that hadn’t been done in over 40 years: put a working turntable in a car.</p>" +
        "<p>And somehow, it didn’t skip. Even over bumps.</p>" +
        "<p>The Lexus IS Wax Edition turned the sport sedan into a moving vinyl experience—blending music culture, engineering, and craft in a way that made the IS feel unexpected, analog, and alive.</p>" +
        "<p>The campaign helped push the Lexus IS to become the #2 top-selling car in the U.S.—a serious feat for a sport sedan in a category most people had written off.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/644584180" }],
      stills: [],
    },
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
    title: "Microsoft | Zune Arts",
    thumb: "thumbs/microsoft.webp",
    cardTags: "film, digital",
    tags: ["general", "tech"],
    vimeo: "https://vimeo.com/1186435131",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="https://adage.com/creativity/work/zune-arts/2960" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="http://www.aicpshow.com/show/masks/" target="_blank" rel="noopener noreferrer">AICP</a></p>' +
        '<p class="case-study-line"><a href="http://www.annecy.org/about/archives/2008/official-selection/film-index:f20080749" target="_blank" rel="noopener noreferrer">Annecy Finalist</a></p>' +
        '<p class="case-study-line"><a href="http://www.commarts.com/fresh/72andsunny.html" target="_blank" rel="noopener noreferrer">Communication Arts</a></p>' +
        '<p class="case-study-line"><a href="http://creativity-online.com/work/zune-laika/2551" target="_blank" rel="noopener noreferrer">Creativity</a></p>' +
        "<p class=\"case-study-line\">MoMA</p>" +
        "<p class=\"case-study-line\">One Show</p>" +
        "<p>Microsoft's Zune media player was a music device that allowed users to share music wirelessly. " +
        "That may not sound too breakthrough today, but a few years back, it was pretty revolutionary.</p>" +
        '<p>So to generate awareness about this feature, my creative partner, ' +
        '<a href="https://www.linkedin.com/pub/jeff-beberman/3/828/b18" target="_blank" rel="noopener noreferrer">Beebs</a>, ' +
        "and I developed and managed a robust artist program that commissioned emerging artists to create " +
        "art that expressed the themes of sharing and friendship.</p>" +
        "<p>This was one of the most intense, challenging and rewarding projects I've ever worked on – " +
        "collaborating closely with extraordinary artists including Steve Niles and Friendswithyou.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/1186435131" }],
    },
  },
];

window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
