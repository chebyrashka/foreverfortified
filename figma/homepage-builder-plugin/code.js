const COLORS = {
  iron: "#1F2421",
  graphite: "#363A36",
  forest: "#2F4A3D",
  copper: "#B86A3D",
  copperDark: "#934F2D",
  warmWhite: "#F7F3EC",
  stone: "#D8D2C7",
  stoneLight: "#ECE7DD",
  white: "#FFFFFF",
  black: "#101311"
};

const CONTENT = {
  services: [
    {
      title: "Roofing",
      summary:
        "From inspections and repairs to full replacement, Forever Fortified helps homeowners protect the structure that protects everything else.",
      highlights: ["Roof inspections", "Repairs and replacement", "Storm-ready materials"],
      cta: "Explore Roofing",
      image: "https://foreverfortified.com/wp-content/themes/foreverfortified/assets/img/photo-bg-roof.png"
    },
    {
      title: "Siding",
      summary:
        "Refresh curb appeal, improve durability, and reduce maintenance with siding work that gives the whole exterior a cleaner, stronger presence.",
      highlights: ["Exterior refresh", "Weather resistance", "Trim and detail work"],
      cta: "Explore Siding",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Bathroom Remodel",
      summary:
        "Bring comfort, function, storage, and polish into one of the most-used rooms in the home with remodel work built around daily life.",
      highlights: ["Walk-in showers", "Tile and fixtures", "Storage and layout"],
      cta: "Explore Bathrooms",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80"
    }
  ],
  testimonials: [
    {
      quote:
        "The communication was clear from the first estimate, and the finished work made the whole house feel cared for again.",
      meta: "Roofing · Minnesota"
    },
    {
      quote:
        "They helped us understand the options without pushing us into the most expensive route. That mattered.",
      meta: "Siding · Twin Cities Area"
    },
    {
      quote:
        "The remodel made our bathroom easier to use every day, but it also finally feels like it belongs with the rest of the home.",
      meta: "Bathroom Remodel · Minnesota"
    }
  ],
  process: [
    ["01", "Request an estimate", "Share the project type, location, and what you want to solve."],
    ["02", "Walk the home", "Review the existing condition, priorities, options, and constraints."],
    ["03", "Get a clear proposal", "Understand scope, materials, timing, and what happens next."],
    ["04", "Build with care", "Complete the work with respect for the home and a final walkthrough."]
  ],
  articles: [
    [
      "Roofing · 5 min read",
      "How to know when your roof needs more than a repair",
      "The signs homeowners can look for before deciding whether to patch, repair, or start planning a replacement."
    ],
    [
      "Siding · 4 min read",
      "What to consider before replacing siding",
      "Material, trim, color, and maintenance choices that shape how the finished exterior performs and feels."
    ],
    [
      "Bathroom Remodel · 6 min read",
      "Bathroom remodel choices that improve daily comfort",
      "Small layout, lighting, storage, and finish decisions that can make a bathroom easier to use every day."
    ]
  ]
};

let REGULAR_FONT = { family: "Inter", style: "Regular" };
let BOLD_FONT = { family: "Inter", style: "Bold" };
let MEDIUM_FONT = { family: "Inter", style: "Medium" };

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: ((value >> 16) & 255) / 255,
    g: ((value >> 8) & 255) / 255,
    b: (value & 255) / 255
  };
}

function solid(hex, opacity = 1) {
  return { type: "SOLID", color: hexToRgb(hex), opacity };
}

function makeFrame(name, width, height, fill = COLORS.warmWhite) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(width, height);
  frame.fills = [solid(fill)];
  frame.clipsContent = false;
  return frame;
}

function setAuto(frame, direction = "VERTICAL", gap = 0, padding = 0) {
  frame.layoutMode = direction;
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
  frame.itemSpacing = gap;
  frame.paddingTop = padding;
  frame.paddingRight = padding;
  frame.paddingBottom = padding;
  frame.paddingLeft = padding;
}

async function loadFonts() {
  try {
    await figma.loadFontAsync(REGULAR_FONT);
    await figma.loadFontAsync(BOLD_FONT);
    await figma.loadFontAsync(MEDIUM_FONT);
  } catch (error) {
    const fonts = await figma.listAvailableFontsAsync();
    const interRegular = fonts.find((font) => font.fontName.family === "Inter" && font.fontName.style === "Regular");
    const interBold = fonts.find((font) => font.fontName.family === "Inter" && font.fontName.style === "Bold");
    const interMedium = fonts.find((font) => font.fontName.family === "Inter" && font.fontName.style === "Medium");
    const fallback = interRegular || fonts[0];

    REGULAR_FONT = interRegular ? interRegular.fontName : fallback.fontName;
    BOLD_FONT = interBold ? interBold.fontName : REGULAR_FONT;
    MEDIUM_FONT = interMedium ? interMedium.fontName : REGULAR_FONT;

    await figma.loadFontAsync(REGULAR_FONT);
    if (BOLD_FONT.family !== REGULAR_FONT.family || BOLD_FONT.style !== REGULAR_FONT.style) {
      await figma.loadFontAsync(BOLD_FONT);
    }
    if (MEDIUM_FONT.family !== REGULAR_FONT.family || MEDIUM_FONT.style !== REGULAR_FONT.style) {
      await figma.loadFontAsync(MEDIUM_FONT);
    }
  }
}

function textNode(name, value, options = {}) {
  const node = figma.createText();
  node.name = name;
  node.fontName = options.weight === "Bold" ? BOLD_FONT : options.weight === "Medium" ? MEDIUM_FONT : REGULAR_FONT;
  node.fontSize = options.size || 16;
  node.lineHeight = { unit: "PIXELS", value: options.lineHeight || Math.round((options.size || 16) * 1.35) };
  node.letterSpacing = { unit: "PIXELS", value: 0 };
  node.fills = [solid(options.color || COLORS.iron, options.opacity || 1)];
  node.characters = value;
  if (options.width) {
    node.textAutoResize = "HEIGHT";
    node.resize(options.width, node.height);
  }
  return node;
}

function addText(parent, name, value, options = {}) {
  const node = textNode(name, value, options);
  parent.appendChild(node);
  if (options.fillWidth) node.layoutSizingHorizontal = "FILL";
  return node;
}

function button(label, variant = "primary") {
  const btn = makeFrame(`Button / ${label}`, 10, 48, variant === "primary" ? COLORS.copper : COLORS.warmWhite);
  btn.layoutMode = "HORIZONTAL";
  btn.primaryAxisSizingMode = "AUTO";
  btn.counterAxisSizingMode = "FIXED";
  btn.primaryAxisAlignItems = "CENTER";
  btn.counterAxisAlignItems = "CENTER";
  btn.itemSpacing = 8;
  btn.paddingLeft = 18;
  btn.paddingRight = 18;
  btn.cornerRadius = 6;
  if (variant !== "primary") {
    btn.strokes = [solid(COLORS.iron, 0.26)];
    btn.strokeWeight = 1;
  }
  const labelNode = textNode("Label", label, {
    size: 14,
    lineHeight: 16,
    weight: "Bold",
    color: variant === "primary" ? COLORS.white : COLORS.iron
  });
  btn.appendChild(labelNode);
  const arrow = textNode("Arrow", "→", {
    size: 16,
    lineHeight: 16,
    weight: "Bold",
    color: variant === "primary" ? COLORS.white : COLORS.iron
  });
  btn.appendChild(arrow);
  return btn;
}

function imagePlaceholder(name, width, height, url, dark = false) {
  const frame = makeFrame(name, width, height, dark ? COLORS.graphite : COLORS.stone);
  frame.cornerRadius = 0;
  frame.clipsContent = true;
  const overlay = makeFrame("Image source placeholder", width, height, dark ? COLORS.iron : COLORS.stoneLight);
  overlay.opacity = dark ? 0.62 : 1;
  frame.appendChild(overlay);
  const label = textNode("Image URL", url, {
    size: 12,
    lineHeight: 18,
    weight: "Medium",
    color: dark ? COLORS.warmWhite : COLORS.graphite,
    width: Math.max(160, width - 48)
  });
  label.x = 24;
  label.y = Math.max(24, height - 72);
  frame.appendChild(label);
  return frame;
}

function cardFrame(name, width, fill = COLORS.white) {
  const frame = makeFrame(name, width, 100, fill);
  const shadowColor = hexToRgb(COLORS.iron);
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
  frame.cornerRadius = 8;
  frame.strokes = [solid(COLORS.iron, 0.1)];
  frame.strokeWeight = 1;
  frame.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: shadowColor.r, g: shadowColor.g, b: shadowColor.b, a: 0.12 },
      offset: { x: 0, y: 18 },
      radius: 45,
      spread: 0,
      visible: true,
      blendMode: "NORMAL"
    }
  ];
  return frame;
}

function header() {
  const section = makeFrame("Header", 1440, 78, COLORS.warmWhite);
  section.layoutMode = "HORIZONTAL";
  section.primaryAxisAlignItems = "SPACE_BETWEEN";
  section.counterAxisAlignItems = "CENTER";
  section.paddingLeft = 40;
  section.paddingRight = 40;
  section.strokes = [solid(COLORS.iron, 0.1)];
  section.strokeWeight = 1;

  const brand = makeFrame("Brand", 230, 46, COLORS.warmWhite);
  brand.layoutMode = "HORIZONTAL";
  brand.primaryAxisSizingMode = "AUTO";
  brand.counterAxisSizingMode = "FIXED";
  brand.counterAxisAlignItems = "CENTER";
  brand.itemSpacing = 12;
  const mark = makeFrame("Brand Mark", 44, 44, COLORS.iron);
  mark.cornerRadius = 6;
  const ff = textNode("FF", "FF", { size: 13, lineHeight: 16, weight: "Bold", color: COLORS.warmWhite });
  ff.x = 13;
  ff.y = 14;
  mark.appendChild(ff);
  brand.appendChild(mark);
  const lockup = makeFrame("Brand Text", 150, 38, COLORS.warmWhite);
  setAuto(lockup, "VERTICAL", 2, 0);
  addText(lockup, "Name", "Forever Fortified", { size: 16, lineHeight: 16, weight: "Bold" });
  addText(lockup, "Tagline", "Built to hold up", { size: 12, lineHeight: 16, color: COLORS.graphite, opacity: 0.72 });
  brand.appendChild(lockup);
  section.appendChild(brand);

  const nav = makeFrame("Navigation", 430, 42, COLORS.warmWhite);
  nav.layoutMode = "HORIZONTAL";
  nav.primaryAxisSizingMode = "AUTO";
  nav.counterAxisSizingMode = "FIXED";
  nav.itemSpacing = 20;
  nav.counterAxisAlignItems = "CENTER";
  ["Services", "Articles", "About"].forEach((item) => {
    nav.appendChild(textNode(`Nav / ${item}`, item, { size: 14, lineHeight: 18, weight: "Bold", color: COLORS.graphite }));
  });
  section.appendChild(nav);

  const actions = makeFrame("Actions", 320, 48, COLORS.warmWhite);
  actions.layoutMode = "HORIZONTAL";
  actions.primaryAxisSizingMode = "AUTO";
  actions.counterAxisSizingMode = "FIXED";
  actions.itemSpacing = 16;
  actions.counterAxisAlignItems = "CENTER";
  actions.appendChild(textNode("Phone", "(555) 013-4427", { size: 14, lineHeight: 18, weight: "Bold", color: COLORS.graphite }));
  actions.appendChild(button("Request Estimate", "primary"));
  section.appendChild(actions);

  return section;
}

function hero() {
  const section = makeFrame("Hero", 1440, 822, COLORS.iron);
  const image = imagePlaceholder("Hero image placeholder", 1440, 822, "photo-bg-roof.png", true);
  image.x = 0;
  image.y = 0;
  section.appendChild(image);

  const shade = figma.createRectangle();
  shade.name = "Dark overlay";
  shade.resize(1440, 822);
  shade.fills = [solid(COLORS.black, 0.58)];
  section.appendChild(shade);

  const content = makeFrame("Hero Content", 1360, 680, COLORS.black);
  content.fills = [];
  content.x = 40;
  content.y = 110;
  content.layoutMode = "VERTICAL";
  content.primaryAxisSizingMode = "FIXED";
  content.counterAxisSizingMode = "FIXED";
  content.primaryAxisAlignItems = "MIN";
  content.counterAxisAlignItems = "MIN";
  content.itemSpacing = 40;

  const copy = makeFrame("Hero Copy", 780, 430, COLORS.black);
  copy.fills = [];
  setAuto(copy, "VERTICAL", 20, 0);
  addText(copy, "Eyebrow", "Roofing. Siding. Bathroom remodels.", {
    size: 13,
    lineHeight: 18,
    weight: "Bold",
    color: COLORS.stone
  });
  addText(copy, "Headline", "Exterior and remodeling work built to hold up.", {
    size: 96,
    lineHeight: 88,
    weight: "Bold",
    color: COLORS.white,
    width: 780
  });
  addText(copy, "Intro", "Forever Fortified helps homeowners improve, protect, and refresh their homes with roofing, siding, and bathroom remodel services designed for long-term value.", {
    size: 20,
    lineHeight: 30,
    color: COLORS.white,
    opacity: 0.82,
    width: 650
  });
  const buttons = makeFrame("Hero Buttons", 430, 48, COLORS.black);
  buttons.fills = [];
  buttons.layoutMode = "HORIZONTAL";
  buttons.primaryAxisSizingMode = "AUTO";
  buttons.counterAxisSizingMode = "FIXED";
  buttons.itemSpacing = 12;
  buttons.appendChild(button("Request a Free Estimate", "primary"));
  buttons.appendChild(button("Explore Services", "light"));
  copy.appendChild(buttons);
  content.appendChild(copy);

  const proof = makeFrame("Hero Proof Strip", 1360, 112, COLORS.white);
  proof.fills = [solid(COLORS.white, 0.12)];
  proof.strokes = [solid(COLORS.white, 0.18)];
  proof.strokeWeight = 1;
  proof.cornerRadius = 8;
  proof.layoutMode = "HORIZONTAL";
  proof.counterAxisSizingMode = "FIXED";
  proof.primaryAxisSizingMode = "FIXED";
  proof.itemSpacing = 1;
  const proofItems = [
    ["3", "Core home improvement specialties"],
    ["01", "Clear next step from estimate to walkthrough"],
    ["FF", "Built around durable, practical recommendations"]
  ];
  proofItems.forEach(([stat, label]) => {
    const cell = makeFrame(`Proof / ${stat}`, 452, 112, COLORS.black);
    cell.fills = [solid(COLORS.black, 0.42)];
    setAuto(cell, "VERTICAL", 8, 24);
    addText(cell, "Stat", stat, { size: 24, lineHeight: 28, weight: "Bold", color: COLORS.warmWhite });
    addText(cell, "Label", label, { size: 14, lineHeight: 20, color: COLORS.warmWhite, opacity: 0.72, width: 250 });
    proof.appendChild(cell);
  });
  content.appendChild(proof);
  section.appendChild(content);
  return section;
}

function trustStrip() {
  const section = makeFrame("Trust Strip", 1440, 78, COLORS.warmWhite);
  section.layoutMode = "HORIZONTAL";
  section.counterAxisSizingMode = "FIXED";
  section.primaryAxisSizingMode = "FIXED";
  ["Locally focused", "Free estimates", "Roofing, siding, bathrooms", "Practical project guidance"].forEach((item) => {
    const cell = makeFrame(`Trust / ${item}`, 360, 78, COLORS.warmWhite);
    cell.strokes = [solid(COLORS.iron, 0.1)];
    cell.strokeWeight = 1;
    const label = textNode("Label", item, { size: 14, lineHeight: 18, weight: "Bold", color: COLORS.graphite, width: 260 });
    label.textAlignHorizontal = "CENTER";
    label.x = 50;
    label.y = 30;
    cell.appendChild(label);
    section.appendChild(cell);
  });
  return section;
}

function servicesSection() {
  const section = makeFrame("Services", 1440, 850, COLORS.warmWhite);
  setAuto(section, "VERTICAL", 48, 0);
  section.paddingTop = 112;
  section.paddingBottom = 112;
  section.counterAxisAlignItems = "CENTER";

  const heading = makeFrame("Services Heading", 1180, 180, COLORS.warmWhite);
  setAuto(heading, "VERTICAL", 16, 0);
  addText(heading, "Eyebrow", "Core specialties", { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.copper });
  addText(heading, "Title", "Start with the part of your home that needs attention most.", {
    size: 56,
    lineHeight: 56,
    weight: "Bold",
    width: 820
  });
  addText(heading, "Body", "Each service page is designed to help homeowners understand the work, the options, and the next clear step.", {
    size: 18,
    lineHeight: 27,
    color: COLORS.graphite,
    opacity: 0.76,
    width: 650
  });
  section.appendChild(heading);

  const grid = makeFrame("Service Card Grid", 1180, 500, COLORS.warmWhite);
  grid.layoutMode = "HORIZONTAL";
  grid.primaryAxisSizingMode = "FIXED";
  grid.counterAxisSizingMode = "AUTO";
  grid.itemSpacing = 20;
  CONTENT.services.forEach((service) => {
    const card = cardFrame(`Service Card / ${service.title}`, 380);
    card.appendChild(imagePlaceholder(`Image / ${service.title}`, 380, 285, service.image, false));
    const body = makeFrame("Card Body", 380, 220, COLORS.white);
    setAuto(body, "VERTICAL", 12, 24);
    addText(body, "Title", service.title, { size: 22, lineHeight: 26, weight: "Bold", width: 320 });
    addText(body, "Summary", service.summary, { size: 15, lineHeight: 22, color: COLORS.graphite, opacity: 0.76, width: 320 });
    service.highlights.forEach((item) => {
      addText(body, `Highlight / ${item}`, `• ${item}`, { size: 14, lineHeight: 20, weight: "Medium", color: COLORS.graphite, width: 320 });
    });
    addText(body, "CTA", `${service.cta} →`, { size: 14, lineHeight: 18, weight: "Bold", color: COLORS.forest });
    card.appendChild(body);
    grid.appendChild(card);
  });
  section.appendChild(grid);
  return section;
}

function whySection() {
  const section = makeFrame("Why Forever Fortified", 1440, 520, COLORS.stoneLight);
  const grid = makeFrame("Why Grid", 1180, 300, COLORS.stoneLight);
  grid.x = 130;
  grid.y = 112;
  grid.layoutMode = "HORIZONTAL";
  grid.primaryAxisSizingMode = "FIXED";
  grid.counterAxisSizingMode = "AUTO";
  grid.itemSpacing = 80;
  const left = makeFrame("Why Copy Left", 500, 240, COLORS.stoneLight);
  setAuto(left, "VERTICAL", 16, 0);
  addText(left, "Eyebrow", "Why Forever Fortified", { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.copper });
  addText(left, "Title", "Built around the details homeowners notice.", { size: 56, lineHeight: 56, weight: "Bold", width: 500 });
  grid.appendChild(left);

  const right = makeFrame("Why Copy Right", 600, 300, COLORS.stoneLight);
  setAuto(right, "VERTICAL", 32, 0);
  addText(right, "Body", "The design should make the company feel specific: sturdy recommendations, clean communication, and work that respects the home before, during, and after the project.", {
    size: 20,
    lineHeight: 30,
    color: COLORS.graphite,
    opacity: 0.78,
    width: 600
  });
  const blocks = makeFrame("Proof Blocks", 600, 150, COLORS.stoneLight);
  setAuto(blocks, "VERTICAL", 12, 0);
  [
    ["Weather-ready thinking", "Cleaner project communication"],
    ["Materials matched to long-term value", "Respect for the finished home"]
  ].forEach((rowItems, rowIndex) => {
    const row = makeFrame(`Proof Row / ${rowIndex + 1}`, 600, 66, COLORS.stoneLight);
    row.layoutMode = "HORIZONTAL";
    row.primaryAxisSizingMode = "FIXED";
    row.counterAxisSizingMode = "FIXED";
    row.itemSpacing = 12;
    rowItems.forEach((item) => {
      const block = makeFrame(`Proof / ${item}`, 294, 66, COLORS.white);
      block.fills = [solid(COLORS.white, 0.6)];
      const accent = figma.createRectangle();
      accent.name = "Copper accent";
      accent.resize(3, 66);
      accent.fills = [solid(COLORS.copper)];
      block.appendChild(accent);
      const label = textNode("Label", item, { size: 15, lineHeight: 20, weight: "Bold", width: 240 });
      label.x = 16;
      label.y = 14;
      block.appendChild(label);
      row.appendChild(block);
    });
    blocks.appendChild(row);
  });
  right.appendChild(blocks);
  grid.appendChild(right);
  section.appendChild(grid);
  return section;
}

function projectSpotlight() {
  const section = makeFrame("Project Spotlight", 1440, 744, COLORS.warmWhite);
  const grid = makeFrame("Spotlight Grid", 1360, 520, COLORS.warmWhite);
  grid.x = 40;
  grid.y = 112;
  grid.layoutMode = "HORIZONTAL";
  grid.itemSpacing = 32;
  grid.appendChild(imagePlaceholder("Project Image", 850, 520, "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80", false));
  const copy = makeFrame("Spotlight Copy", 478, 520, COLORS.forest);
  setAuto(copy, "VERTICAL", 20, 48);
  addText(copy, "Eyebrow", "Siding and exterior detail", { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.stone });
  addText(copy, "Title", "Exterior refresh with a stronger first impression", { size: 48, lineHeight: 48, weight: "Bold", color: COLORS.white, width: 382 });
  addText(copy, "Body", "A focused exterior update can change how a home feels from the curb while adding better long-term protection from weather and wear.", {
    size: 16,
    lineHeight: 24,
    color: COLORS.warmWhite,
    opacity: 0.78,
    width: 360
  });
  addText(copy, "Location", "Minnesota", { size: 15, lineHeight: 20, weight: "Bold", color: COLORS.stone });
  copy.appendChild(button("View Recent Work", "secondary"));
  grid.appendChild(copy);
  section.appendChild(grid);
  return section;
}

function testimonialsSection() {
  const section = makeFrame("Testimonials", 1440, 680, COLORS.stoneLight);
  setAuto(section, "VERTICAL", 48, 0);
  section.paddingTop = 112;
  section.paddingBottom = 112;
  section.counterAxisAlignItems = "CENTER";
  const heading = makeFrame("Testimonials Heading", 820, 150, COLORS.stoneLight);
  setAuto(heading, "VERTICAL", 16, 0);
  heading.counterAxisAlignItems = "CENTER";
  addText(heading, "Eyebrow", "Homeowner proof", { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.copper });
  const title = addText(heading, "Title", "The kind of work people are comfortable recommending.", {
    size: 56,
    lineHeight: 56,
    weight: "Bold",
    width: 820
  });
  title.textAlignHorizontal = "CENTER";
  section.appendChild(heading);
  const grid = makeFrame("Testimonial Grid", 1180, 320, COLORS.stoneLight);
  grid.layoutMode = "HORIZONTAL";
  grid.itemSpacing = 20;
  CONTENT.testimonials.forEach((item, index) => {
    const card = cardFrame(`Testimonial / ${index + 1}`, 380);
    card.paddingTop = 24;
    card.paddingLeft = 24;
    card.paddingRight = 24;
    card.paddingBottom = 24;
    card.itemSpacing = 52;
    addText(card, "Quote", item.quote, { size: 25, lineHeight: 31, color: COLORS.iron, width: 320 });
    addText(card, "Meta", `Homeowner\n${item.meta}`, { size: 14, lineHeight: 20, weight: "Bold", color: COLORS.graphite, width: 320 });
    grid.appendChild(card);
  });
  section.appendChild(grid);
  return section;
}

function processSection() {
  const section = makeFrame("Process", 1440, 620, COLORS.warmWhite);
  setAuto(section, "VERTICAL", 48, 0);
  section.paddingTop = 112;
  section.paddingBottom = 112;
  section.counterAxisAlignItems = "CENTER";
  const heading = makeFrame("Process Heading", 1180, 135, COLORS.warmWhite);
  setAuto(heading, "VERTICAL", 16, 0);
  addText(heading, "Eyebrow", "Process", { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.copper });
  addText(heading, "Title", "A clear path from first call to final walkthrough.", { size: 56, lineHeight: 56, weight: "Bold", width: 820 });
  section.appendChild(heading);
  const grid = makeFrame("Process Grid", 1180, 250, COLORS.stone);
  grid.layoutMode = "HORIZONTAL";
  grid.itemSpacing = 1;
  CONTENT.process.forEach(([number, title, body]) => {
    const cell = makeFrame(`Step / ${number}`, 294, 250, COLORS.white);
    setAuto(cell, "VERTICAL", 12, 24);
    addText(cell, "Number", number, { size: 14, lineHeight: 18, weight: "Bold", color: COLORS.copper });
    addText(cell, "Title", title, { size: 21, lineHeight: 26, weight: "Bold", width: 230 });
    addText(cell, "Body", body, { size: 15, lineHeight: 22, color: COLORS.graphite, opacity: 0.72, width: 230 });
    grid.appendChild(cell);
  });
  section.appendChild(grid);
  return section;
}

function articlesSection() {
  const section = makeFrame("Articles", 1440, 720, COLORS.warmWhite);
  setAuto(section, "VERTICAL", 48, 0);
  section.paddingTop = 112;
  section.paddingBottom = 112;
  section.counterAxisAlignItems = "CENTER";
  const heading = makeFrame("Articles Heading", 1180, 145, COLORS.warmWhite);
  heading.layoutMode = "HORIZONTAL";
  heading.primaryAxisAlignItems = "SPACE_BETWEEN";
  heading.counterAxisAlignItems = "END";
  const left = makeFrame("Heading Copy", 760, 145, COLORS.warmWhite);
  setAuto(left, "VERTICAL", 16, 0);
  addText(left, "Eyebrow", "Homeowner guides", { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.copper });
  addText(left, "Title", "Helpful reading before you start a project.", { size: 56, lineHeight: 56, weight: "Bold", width: 720 });
  heading.appendChild(left);
  heading.appendChild(button("Read Articles", "secondary"));
  section.appendChild(heading);

  const grid = makeFrame("Article Grid", 1180, 360, COLORS.warmWhite);
  grid.layoutMode = "HORIZONTAL";
  grid.itemSpacing = 20;
  CONTENT.articles.forEach(([meta, title, excerpt], index) => {
    const card = cardFrame(`Article Card / ${index + 1}`, 380);
    card.appendChild(imagePlaceholder(`Article Image / ${index + 1}`, 380, 238, "Article thumbnail placeholder", false));
    const body = makeFrame("Article Body", 380, 160, COLORS.white);
    setAuto(body, "VERTICAL", 10, 24);
    addText(body, "Meta", meta, { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.copper });
    addText(body, "Title", title, { size: 19, lineHeight: 23, weight: "Bold", width: 320 });
    addText(body, "Excerpt", excerpt, { size: 15, lineHeight: 22, color: COLORS.graphite, opacity: 0.72, width: 320 });
    card.appendChild(body);
    grid.appendChild(card);
  });
  section.appendChild(grid);
  return section;
}

function ctaSection() {
  const section = makeFrame("Final CTA", 1440, 300, COLORS.iron);
  const inner = makeFrame("CTA Inner", 1180, 160, COLORS.iron);
  inner.x = 130;
  inner.y = 70;
  inner.layoutMode = "HORIZONTAL";
  inner.primaryAxisAlignItems = "SPACE_BETWEEN";
  inner.counterAxisAlignItems = "CENTER";
  const copy = makeFrame("CTA Copy", 720, 160, COLORS.iron);
  setAuto(copy, "VERTICAL", 14, 0);
  addText(copy, "Eyebrow", "Start here", { size: 13, lineHeight: 18, weight: "Bold", color: COLORS.copper });
  addText(copy, "Title", "Ready to fortify your home?", { size: 56, lineHeight: 56, weight: "Bold", color: COLORS.white, width: 720 });
  addText(copy, "Body", "Tell us what you are planning and we will help you take the next clear step.", {
    size: 16,
    lineHeight: 24,
    color: COLORS.warmWhite,
    opacity: 0.74,
    width: 560
  });
  inner.appendChild(copy);
  inner.appendChild(button("Request a Free Estimate", "primary"));
  section.appendChild(inner);
  return section;
}

function footerSection() {
  const section = makeFrame("Footer", 1440, 380, COLORS.iron);
  const inner = makeFrame("Footer Inner", 1180, 250, COLORS.iron);
  inner.x = 130;
  inner.y = 80;
  inner.layoutMode = "HORIZONTAL";
  inner.primaryAxisAlignItems = "SPACE_BETWEEN";
  inner.counterAxisAlignItems = "MIN";

  const brand = makeFrame("Footer Brand", 380, 220, COLORS.iron);
  setAuto(brand, "VERTICAL", 18, 0);
  addText(brand, "Name", "Forever Fortified", { size: 22, lineHeight: 26, weight: "Bold", color: COLORS.white });
  addText(brand, "Text", "Practical recommendations, durable materials, and clean work for homeowners who want the job done with care.", {
    size: 16,
    lineHeight: 24,
    color: COLORS.warmWhite,
    opacity: 0.72,
    width: 340
  });
  inner.appendChild(brand);

  const services = makeFrame("Footer Services", 200, 220, COLORS.iron);
  setAuto(services, "VERTICAL", 12, 0);
  addText(services, "Heading", "Services", { size: 15, lineHeight: 20, weight: "Bold", color: COLORS.white });
  ["Roofing", "Siding", "Bathroom Remodel"].forEach((item) =>
    addText(services, `Link / ${item}`, item, { size: 15, lineHeight: 20, color: COLORS.warmWhite, opacity: 0.72 })
  );
  inner.appendChild(services);

  const contact = makeFrame("Footer Contact", 260, 220, COLORS.iron);
  setAuto(contact, "VERTICAL", 12, 0);
  addText(contact, "Heading", "Start a project", { size: 15, lineHeight: 20, weight: "Bold", color: COLORS.white });
  addText(contact, "Phone", "(555) 013-4427", { size: 15, lineHeight: 20, color: COLORS.warmWhite, opacity: 0.72 });
  addText(contact, "Email", "hello@foreverfortified.com", { size: 15, lineHeight: 20, color: COLORS.warmWhite, opacity: 0.72 });
  contact.appendChild(button("Request Estimate", "primary"));
  inner.appendChild(contact);
  section.appendChild(inner);
  return section;
}

async function main() {
  await loadFonts();

  const page = figma.currentPage;
  if (page.loadAsync) {
    await page.loadAsync();
  }
  let maxX = 0;
  for (const child of page.children) {
    maxX = Math.max(maxX, child.x + child.width);
  }

  const wrapper = makeFrame("Homepage / Desktop", 1440, 100, COLORS.warmWhite);
  wrapper.x = maxX + 160;
  wrapper.y = 0;
  wrapper.layoutMode = "VERTICAL";
  wrapper.primaryAxisSizingMode = "AUTO";
  wrapper.counterAxisSizingMode = "FIXED";
  wrapper.counterAxisAlignItems = "CENTER";
  wrapper.itemSpacing = 0;

  const sections = [
    header(),
    hero(),
    trustStrip(),
    servicesSection(),
    whySection(),
    projectSpotlight(),
    testimonialsSection(),
    processSection(),
    articlesSection(),
    ctaSection(),
    footerSection()
  ];

  for (const section of sections) {
    wrapper.appendChild(section);
    section.layoutSizingHorizontal = "FIXED";
  }

  page.appendChild(wrapper);
  figma.viewport.scrollAndZoomIntoView([wrapper]);
  figma.closePlugin("Forever Fortified homepage created.");
}

main().catch((error) => {
  figma.closePlugin(`Error: ${error.message}`);
});
