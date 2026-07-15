import { useEffect, useState } from 'react';

type TypeWriterProps = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  className?: string;
};

/** Types, holds, deletes, and rotates through a list of words. */
export function TypeWriter({
  words,
  typeSpeed = 65,
  deleteSpeed = 35,
  holdMs = 1800,
  className,
}: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={className}>
      {text}
      <span className="animate-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent" />
    </span>
  );
}
