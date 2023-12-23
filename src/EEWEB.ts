import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.178.0/http/file_server.ts";
import * as mod from "https://deno.land/std@0.202.0/path/mod.ts";

async function handler(request: Request): Promise<Response> {
  return await serveFile(request, "hello.txt");
}

serve(handler);
