import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = ({ image }: { image: any }) => z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  image: image().optional(),
});

const newsSchema = ({ image }: { image: any }) => z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  image: image().optional(),
});

const impermeabilizacion = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/impermeabilizacion" }),
  schema: projectSchema,
});

const rehabilitacion = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rehabilitacion" }),
  schema: projectSchema,
});

const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: newsSchema,
});

export const collections = {
  impermeabilizacion,
  rehabilitacion,
  noticias,
};
