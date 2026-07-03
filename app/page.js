import { Fragment } from "react";

const description =
  "I’m Adam, a software engineer in Gothenburg with over ten years of experience building for the web, mostly with JavaScript and React.";

export const metadata = {
  metadataBase: new URL("https://adamlindqvist.se"),
  title: "Adam Lindqvist",
  description,
  openGraph: {
    title: "Adam Lindqvist",
    description,
    url: "https://adamlindqvist.se",
    siteName: "Adam Lindqvist",
    locale: "en_US",
    type: "website",
  },
};

const letterHoverColors = [
  "hover:text-sky-600 dark:hover:text-sky-400",
  "hover:text-teal-600 dark:hover:text-teal-400",
  "hover:text-amber-600 dark:hover:text-amber-400",
  "hover:text-rose-600 dark:hover:text-rose-400",
];

function BouncyName({ name }) {
  let index = 0;

  return name.split(" ").map((word, wordIndex) => (
    <Fragment key={word}>
      {wordIndex > 0 ? " " : null}
      <span className="inline-block whitespace-nowrap">
        {[...word].map((letter) => {
          const i = index++;

          return (
            <span
              key={i}
              className={`inline-block cursor-default transition-transform duration-200 ease-out hover:-translate-y-1.5 ${
                i % 2 ? "hover:-rotate-3" : "hover:rotate-3"
              } ${letterHoverColors[i % letterHoverColors.length]}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {letter}
            </span>
          );
        })}
      </span>
    </Fragment>
  ));
}

export default function Home() {
  return (
    <main className="w-full max-w-prose space-y-6 lg:space-y-10 text-lg lg:text-2xl">
      <header>
        <h1 className="text-4xl lg:text-6xl font-paytone-one">
          <BouncyName name="Adam Lindqvist" />
        </h1>

        <p className="text-xl lg:mt-1 text-stone-800 dark:text-stone-400 font-extrabold tracking-tight lg:text-3xl">
          Frontend Developer
        </p>
      </header>

      <p>
        I’m Adam, a software engineer in Gothenburg with over ten years of
        experience building for the web, mostly with JavaScript and React.
      </p>

      <p>
        Over the years I’ve built things for brands like Volvo Cars, Essity,
        Blomsterlandet, Willab Garden and AstraZeneca. Currently at{" "}
        <strong>Derome</strong>. More on{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/adam-lindqvist-16606287"
        >
          LinkedIn
        </a>
        .
      </p>

      <p>
        You can find me on{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/adamlindqvist"
        >
          GitHub
        </a>
        .
      </p>

      <p>Have a nice day! 😊</p>
    </main>
  );
}
