import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendContactNotification } from "./notify.server";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().max(30).optional().nullable(),
  details: z.string().trim().max(1000).optional().nullable(),
});

export const notifyContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    await sendContactNotification(data);
    return { ok: true };
  });
