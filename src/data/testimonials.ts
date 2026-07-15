export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/**
 * PLACEHOLDER CONTENT — replace with real testimonials from colleagues,
 * clients, or code-review partners before promoting this section.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Milen writes backends the way you wish everyone did — clear contracts, defensive validation, and documentation that actually matches the code.',
    name: 'Your Colleague',
    role: 'Engineering Lead — add a real testimonial here',
  },
  {
    quote:
      'Working across time zones with Milen was seamless. Async updates were crisp, PRs were small and reviewable, and nothing ever blocked on ambiguity.',
    name: 'Your Teammate',
    role: 'Senior Developer — add a real testimonial here',
  },
  {
    quote:
      'The AI integration Milen built for us shipped fast and held up in production. Streaming, retries, cost controls — all handled before we asked.',
    name: 'Your Client',
    role: 'Product Owner — add a real testimonial here',
  },
];
