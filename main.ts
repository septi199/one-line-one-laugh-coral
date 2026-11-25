// One Line, One Laugh (coral) — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// Turn 2: the line is built from its two sentences and the pipeline is
// factored into resolve/emit/confirm helpers, replacing turn 1's flat flow.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCES = [
  "I asked AI to write my dating profile.",
  "It just wrote 'good luck' and logged off.",
];

function buildLine(): string {
  return SENTENCES.join(" ");
}

function resolveOutputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  return join(dir, "entry.txt");
}

function emit(path: string, line: string): void {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, line, "utf8");
}

function confirm(path: string, line: string): number {
  const back = readFileSync(path, "utf8");
  if (back !== line) {
    throw new Error("verification failed: read-back differs from the entry");
  }
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry length out of bounds: ${chars} characters`);
  }
  return chars;
}

function run(): void {
  const line = buildLine();
  const path = resolveOutputPath();
  emit(path, line);
  const chars = confirm(path, line);
  console.log(`wrote ${path} (${chars} chars)`);
}

run();
