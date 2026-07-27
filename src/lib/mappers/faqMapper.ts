export function mapFAQs(source: any) {
  const faqs = source?.university_faqs ?? [];

  return {
    faqs: faqs
      .sort(
        (a: { priority: number }, b: { priority: number }) =>
          a.priority - b.priority
      )
      .map(
        (category: {
          category: string;
          priority: number;
          items: {
            question: string;
            answer: string;
          }[];
        }) => ({
          category: category.category,
          priority: category.priority,
          items: category.items.map((item) => ({
            question: item.question,
            answer: item.answer.replace(/<[^>]*>/g, "").trim(),
          })),
        })
      ),
  };
}