import { tenant } from "@teamhanko/passkeys-next-auth-provider";

const { HANKO_API_KEY, NEXT_PUBLIC_HANKO_TENANT_ID } = process.env;
const hanko = HANKO_API_KEY && NEXT_PUBLIC_HANKO_TENANT_ID
  ? tenant({ apiKey: HANKO_API_KEY, tenantId: NEXT_PUBLIC_HANKO_TENANT_ID })
  : null;
export default hanko;
