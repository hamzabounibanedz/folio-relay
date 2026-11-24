import Form from "./form";
import Link from "next/link";
import { workspaceAuthConfigured } from "@/lib/workspace-auth";

export const dynamic = "force-dynamic";
export default function WorkspaceEntry() {
  if (workspaceAuthConfigured) return <Form />;
  return <main className="mx-auto max-w-xl px-6 py-20"><Link className="text-lg font-semibold" href="/">Folio Relay</Link><h1 className="my-7 font-serif text-5xl">Workspace sign-in</h1><p>Private workspace sign-in is awaiting provider setup. You can read the public document now.</p><Link className="mt-6 inline-block rounded bg-[#934419] px-5 py-3 text-white" href="/view/folio-relay-example">Open public document</Link></main>;
}
