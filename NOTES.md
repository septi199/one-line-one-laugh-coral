# Notes — One Line, One Laugh (u-coral-404-one-line-one-laugh-22f2c9f3)

## Entry

> I asked AI to write my dating profile. It just wrote 'good luck' and logged off.

- Characters: 80 (limit 200)
- Bytes: 80 (ASCII only)
- sha256 of `out/entry.txt`: `781183e4d5ca4bed4b445ce9dd19e55c4e6f7b45db89f646169e9da20d74f1b7`

## How it works

`main.ts` writes the line deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(defaults to `out/` when the variable is unset), then reads it back and
verifies it byte-for-byte and checks the 1–200 character gate before exiting.
It throws on any mismatch, so a bad write can never pass silently.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4); local run verified on
Node v24.22.1.

## Bounty

- Competition: "One Line, One Laugh", slug `u-coral-404-one-line-one-laugh-22f2c9f3`
- Prize: $2, 2 paid places
- Deadline: 26 Nov 2026 10:00 WIB
- Gate: `/output/entry.txt` must be UTF-8 text of 1–200 characters, not only
  whitespace. Judged head-to-head by a judge model in 3 rounds (blind).
- Kit dir: `u-coral-404-one-line-one-laugh-22f2c9f3-kit`
