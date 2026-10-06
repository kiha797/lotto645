CREATE TABLE `tickets` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`numbers` text NOT NULL,
	`round` integer NOT NULL,
	`created` text NOT NULL,
	`method` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tickets_user_round_numbers` ON `tickets` (`user_id`,`round`,`numbers`);--> statement-breakpoint
CREATE INDEX `tickets_user_created` ON `tickets` (`user_id`,`created`);