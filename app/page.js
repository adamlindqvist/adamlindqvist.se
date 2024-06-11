export const metadata = {
    title: "Adam Lindqvist",
    description:
        "I'm Adam, a software engineer with 10+ years of experience based in Gothenburg. I'm a frontend developer primarily focused on technologies like Javascript and React.",
};

export default function Home() {
    return (
        <div className="w-full max-w-prose space-y-6 lg:space-y-10 text-lg lg:text-2xl">
            <header>
                <h2 className="text-4xl lg:text-6xl font-paytone-one">
                    Adam Lindqvist
                </h2>

                <h3 className="text-xl lg:mt-1 text-stone-800 dark:text-stone-400 font-extrabold tracking-tight lg:text-3xl">
                    Frontend Developer
                </h3>
            </header>

            <p>
                I'm Adam, a software engineer with 10+ years of experience based
                in Gothenburg. I'm a frontend developer primarily focused on
                technologies like Javascript and React.
            </p>

            <p>
                I’ve been working with awesome brands like Volvo Cars, Essity,
                Blomsterlandet, Willab Garden and AstraZeneca -&gt; More on{" "}
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
                    Github
                </a>{" "}
                or send me an{" "}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="mailto:adamlindqvist@outlook.com"
                >
                    email
                </a>
                .
            </p>

            <p>Have a nice day! 😊</p>
        </div>
    );
}
