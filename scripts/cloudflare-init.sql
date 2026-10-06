-- Run once in the Cloudflare D1 console for lotto645-db.
-- Idempotent: preserves existing tickets.
CREATE TABLE IF NOT EXISTS tickets (
  id TEXT PRIMARY KEY NOT NULL,
  user_id TEXT NOT NULL,
  numbers TEXT NOT NULL,
  round INTEGER NOT NULL,
  created TEXT NOT NULL,
  method TEXT NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS tickets_user_round_numbers ON tickets (user_id, round, numbers);
CREATE INDEX IF NOT EXISTS tickets_user_created ON tickets (user_id, created);
