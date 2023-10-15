import { serve } from 'https://deno.land/std@0.178.0/http/server.ts'
import { serveFile } from 'https://deno.land/std@0.178.0/http/file_server.ts'
import * as mod from "https://deno.land/std@0.202.0/path/mod.ts";

function handler(request: Request): Response {
  return serveFile(request, 'hello.txt')
}

serve(handler)