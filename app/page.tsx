import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1e9] text-[#292721]">
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-[#c9c0af] px-6 py-6">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold"><Image src="/_static/folio-relay.svg" alt="" width={34} height={34} />Folio Relay</Link>
        <Link href="/login" className="underline underline-offset-4">Sign in</Link>
      </header>
      <main className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-32">
        <div><h1 className="max-w-xl font-serif text-6xl leading-none tracking-tight md:text-8xl">Documents worth sharing.</h1>
          <p className="my-7 max-w-md text-lg leading-relaxed">Organize your documents, create viewing links, and manage access from one workspace.</p>
          <Link href="/documents" className="inline-block rounded bg-[#934419] px-6 py-3 font-medium text-white">Open workspace</Link>
        </div>
        <article className="border border-[#c9c0af] bg-[#fffdf8] p-8 shadow-sm"><p className="mb-8 border-b border-[#c9c0af] pb-4 text-sm">From the Papermark collection</p>
          <h2 className="font-serif text-4xl">Example document</h2><p className="my-4 text-[#615b4f]">Read the sample PDF included with the open-source release.</p>
          <a className="font-medium text-[#873c18] underline underline-offset-4" href="/view/folio-relay-example">Open document</a>
        </article>
      </main>
      <footer className="mx-auto max-w-6xl border-t border-[#c9c0af] px-6 py-5 text-sm">Built on Papermark · <a className="underline" href="https://github.com/hamzabounibanedz/folio-relay/tree/codex/papermark-community">Source code</a></footer>
    </div>
  );
}
