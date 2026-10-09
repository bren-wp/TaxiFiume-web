import { describe, expect, it } from "vitest";
import { socialImageMeta } from "./social-preview";

describe("Public share photograph URLs", () => {
  it("omits image tags until a valid HTTPS public address exists", () => {
    expect(socialImageMeta("/")).toEqual([]);
    expect(socialImageMeta("/", "/")).toEqual([]);
    expect(socialImageMeta("/", "http://localhost:8080")).toEqual([]);
  });
  it("uses the same local share photograph for Open Graph and Twitter", () => {
    const tags = socialImageMeta("/kontakt", "https://taxifiume.com");
    const og = tags.find((tag) => "property" in tag && tag.property === "og:image");
    const twitter = tags.find((tag) => "name" in tag && tag.name === "twitter:image");
    expect(og?.content).toBe("https://taxifiume.com/media/social/kontakt.jpg");
    expect(twitter?.content).toBe(og?.content);
  });
  it("does not substitute unrelated photography on legal or text-only pages", () => {
    expect(socialImageMeta("/pravila-privatnosti", "https://taxifiume.com")).toEqual([]);
    expect(socialImageMeta("/coming-soon", "https://taxifiume.com")).toEqual([]);
  });
});