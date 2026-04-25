/**
 * Projects — homepage grid + case studies.
 * Homepage: /thumbs/ (see thumbs/dimensions.txt).
 * Case-study stills: /stills/<project>/ (see stills/README.txt).
 * Use detail.body (plain) or detail.bodyHTML (for links; recognition, etc.)
 * Project title: use the top H1 only (all caps via CSS, not bold). In bodyHTML: p.case-study-line
 * for each award/recognition/press line (one block per line), then
 * p.case-study-sect: <i>Insight</i> / <i>Idea</i> / <i>Objective</i> (italic section labels, not h1–h3).
 * Optional: detail.railHTML — HTML in the right column below stills (e.g. extra Vimeo embeds).
 * Optional: detail.stillsLabel — set to false to hide the “Stills” heading, or a string to replace it.
 * Optional stills row: { section: "SITE" } or { subSection: "References" } (headings, no image).
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
        '<p class="case-study-line"><a href="https://adage.com/creativity/work/keep-dreaming/2533811/" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="https://www.adforum.com/creative-work/ad/player/34686990/keep-dreaming/honda" target="_blank" rel="noopener noreferrer">AdForum — Honda &ldquo;Keep Dreaming&rdquo;</a></p>' +
        "<p class=\"case-study-line\">Ads of the World</p>" +
        "<p class=\"case-study-line\">LA Addy Awards: Gold</p>" +
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
      stillsLabel: false,
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
      stillsLabel: "Production",
      stills: [
        { section: "Site" },
        { src: "stills/honda-dream-generator/1_site.png", alt: "Honda Dream Generator — site 1" },
        { src: "stills/honda-dream-generator/2_site.jpeg", alt: "Honda Dream Generator — site 2" },
        { src: "stills/honda-dream-generator/3_site.png", alt: "Honda Dream Generator — site 3" },
        { section: "Training" },
        { src: "stills/honda-dream-generator/1_training.jpeg", alt: "Honda Dream Generator — training 1" },
        { src: "stills/honda-dream-generator/2_training.jpg", alt: "Honda Dream Generator — training 2" },
        { section: "ControlNet + references" },
        { subSection: "References" },
        { src: "stills/honda-dream-generator/1_controlnet+references.gif", alt: "Honda Dream Generator — ControlNet references 1" },
        { src: "stills/honda-dream-generator/2_controlnet+references.gif", alt: "Honda Dream Generator — ControlNet references 2" },
        { src: "stills/honda-dream-generator/3_controlnet+references.gif", alt: "Honda Dream Generator — ControlNet references 3" },
        { subSection: "ControlNet + LoRAs" },
        { src: "stills/honda-dream-generator/1_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet + LoRAs 1" },
        { src: "stills/honda-dream-generator/2_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet + LoRAs 2" },
        { src: "stills/honda-dream-generator/3_controlnet+loras.jpeg", alt: "Honda Dream Generator — ControlNet + LoRAs 3" },
        { src: "stills/honda-dream-generator/4_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet + LoRAs 4" },
        { src: "stills/honda-dream-generator/5_controlnet+loras.png", alt: "Honda Dream Generator — ControlNet + LoRAs 5" },
        { src: "stills/honda-dream-generator/6_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet + LoRAs 6" },
        { src: "stills/honda-dream-generator/7_controlnet+loras.png", alt: "Honda Dream Generator — ControlNet + LoRAs 7" },
        { src: "stills/honda-dream-generator/8_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet + LoRAs 8" },
        { src: "stills/honda-dream-generator/9_controlnet+loras.jpeg", alt: "Honda Dream Generator — ControlNet + LoRAs 9" },
        { src: "stills/honda-dream-generator/10_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet + LoRAs 10" },
        { src: "stills/honda-dream-generator/11_controlnet+loras.png", alt: "Honda Dream Generator — ControlNet + LoRAs 11" },
        { src: "stills/honda-dream-generator/12_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet + LoRAs 12" },
      ],
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
        '<p class="case-study-line"><a href="https://adage.com/article/cmo-strategy/lexus-made-car-just-gamers/2315656" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="https://www.marketingdive.com/news/lexus-crowdsources-gamer-ready-car-design-on-twitch/593363/" target="_blank" rel="noopener noreferrer">Marketing Dive</a></p>' +
        '<p class="case-study-line"><a href="https://www.theweek.co.uk/952049/lexus-gamers-is-the-ultimate-gaming-space" target="_blank" rel="noopener noreferrer">The Week</a></p>' +
        '<p class="case-study-line"><a href="https://www.caranddriver.com/news/a35562123/2021-lexus-is350-f-sport-twitch-gaming-pc/" target="_blank" rel="noopener noreferrer">Car and Driver</a></p>' +
        '<p class="case-study-line"><a href="https://www.cnet.com/roadshow/news/twitch-gamers-mod-lexus-rgb-lights/" target="_blank" rel="noopener noreferrer">CNET</a></p>' +
        '<p class="case-study-line"><a href="https://hypebeast.com/2021/2/lexus-twitch-gamers-is-2021-lexus-is-all-in-campaign-announcement" target="_blank" rel="noopener noreferrer">Hypebeast</a></p>' +
        '<p class="case-study-line"><a href="https://www.ballerstatus.com/2021/02/18/lexus-partners-with-twitch-to-create-ultimate-gamers-is-350/" target="_blank" rel="noopener noreferrer">BallerStatus</a></p>' +
        '<p class="case-study-line">Called “the model for marketers” by Twitch’s CEO</p>' +
        "<p>Gamers aren’t interested in car ads.</p>" +
        "<p>So we set out to build Gamers’ IS—the world’s first 150 mph mobile gaming space. With Twitch streamer Fuslie, we let fans vote on the features, then turned their dream build into a real, one-of-one Lexus IS.</p>" +
        "<p>The result: a livestream reveal, gamer-approved details, and a campaign that helped drive a 178% spike in IS sales—and helped push the Lexus IS to become the #2 top-selling car in the U.S.</p>" +
        '<p>See <a href="https://www.roadandtrack.com/news/a35924761/lexus-is-350-fastest-selling/" target="_blank" rel="noopener noreferrer">Road &amp; Track</a> for more on the IS in the market.</p>',
      media: [{ type: "vimeo", url: "https://vimeo.com/670863804" }],
      stills: [
        { src: "stills/lexus-gamers-is/1.png", alt: "Gamers' IS 1" },
        { src: "stills/lexus-gamers-is/2.png", alt: "Gamers' IS 2" },
        { src: "stills/lexus-gamers-is/3.png", alt: "Gamers' IS 3" },
        { src: "stills/lexus-gamers-is/4.png", alt: "Gamers' IS 4" },
        { src: "stills/lexus-gamers-is/5.gif", alt: "Gamers' IS 5" },
      ],
      stillsLabel: "SOCIAL",
      railHTML:
        '<p class="project-rail-h">LIVESTREAM</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/526343448?title=0&byline=0&portrait=0" title="Gamers’ IS — livestream recap" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">BUILD</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/526328758?title=0&byline=0&portrait=0" title="Gamers’ IS — build" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>',
    },
  },
  {
    id: "5",
    slug: "grammys",
    title: "GRAMMYs | Music is life is music",
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
        "<p>How do you get music lovers excited about the GRAMMYs again?</p>" +
        "<p>Let them share the soundtrack of their lives.</p>" +
        "<p>We built a platform where users tagged songs to places and memories—allowing them to create their own audiobiographies.</p>" +
        "<p>I helped concept and write the site, app, TV, and more—from recording Katy Perry in the basement of Staples Center to recording Samuel L. Jackson at CBS.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/20124076" }],
      stills: [],
      railHTML:
        '<p class="project-rail-h">Platform</p>' +
        '<div class="project-rail__figure"><img src="stills/grammys/1.png" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs platform 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/2.gif" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs platform 2" /></div>' +
        '<p class="project-rail-h">Broadcast</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20124364?title=0&byline=0&portrait=0" title="Music Is Life Is Music — Eminem promo" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20124575?title=0&byline=0&portrait=0" title="Music Is Life Is Music — Cee Lo Green" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Katy Perry app demo</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20124183?title=0&byline=0&portrait=0" title="App demo" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Posters</p>' +
        '<div class="project-rail__figure"><img src="stills/grammys/3.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/4.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/5.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 3" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/6.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 4" /></div>',
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
    vimeo: "https://vimeo.com/670864058",
    detail: {
      bodyHTML:
        "<p class=\"case-study-line\">Clio Awards — Bronze, Public Relations</p>" +
        "<p class=\"case-study-line\">The One Show — Shortlist</p>" +
        "<p>Audiophiles are a subculture we wanted to reach with the Lexus IS.</p>" +
        "<p>So we teamed up with Pitchfork, Madlib, and Kaytranada to do something no one had done in 40 years:</p>" +
        "<p>Put a working turntable in a car.</p>" +
        "<p>Fun fact: it didn’t skip—even over bumps.</p>" +
        "<p>The result: a sport sedan that felt unexpected, analog, and alive—and helped push the IS to become the #2 top-selling car in the U.S.</p>" +
        "<p>Featured in Pitchfork, Wired, Uncrate, Hypebeast, Car and Driver, Motor1, MotorTrend, and Jalopnik.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/670864058" }],
      stills: [],
      railHTML:
        '<p class="project-rail-h">Twitter</p>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/1_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — Twitter 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/2_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — Twitter 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/3_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — Twitter 3" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/4_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — Twitter 4" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/5_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — Twitter 5" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/6_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — Twitter 6" /></div>' +
        '<p class="project-rail-h">Documentary</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/526462857?title=0&byline=0&portrait=0" title="Lexus IS Wax — documentary" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Wired photo essay</p>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/1_wired_essay.png" width="1600" height="900" loading="lazy" decoding="async" alt="Wired photo essay" /></div>' +
        '<p class="project-rail__linkline"><a href="https://www.wired.com/sponsored/story/creating-a-vinyl-record-player-system-for-a-car/" target="_blank" rel="noopener noreferrer">Creating a vinyl record player system for a car — WIRED</a></p>' +
        '<p class="project-rail-h">Build demo</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/502303302?title=0&byline=0&portrait=0" title="Lexus IS Wax — build demo" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>',
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
        "<p>Zune let people share music wirelessly—pretty radical at the time.</p>" +
        "<p>To drive awareness, my partner and I led an artist program centered on sharing and friendship—collaborating and concepting with culture-shaping artists including Steve Niles and FriendsWithYou.</p>" +
        "<p>Intense, challenging, and one of the most rewarding projects I’ve worked on.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/1186435131" }],
      stills: [],
      railHTML:
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/19449868?title=0&byline=0&portrait=0" title="Laika" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/19539791?title=0&byline=0&portrait=0" title="Le Cadeau du Temps" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/19445552?title=0&byline=0&portrait=0" title="Piece of Me, Piece of You" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20121977?title=0&byline=0&portrait=0" title="The Lost Ones — graphic novel trailer" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20121995?title=0&byline=0&portrait=0" title="The Lost Ones — behind the scenes" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Graphic novel</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20121977?title=0&byline=0&portrait=0" title="The Lost Ones — graphic novel trailer" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/1_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/2_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/3_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 3" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/4_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 4" /></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20121995?title=0&byline=0&portrait=0" title="The Lost Ones — behind the scenes" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Promos</p>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/1_promo.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="Zune Arts promo 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/2_promos.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="Zune Arts promo 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/3_promos.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="Zune Arts promo 3" /></div>',
    },
  },
];

window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
