import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const RECIPIENT = "gmridul898@gmail.com";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(80, { message: "Name must be less than 80 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(160, { message: "Email is too long" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(120, { message: "Subject must be less than 120 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

type ContactValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
    mode: "onBlur",
  });

  const messageValue = watch("message") ?? "";

  // const onSubmit = (data: ContactValues) => {
  //   setSubmitting(true);
  //   try {
  //     const body =
  //       `Hi,\n\n${data.message}\n\n—\nFrom: ${data.name}\nReply-to: ${data.email}`;
  //     const href =
  //       `mailto:${RECIPIENT}` +
  //       `?subject=${encodeURIComponent(data.subject)}` +
  //       `&body=${encodeURIComponent(body)}`;

  //     window.location.href = href;

  //     toast.success("Opening your email app…", {
  //       description: "Send the pre-filled message to complete your request.",
  //     });
  //     reset();
  //   } catch {
  //     toast.error("Couldn't open your email app", {
  //       description: `Email me directly at ${RECIPIENT}.`,
  //     });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const onSubmit = async (data: ContactValues) => {
    setSubmitting(true);

    try {
      await emailjs.send(
        "service_myo563k",
        "template_hdzgxmn",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "DEGEzIdyJ1HEv0IHZ",
      );

      toast.success("Message sent successfully 🎉");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-xl bg-background/60 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative text-left max-w-xl mx-auto mt-12 grid gap-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="cf-name"
            className="block text-xs font-mono tracking-wider text-muted-foreground mb-2"
          >
            NAME
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={`${inputBase} ${errors.name ? "border-destructive/60" : "border-border"}`}
            placeholder="Jane Doe"
            {...register("name")}
          />
          {errors.name && (
            <p id="cf-name-err" className="mt-1.5 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="cf-email"
            className="block text-xs font-mono tracking-wider text-muted-foreground mb-2"
          >
            EMAIL
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={`${inputBase} ${errors.email ? "border-destructive/60" : "border-border"}`}
            placeholder="jane@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p id="cf-email-err" className="mt-1.5 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-subject"
          className="block text-xs font-mono tracking-wider text-muted-foreground mb-2"
        >
          SUBJECT
        </label>
        <input
          id="cf-subject"
          type="text"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "cf-subject-err" : undefined}
          className={`${inputBase} ${errors.subject ? "border-destructive/60" : "border-border"}`}
          placeholder="Project inquiry"
          {...register("subject")}
        />
        {errors.subject && (
          <p id="cf-subject-err" className="mt-1.5 text-xs text-destructive">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="cf-message"
            className="block text-xs font-mono tracking-wider text-muted-foreground"
          >
            MESSAGE
          </label>
          <span className="text-[10px] font-mono text-muted-foreground/70">
            {messageValue.length}/2000
          </span>
        </div>
        <textarea
          id="cf-message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`${inputBase} resize-none ${errors.message ? "border-destructive/60" : "border-border"}`}
          placeholder="Tell me about your project, timeline, and goals…"
          {...register("message")}
        />
        {errors.message && (
          <p id="cf-message-err" className="mt-1.5 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-[40%]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative">
            {submitting ? "Sending…" : "Send message"}
          </span>
          <span className="relative transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
        <span className="text-xs text-muted-foreground">
          Opens your email app pre-filled. Or write to{" "}
          <a
            href={`mailto:${RECIPIENT}`}
            className="text-primary hover:underline"
          >
            {RECIPIENT}
          </a>
          .
        </span>
      </div>
    </form>
  );
};
