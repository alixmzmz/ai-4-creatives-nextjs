import { z } from "zod";

export const NewsletterSchema = z.object({
    email: z.string().email()
});

export type TNewsletterSchema = z.infer<typeof NewsletterSchema>;