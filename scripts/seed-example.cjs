const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
async function seed() {
  await db.$transaction(async (tx) => {
    const owner = await tx.user.upsert({where: {id: "folio-relay-publisher"}, create: {id: "folio-relay-publisher", name: "Folio Relay"}, update: {}});
    const team = await tx.team.upsert({where: {id: "folio-relay-publications"}, create: {id: "folio-relay-publications", name: "Folio Relay"}, update: {}});
    const file = "/_example/papermark-example-document.pdf";
    const document = await tx.document.upsert({where: {id: "folio-relay-example-pdf"}, create: {id: "folio-relay-example-pdf", name: "Papermark example document", file, type: "pdf", ownerId: owner.id, teamId: team.id}, update: {}});
    await tx.documentVersion.upsert({where: {versionNumber_documentId: {versionNumber: 1, documentId: document.id}}, create: {versionNumber: 1, documentId: document.id, file, type: "pdf", isPrimary: true}, update: {}});
    await tx.link.upsert({where: {id: "folio-relay-example"}, create: {id: "folio-relay-example", documentId: document.id, name: "Public example", emailProtected: false, enableNotification: false, enableFeedback: false, allowList: [], denyList: []}, update: {}});
  });
}
seed().catch((error) => { console.error(error.message); process.exitCode = 1; }).finally(() => db.$disconnect());
