export type ArticleCategory = "Roofing" | "Siding" | "Gutters" | "Bathroom Remodel";

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  readTime: string;
  sortOrder?: number;
  excerpt: string;
  image: string;
  intro?: string[];
  sections?: ArticleSection[];
  closing?: string[];
};

type StoryblokAsset = {
  filename?: string;
};

type StoryblokSection = {
  title?: string;
  paragraphs?: string[] | string;
  bullets?: string[] | string;
  content?: StoryblokRichText;
};

type StoryblokArticleContent = {
  title?: string;
  category?: string;
  read_time?: string;
  readTime?: string;
  order?: number | string;
  sort_order?: number | string;
  sortOrder?: number | string;
  excerpt?: string;
  hero_image?: StoryblokAsset | string;
  image?: StoryblokAsset | string;
  intro?: string[] | string;
  sections?: StoryblokSection[];
  closing?: string[] | string;
};

const categoryLabels: Record<string, ArticleCategory> = {
  roofing: "Roofing",
  roof: "Roofing",
  siding: "Siding",
  gutters: "Gutters",
  gutter: "Gutters",
  bathroom: "Bathroom Remodel",
  "bathroom-remodel": "Bathroom Remodel",
  bathroom_remodel: "Bathroom Remodel",
  "Bathroom Remodel": "Bathroom Remodel",
  Roofing: "Roofing",
  Siding: "Siding",
  Gutters: "Gutters"
};

type StoryblokRichText = {
  type?: string;
  text?: string;
  attrs?: Record<string, unknown>;
  content?: StoryblokRichText[];
};

type StoryblokStory = {
  name: string;
  slug: string;
  full_slug: string;
  content: StoryblokArticleContent;
};

const localArticleEntries = Object.values(
  import.meta.glob<Article>("./articles/*.json", {
    eager: true,
    import: "default"
  })
);

const sortArticles = (entries: Article[]) =>
  [...entries].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));

export const articles = sortArticles(localArticleEntries);

const envValue = (key: string) => import.meta.env[key] || process.env[key];

const textArray = (value: string[] | string | undefined): string[] | undefined => {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/\n{2,}/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return undefined;
};

const assetUrl = (value: StoryblokAsset | string | undefined) => {
  if (typeof value === "string") {
    return value;
  }

  return value?.filename || "";
};

const numericSortOrder = (value: number | string | undefined) => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  }

  return undefined;
};

const articleSlug = (story: StoryblokStory) => story.full_slug.replace(/^articles\//, "").replace(/\/$/, "");

const slugLikePattern = /^[a-z0-9]+(?:[-_][a-z0-9]+)+$/i;

const humanizeSlug = (value: string) => {
  const smallWords = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "more", "nor", "of", "on", "or", "over", "the", "to", "when", "with"]);
  const words = value
    .replace(/^articles\//, "")
    .replace(/\/$/, "")
    .split(/[-_\s]+/)
    .filter(Boolean);

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();

      if (index > 0 && index < words.length - 1 && smallWords.has(lower)) {
        return lower;
      }

      return `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`;
    })
    .join(" ");
};

const storyTitle = (story: StoryblokStory, value: string | undefined) => {
  const title = value?.trim();
  const name = story.name?.trim();

  if (title && !slugLikePattern.test(title)) {
    return title;
  }

  if (name && !slugLikePattern.test(name)) {
    return name;
  }

  return humanizeSlug(articleSlug(story));
};

const categoryLabel = (value: string | undefined): ArticleCategory => {
  if (!value) {
    return "Roofing";
  }

  const normalized = value.trim();
  const key = normalized.toLowerCase().replace(/\s+/g, "-");

  return categoryLabels[normalized] || categoryLabels[key] || "Roofing";
};

const wordCount = (items: Array<string | undefined>) =>
  items
    .filter(Boolean)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

const calculatedReadTime = (article: Pick<Article, "intro" | "sections" | "closing">) => {
  const words = wordCount([
    ...(article.intro || []),
    ...(article.sections?.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.bullets || [])
    ]) || []),
    ...(article.closing || [])
  ]);

  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

const richTextNodeText = (node: StoryblokRichText | undefined): string => {
  if (!node) {
    return "";
  }

  if (node.type === "hard_break") {
    return "\n";
  }

  if (node.text) {
    return node.text;
  }

  return node.content?.map(richTextNodeText).join("").replace(/\s+/g, " ").trim() || "";
};

const richTextListItems = (node: StoryblokRichText) =>
  node.content
    ?.map((item) => richTextNodeText(item))
    .map((item) => item.trim())
    .filter(Boolean) || [];

const richTextToArticleContent = (richText: StoryblokRichText | undefined) => {
  const intro: string[] = [];
  const sections: ArticleSection[] = [];
  let currentSection: ArticleSection | null = null;

  const pushCurrentSection = () => {
    if (!currentSection) {
      return;
    }

    if (currentSection.title || currentSection.paragraphs.length || currentSection.bullets?.length) {
      sections.push({
        ...currentSection,
        bullets: currentSection.bullets?.length ? currentSection.bullets : undefined
      });
    }

    currentSection = null;
  };

  for (const node of richText?.content || []) {
    if (node.type === "heading") {
      const title = richTextNodeText(node);

      if (!title) {
        continue;
      }

      pushCurrentSection();
      currentSection = { title, paragraphs: [] };
      continue;
    }

    if (node.type === "paragraph") {
      const paragraph = richTextNodeText(node);

      if (!paragraph) {
        continue;
      }

      if (currentSection) {
        currentSection.paragraphs.push(paragraph);
      } else {
        intro.push(paragraph);
      }

      continue;
    }

    if (node.type === "bullet_list" || node.type === "ordered_list") {
      const bullets = richTextListItems(node);

      if (!bullets.length) {
        continue;
      }

      if (!currentSection) {
        currentSection = { title: "Key points", paragraphs: [] };
      }

      currentSection.bullets = [...(currentSection.bullets || []), ...bullets];
    }
  }

  pushCurrentSection();

  return { intro, sections };
};

const storyblokSectionsToArticleContent = (sections: StoryblokSection[] | undefined) => {
  const intro: string[] = [];
  const articleSections: ArticleSection[] = [];

  for (const section of sections || []) {
    if (section.content) {
      const richContent = richTextToArticleContent(section.content);
      intro.push(...richContent.intro);
      articleSections.push(...richContent.sections);
      continue;
    }

    const paragraphs = textArray(section.paragraphs) || [];
    const bullets = textArray(section.bullets);

    if (section.title || paragraphs.length || bullets?.length) {
      articleSections.push({
        title: section.title || "Details",
        paragraphs,
        bullets
      });
    }
  }

  return { intro, sections: articleSections };
};

const normalizeStoryblokArticle = (story: StoryblokStory): Article => {
  const content = story.content;
  const articleContent = storyblokSectionsToArticleContent(content.sections);
  const intro = [...(textArray(content.intro) || []), ...articleContent.intro];
  const closing = textArray(content.closing);
  const body = {
    intro: intro.length ? intro : undefined,
    sections: articleContent.sections.length ? articleContent.sections : undefined,
    closing
  };

  return {
    slug: articleSlug(story),
    title: storyTitle(story, content.title),
    category: categoryLabel(content.category),
    readTime: content.read_time || content.readTime || calculatedReadTime(body),
    sortOrder: numericSortOrder(content.sort_order ?? content.sortOrder ?? content.order),
    excerpt: content.excerpt || "",
    image: assetUrl(content.hero_image) || assetUrl(content.image),
    ...body
  };
};

const storyblokApiBase = () => {
  const region = envValue("STORYBLOK_REGION") || "eu";
  return region === "us" ? "https://api-us.storyblok.com/v2/cdn" : "https://api.storyblok.com/v2/cdn";
};

const fetchStoryblokArticles = async (): Promise<Article[] | null> => {
  const token = envValue("STORYBLOK_DELIVERY_API_TOKEN");

  if (!token || token === "storyblok-token-not-configured") {
    return null;
  }

  const url = new URL(`${storyblokApiBase()}/stories`);
  url.searchParams.set("token", token);
  url.searchParams.set("version", envValue("STORYBLOK_VERSION") || "published");
  url.searchParams.set("starts_with", envValue("STORYBLOK_ARTICLES_PATH") || "articles/");
  url.searchParams.set("per_page", "100");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Storyblok articles request failed with ${response.status}`);
  }

  const data = (await response.json()) as { stories?: StoryblokStory[] };
  const entries = data.stories?.map(normalizeStoryblokArticle).filter((article) => article.slug && article.title) || [];

  return sortArticles(entries);
};

export const getArticles = async () => {
  try {
    return (await fetchStoryblokArticles()) || articles;
  } catch (error) {
    console.warn("[cms] Falling back to local article JSON entries.", error);
    return articles;
  }
};

export const getArticleBySlug = async (slug: string) => {
  const entries = await getArticles();
  return entries.find((article) => article.slug === slug);
};
