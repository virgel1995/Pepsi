module.exports = {
	REQ_BY: "Requested by {author}",
	INVALID_USAGE: "Invalid command usage!",
	INVALID_STATUS: "Invalid status. Value must be `on/off`",
	INVALID_URL: "Please provide a valid url",
	INVALID_SUB: "invalid subCommand",
	INVALID_CONTENT: "Insufficient arguments! Please provide valid content",
	INVALID_COLOR: "Invalid color. Value must be a valid hex color",
	INVALID_SUBCOMMAND: "Invalid subcommand",
	MAX_LINES_ERR: "Must be a valid number greater than 0",
	NOT_NUMBER: "Please enter a valid number input",
	NO_PERMISSIONS: "Sorry but i don't have permission to fire this Action",
	NO_CHANNEL: "No channel found matching {channel}",
	NO_USER: `No user found matching {args}`,
	ENABLED: "enabled",
	DISABLED: "disabled",
	UPDATED: "updated",
	REMOVED: "removed",
	CHANGED: "CHANGED",
	CHANGE: "CHANGE",
	RESET: "RESET",
	NOT_FOUND: "Not found",

	COMMANDS: {

		ADMIN: {
			AUTO_MOD: {
				ANTI_COMMAND: {
					GHOSTPING_DONE: "Configuration saved! Anti-Ghostping is now",
					ANITESPAM_DONE: "Antispam detection is now",
					MASSMENTION_DONE: "Mass mention detection is now"
				},
				AUTO_DELETE: {
					MESSAGE: "MESSAGES",
					ATTACH_DONE: "with attachments will now be automatically deleted",
					ATTACH_DONE2: "will not be filtered for attachments now",
					INVITES_DONE: "with discord invites will now be automatically deleted",
					INVITES_DONE2: "will not be filtered for discord invites now",
					LINKS_DONE: "with links will now be automatically deleted",
					LINKS_DONE2: "will not be filtered for links now",
					MAX_LINES_DONE: "Maximum line limit is disabled",
					MAX_LINES_DONE2: "Messages longer than \`{input}\` lines will now be automatically deleted"
				},
				AUTO_MOD: {
					INVALID_ACTION: "Not a valid action. Action can be `Timeout`/`Kick`/`Ban`",
					NO_CONFIG: "Not Configured",
					DESC1: "**Max Lines**",
					DESC2: "**Anti-Massmention**",
					DESC3: "**Anti-Attachment**",
					DESC4: "**Anti-Links**",
					DESC5: "**Anti-Invites**",
					DESC6: "**Anti-Spam**",
					DESC7: "**Anti-Ghostping**",
					EMBED_AUTHOR: "Automod Configuration",
					EMBED_F1: "Log Channel",
					EMBED_F2: "Max Strikes",
					EMBED_F3: "Action",
					EMBED_F4: "Debug",
					STRIKE_DONE: `Configuration saved! Maximum strikes set to {strikes}`,
					ACTION_DONE: `Configuration saved! Automod action is set to {action}`,
					DEBUG_DONE: `Configuration saved! Automod debug is now `,
					NO_WHITELISTED: "No channels are whitelisted",
					WHITELISTED_CH: "Whitelisted channels:",
					ALR_WHITELIATED: "Channel is already whitelisted",
					WHITELISTED: `Channel whitelisted!`,
					NOT_WHITELISTED: "Channel is not whitelisted",
					REMOVED_WHITELISTED: `Channel removed from whitelist!`,
				},
			},
			GREETINGS: {
				FARWELL: {
					NOT_ENABLED: "Farewell message not enabled in this server",
					NO_CONFIG: "No channel is configured to send farewell message",
					PREV_CHANNEL: "Sent farewell preview to",
					NO_PERMS:
					"Ugh! I cannot send greeting to that channel? I need the `Write Messages` and `Embed Links` permissions in ",
					SETTINGS_DONE: "Configuration saved! Farewell message updated",

				},
				WELCOME: {
					NOT_ENABLED: "welcome message not enabled in this server",
					NO_CONFIG: "No channel is configured to send welcome message",
					PREV_CHANNEL: "Sent welcome preview to",
					NO_PERMS:
					"Ugh! I cannot send greeting to that channel? I need the `Write Messages` and `Embed Links` permissions in ",
					SETTINGS_DONE: "Configuration saved! Welcome message updated",
				}
			},
			REACTION_ROLL: {
				ADD: {
					NO_CH: "No channels found matching",
					NO_ROLE: "No roles found matching",
					NEED_PERMS: "You need the following permissions in",
					ERR_ID: "Could not fetch message. Did you provide a valid messageId?",
					BOT_ROLES: "I cannot assign bot roles.",
					EVERY_ROLE: "You cannot assign the everyone role.",
					ROLE_POSTION: "Oops! I cannot add/remove members to that role. Is that role higher than mine?",
					EMOJI_OUTSERVER: "This emoji does not belong to this server",
					FAIL_REACT: "Oops! Failed to react. Is this a valid emoji",
					ROLE_CONFIGED: "A role is already configured for this emoji. Overwriting data,\n",
					DONE: "Done! Configuration saved"
				},
				REMOVE: {
					ERR: "Oops! An unexpected error occurred. Try again later",
					NEED_PERMS: "You need the following permissions in",
					ERR_ID: "Could not fetch message. Did you provide a valid messageId?",
					DONE: "Done! Configuration saved"
				}
			},
			AUTO_ROLE: {
				NOT_MATCH: "No matching roles found matching your query",
				NO_ID: "Please provide a role or role id",
				ERR: "Oops! This role is managed by an integration",
				NO_PERMS: "I don't have the `ManageRoles` permission",
				NO_PERMS2: "I don't have the permissions to assign this role",
			},

			COUNTER: {
				ERR: "Incorrect arguments are passed! Counter types: `users/members/bots`",
				ERR2: "Incorrect Usage! You did not provide name",
				DONE: "Configuration saved! Counter channel created"
			},
			FALG_TRANS: "Configuration saved! Flag translation is now",
			MAX_WARN: {
				ERR: "Max Warnings must be a valid number greater than 0",
				ERR2: "Not a valid action. Action can be `Timeout`/`Kick`/`Ban`",
				ERR3: "I do not permission to Config this Action",
				DONE: "Configuration saved! Action is set To"
			},
			MOD_LOG: {
				ERR: "Ugh! I cannot send logs to that channel? I need the `Write Messages` and `Embed Links` permissions in that channel",

			},
			SET_PREFIX: {
				ERR: "Prefix length cannot exceed `2` characters",
				DONE: "New prefix is set to"
			}
		},
		ANIME: {
			REACT: {
				ERR: "Failed to fetch meme. Try again!",
				ERR2: "Invalid choice: ",
				ERR3: "Available reactions:"
			},
		},

		ECONOMY: {
			SUB: {
				BALANCE: {
					WALLET: "wallet",
					BANK: "bank",
					NET: "net worth"
				},
				DEP: {
					ERR: "Please enter a valid amount of coins to deposit",
					ERR2: "You only have",
					ERR3: "coins in your wallet",
					NEW: "New Balance",
					WALLET: "wallet",
					BANK: "bank",
					NET: "net worth"
				},
				TRANSFER: {
					ERR: "Please enter a valid amount of coins to transfer",
					ERR2: "You cannot transfer coins to bots!",
					ERR3: "You cannot transfer coins to self!",
					ERR4: "Insufficient bank balance! You only have",
					ERR5: "in your bank account.",
					ERR6: "\nYou must deposit your coins in bank before you can transfer",
					UPDATED: "Updated Balance",
					DONE: "You have successfully transferred ",
					TO: "To"
				},
				WITHDRAW: {
					ERR: "Please enter a valid amount of coins to deposit",
					ERR2: "You only have ",
					ERR3: "coins in your bank",
					NEW: "New Balance",
					WALLET: "wallet",
					BANK: "bank",
					NET: "net worth"
				}
			},
			BANK: {
				ERR: "Provide a valid number of coins you wish to deposit",
				ERR2: "Provide a valid number of coins you wish to withdraw",
				ERR3: "Provide a valid user and coins to transfer",
				ERR4: "Provide a valid user to transfer coins to",
				ERR5: "Provide a valid number of coins you wish to transfer"
			},
			BEG: {
				DONE: "donated you",
				DONE2: "Updated Balance"
			},
			DAILY: {
				ERR: "You can again run this command in ",
				DONE: "your daily reward Is",
				DONE2: "Updated Balance",
			},
			GAMBLE: {
				ERR: "Bet amount needs to be a valid number input",
				ERR2: "Bet amount needs to be a valid number input",
				ERR3: "Bet amount cannot be negative",
				ERR4: "Bet amount cannot be less than 10",
				ERR5: "You do not have sufficient coins to gamble!\n**Coin balance:**",
				AMM: "Gamble Amount",
				MULT: "Multiplier",
				WON: "you won",
				LOSE: "you lost",
				DONE: "Updated Wallet balance"
			},
		},
		FUN: {
			ANIMAL: {
				ERR: "Invalid animal selected. Available animals"
			},
			FLIP: {
				ERR: "Please enter a text",
				FIRST: "started a coin toss",
				SND: "The coin is in the air",
				WINS: "Wins"
			},
			MEME: {
				ERR: "Failed to fetch meme. Try again!",
				ERR2: "No meme found matching",
			},
			SNAKE: {
				START: "**Starting Snake Game**",
				TITLE: "Snake Game",
				OVER: "Game Over",
			},
			TOGETHER: {
				EER: "You must be in a voice channel to use this command.",
				ERR2: "Invalid game.\nValid games"
			}
		},
		GIVEAWAYS: {
			SUB: {
				EDIT: {
					ERR: "You must provide a valid message id.",
					PERMS: "You need to have the manage messages permissions to edit giveaways.",
					ERR2: "Unable to find a giveaway for messageId",
					ERR3: "An error occurred while updating the giveaway",
					DONE: "Successfully updated the giveaway!",

				},
				END: {
					ERR: "You must provide a valid message id.",
					PERMS: "You need to have the manage messages permissions to end giveaways.",
					ERR2: "Unable to find a giveaway for messageId",
					ERR3: "The giveaway has already ended.",
					DONE: "Successfully giveaway hass been Ended",
					ERR4: "An error occurred while ending the giveaway",
				},
				LIST: {
					PERMS: "You need to have the manage messages permissions to manage giveaways.",
					NO_GIVE: "There are no giveaways running in this server.",
					IN: "in",
					ERR: "An error occurred while listing the giveaway",
				},
				PAUSE: {
					ERR: "You must provide a valid message id.",
					PERMS: "You need to have the manage messages permissions to pause giveaways.",
					ERR2: "Unable to find a giveaway for messageId",
					ERR3: "This giveaway is already paused.",
					DONE: "Success! Giveaway paused!",
					ERR4: "An error occurred while ending the giveaway",

				},
				REROLL: {
					ERR: "You must provide a valid message id.",
					PERMS: "You need to have the manage messages permissions to reroll giveaways.",
					ERR2: "Unable to find a giveaway for messageId",
					ERR3: "The giveaway is not ended yet.",
					DONE: "Giveaway rerolled!",
					ERR4: "An error occurred while ending the giveaway",
				},
				RESUME: {
					ERR: "You must provide a valid message id.",
					PERMS: "You need to have the manage messages permissions to resume giveaways.",
					ERR2: "Unable to find a giveaway for messageId",
					ERR3: "This giveaway is not paused.",
					DONE: "Success! Giveaway unpaused!",
					ERR4: "An error occurred while ending the giveaway",
				},
				START: {
					PERMS: "You need to have the manage messages permissions to start giveaways.",
					ERR: "You can only start giveaways in text channels.",
					F1: "🎉 **GIVEAWAY** 🎉",
					F2: "🎉 **GIVEAWAY ENDED** 🎉",
					F3: "React with 🎁 to enter",
					F4: "Be the first to react with 🎁 to win!",
					F5: "hosted by",
					DONE: "Giveaway started in",
					ERR2: "An error occurred while starting the giveaway"

				},
			},
			GIVEAWAY: {
				ERR: "Incorrect usage! Please provide a channel to start the giveaway in",
				NO_CH: "No channel found matching ",
				ERR2: "Incorrect usage! Please provide a message id",
				INV_DUR: "Not a valid duration",
				CANCELLED: "Giveaway setup has been cancelled. You did not mention a channel",
				NEED_PERMS: "Giveaway setup has been cancelled.\nI need",
				CTX: "Please click the button below to setup new giveaway",
				NO_RES: "No response received, cancelling setup",
				TITLE: "Giveaway Setup",
				LABEL: "What is the duration?",
				PRIZE: "What is the prize?",
				WINNERS: "Number of winners?",
				ROLE: "RoleId's that can take part in the giveaway",
				HOST: "User Id hosting the giveaway",
				ONGOING: "Setting up giveaway...",
				VALID_DUR: "Setup has been cancelled. You did not specify a valid duration",
				VALID_WIN: "Setup has been cancelled. You did not specify a valid winner count",
				VALID_HOST: "Setup has been cancelled. You need to provide a valid userId for host",
				GIVE_EDIT: "Edit Giveaway",
				EDIT_CTX: "Please click the button below to edit the giveaway",
				EDIT_NO_RES: "No response received, cancelling update",
				EDIT_TITLE: "Giveaway Update",
				EDIT_C_CTX: "No response received, cancelling update",
				EDIT_ONGOING: "EDIT ONGOING Wait.....",
				EDIT_VALID_DUR: "Update has been cancelled. You did not specify a valid add duration",
				EDIT_VALID_WINS: "Update has been cancelled. You did not specify a valid winner count",
			}

		},
		IMAGE: {
			FILTERS: {
				ERR: "FAILED To genrate Image"
			},
		},
		INFORMATION: {
			MESSAGE: {
				BOTINVITE: {
					DM: "Check your DM for my information! :envelope_with_arrow:",
					ERR: "I cannot send you my information! Is your DM open?",
				},
				CHANNELINFO: {
					NO_SEARCH: "No channels found matching ",
					MULTI: "Multiple channels found matching",
				},
				UPTIME: {
					RES: "My Uptime"
				},
			},
			SHARED: {
				AVATAR: {
					TITLE: "Avatar of",
					LINKS: "Links",
				},
				BOTINVITE: {
					DESC: "Hey there! Thanks for considering to invite me\nUse the button below to navigate where you want",
					INVITE: "Invite Link",
					SUPPORT: "Support Server",
					WEB: "Dashboard Link",
				},
				BOTSTATS: {
					GUILDS: "Total guilds",
					CHANNELS: "Total channels",
					USERS: "Total users",
					WEBSOC: "Websocket Ping",
					TITLE: "Bot Information",
					F1: "CPU",
					F2: "Bot's RAM",
					F3: "Overall RAM",
					F4: "Node Js version",
					F5: "Uptime",
					LINK: "Invite Link",
					SUPPORT: "Support Server",
					WEB: "Dashboard Link",
				},
				CHANNELINFO: {
					ID: "id",
					NAME: 'name',
					TYPE: 'Type',
					CAT: 'Category',
					TOPIC: 'Topic',
					POSITION: 'Position',
					SLOWMODE: 'SLOWMODE',
					ISNSFW: 'ISNSFW',
					OWNERID: 'OwnerId',
					ARCHIVED: 'IS Archived',
					LOCKED: 'IS Locked',
					BITRATE: 'BIT RATE',
					USERLIMIT: 'User Limit',
					FULL: 'IS FULL',
					AUTHOR: 'CHANNEL DETAILS'
				},
				EMOJIINFO: {
					TITLE: 'Emoji Info',
					ID: 'ID',
					NAME: 'NAME',
					ANIM: 'ANIMATED',
					ERR: "This is not a valid guild emoji"
				},
				GUILDINFO: {
					ID: 'ID',
					NAME: 'Name',
					OWNER: 'Owner',
					REGION: 'REGION',
					TITLE: 'Guild Information ',
					ALL: 'Server Members',
					MEMB: 'MEMBERS',
					BOTS: 'BOTS',
					ONLINE: 'ONLINE STATS',
					CATS: "Categories and channels",
					CAT: "Categories",
					TEXT: 'TEXT',
					VOICE: 'VOICE',
					THREAD: 'THREAD',
					ROLES: 'ROLES',
					F1: "Verification",
					F2: "Boost Count",
					F3: "Server Created"
				},
				USERINFO: {
					AUTHOR: "User information for",
					F1: "User Tag",
					F2: 'ID',
					F3: "Guild Joined",
					F4: "Discord Registered",
					F5: "Roles",
					F6: "Avatar-URL",
				},
			},
			SLASH: {
				BOT: {
					DM: "Check your DM for my information! :envelope_with_arrow:",
					ERR: "I cannot send you my information! Is your DM open?",
					UP: 'MY UPTIME',
					DESC: "Hey there! Thanks for considering to invite me\nUse the button below to navigate where you want",
					LINK: "Invite Link",
					SUPPORT: "Support Server",
					WEB: "Dashboard Link",
				},
			},
			PING_COMMAND: {
				REPLY: `🏓 Pong: \`{ping}ms\``
			},
			LEADERBOARD: {
				RES_ERR: "Invalid Leaderboard type. Choose either `xp` or `invite`",
				DISABELD: "This Features is disabled on this server",
				NO_USERS: "No users in the leaderboard",
				XP_AUTHOR: "XP Leaderboard",
				INV_AUTHOR: "Invite Leaderboard",
			},
		},
		INVITES: {
			ADD: {
				NOMENTION: "Incorrect syntax. You must mention a target",
				NUMBER: "Invite amount must be a number",
				ERR: "Oops! You cannot add invites to bots",
				AUTHOR: "Added invites to",
				DESC: "now has",
				DESC2: "invites",
			},
			CODES: {
				ERR: "has no invites in this server",
				USES: "USES",
				AUTHOR: "Invite code for",

			},
			INVITER: {
				ERR: 'Invite tracking is disabled in this server',
				ERR2: "Cannot track how",
				ERR3: "joined",
				AUTHOR: "Invite data for",
				F1: "Inviter",
				F2: "Inviter ID",
				F3: " Invite Code",
				F4: "Inviter Invites",
			},
			RANK: {
				ERR: "is not a valid number of invites?",
				ERR2: "No roles found matching",
				ERR3: 'Invite tracking is disabled in this server',
				ERR4: "You cannot assign a bot role",
				ERR5: "I cannot assign the everyone role.",
				ERR6: "I am missing permissions to move members to that role. Is that role below my highest role?",
				ERR7: "Previous configuration found for this role. Overwriting data\n",
				ERR8: "No previous invite rank is configured found for this role",
				SUCCESS: "Success! Configuration saved.",
			},
			RANKS: {
				ERR: "No invite ranks configured in this server",
				INV: "invites",
				AUTHOR: "Invite Ranks",
			},
			INVITES: {
				ERR: 'Invite tracking is disabled in this server',
				AUTHOR: "Invites for",
				INV: " inviteS",
				F1: "Total Invites",
				F2: "Fake Invites",
				F3: "Left Invites",
			},
			IMPORT: {
				ERR: "Oops! You cannot import invites for bots",
				DONE: "Done! Previous invites added to"
			},
			TRACKER: {
				ERR: "Oops! I am missing `Manage Server`, `Manage Channels` permission!\nI cannot track invites",
				ERR2: "I may not be able to track invites properly\nI am missing \`Manage Channel\` permission in the following channels ",
				DONE: "Configuration saved! Invite tracking is now "
			},
			REST: {
				ERR: "Incorrect syntax. You must mention a target",
				DONE: "Done! Invites cleared for",
			},
		},
		MODERATION: {
			MESSAGE: {
				DEFINE: {
					ERR: "No user found matching",
				},
				MOVE: {
					ERR: "No user found matching",
					ERR2: "No matching channels found",
					ERR3: "Target channel is not a voice channel",
				},
				PURGE: {
					ERR: "Numbers are only allowed",
					ERR2: "The max amount of messages that I can delete is 99",
					DONE: "Successfully deleted",
					ERR3: "I don't have `Read Message History` & `Manage Messages` to delete messages",
					ERR4: "You don't have `Read Message History` & `Manage Messages` to delete messages",
					ERR5: "No messages found that can be cleaned",
					ERR6: 'Error occurred! Failed to delete messages',
					ERR7: "No users found matching",
				},
				UNDEFINE: {
					ERR: "No users found matching",
				},
			},
			SHARED: {
				DEFINE: {
					ERR: "is deafened in this server",
					PERMS: "You do not have permission to deafen",
					PERMS2: "I do not have permission to deafen",
					ERR2: "is already deafened",
					ERR3: "Failed to deafen",
					ERR4: "is not in any voice channel",
				},
				DISCONNECT: {
					ERR: "is NOT IN A VOICE CHANNEL",
					PERMS: "You do not have permission to disconnect",
					PERMS2: "I do not have permission to disconnect",
					ERR2: "is not in any voice channel",
					ERR3: "Failed to disconnect",
				},
				MOVE: {
					ERR: "is deafened in this server",
					PERMS: "You do not have permission to move",
					PERMS2: "I do not have permission to move",
					ERR2: "is not in any voice channel",
					ERR3: "Failed to move",
					ERR4: "doesn't have permission to join",
					ERR5: "is already connected to",
				},
				UNDEFINE: {
					ERR: "is deafened in this server",
					PERMS: "You do not have permission to deafen",
					PERMS2: "I do not have permission to deafen",
					ERR2: "is not in any voice channel",
					ERR3: "Failed to deafen",
					ERR4: "is not deafened",
				},
				VMUTE: {
					ERR: "is voice is muted in this server",
					PERMS: "You do not have permission to mute",
					PERMS2: "I do not have permission to mute",
					ERR2: "is not in any voice channel",
					ERR3: "Failed to mute",
					ERR4: "is already muted",
				},
				VUNMUTE: {

					ERR: "is voice is unmuted in this server",
					PERMS: "You do not have permission to unmute",
					PERMS2: "I do not have permission to unmute",
					ERR2: "is not in any voice channel",
					ERR3: "Failed to unmute",
					ERR4: "is not muted",
				},
			},
			SLASH: {
				PURGE: {
					ERR: "Oops! Not a valid command selection",
					DONE: "Successfully cleaned",
					DONE2: "messages in",
					PERMS: "You do not have permissions to Read Message History & Manage Messages in",
					PERMS2: "I do not have permissions to Read Message History & Manage Messages in",
					NO_MESSAGES: "Found no messages that can be cleaned",
					FAIL: "Failed to clean messages",
				},
			},
			BAN: {
				ERR: "is banned!",
				PERMS: "I do not have permission to ban",
				PERMS2: "you do not have permission to ban",
				FAIL: "Failed to ban",
			},
			KICK: {
				ERR: "is kicked!",
				PERMS: "I do not have permission to kick",
				PERMS2: "you do not have permission to kick",
				FAIL: "Failed to kick",
			},
			NICK: {
				ERR: "Please specify a nickname",
				ERR2: "Oops! You cannot manage nickname of",
				ERR3: "Oops! I cannot manage nickname of",
				SUCCESS: "Successfully",
				SUCCESS2: "nickname of",
				FAIL: "Failed to",
				FAIL2: "nickname for",
				FAIL3: "Did you provide a valid name?",
			},
			SOFT_BAN: {
				ERR: "is soft banned!",
				PERMS: "I do not have permission to soft ban",
				PERMS2: "you do not have permission to soft ban",
				FAIL: "Failed to soft ban",
			},
			TIMEOUT: {
				ERR: "Please provide a valid duration. Example: 1d/1h/1m/1s",
				ERR: "is timed out!",
				PERMS: "I do not have permission to timeout",
				PERMS2: "you do not have permission to timeout",
				FAIL: "is already timed out!",
				FAIL2: "Failed to timeout",
			},
			UNBAN: {
				NO_USER: "No user found matching",
				PLACEHOLDER: "Choose a user to unban",
				CTX: "Please select a user you wish to unban",
				ERR: "is un-banned!",
				FAIL: "Failed to unban",
				FINISHED: "Oops! Timed out. Try again later.",
			},
			UNTIMEOUT: {
				GO: "Timeout of",
				GO2: "is removed!",
				PERMS: "I do not have permission to remove timeout of",
				PERMS2: "you do not have permission to remove timeout of",
				ERR: "is not timed out!",
				FAIL: "Failed to remove timeout of"
			},
			WARN: {
				PERMS: "I do not have permission to warn",
				PERMS2: "you do not have permission to warn",
				ERR: "is warned!",
				FAIL: "Failed to warn"
			},
			WARNINGS: {
				NO_USER: "No user provided",
				BOTS_X: "Bots don't have warnings",
				HAS: "has no warnings",
				WARNINGS: "warnings",
				SUCCESS: "warnings have been cleared",
			},
		},
		SOCIAL: {
			REP: {
				NO_USER: "Please provide a valid user to give reputation to",
				No_REP: "has no reputation yet",
				AUTHOR: "Reputation for",
				F1: "Given",
				F2: "Received",
				BOTS_X: "You cannot give reputation to bots",
				YOU_X: "You cannot give reputation to yourself",
				TIMEOUT: "You can again run this command in",
			},
		},

		STATS: {
			RANK: {
				DISABLED: "Stats Tracking is disabled on this server",
				NOT_RANKED: "is not ranked yet",
				FAIL: "Failed to generate rank-card",
			},
			STATS: {
				DISABLED: "Stats Tracking is disabled on this server",
				F1: "User Tag",
				F2: "ID",
				F3: "⌚ Member since",
				F4: "💬 Messages sent",
				F5: "🎙️ Voice Stats",
				FOOTER: "Stats Generated",
				DESC: "Messages Sent",
				DESC1: "Prefix Commands",
				DESC2: "Slash Commands",
				DESC3: "XP Earned",
				DESC4: "Current Level",
				DESC5: "Total Connections",
				DESC6: "Time Spent",
			},
			STATS_TRACKING: {
				DONE: "Configuration saved! Stats Tracking is now ",
			},
			XP: {
				ERR: "Invalid channel. Please provide a valid channel",
				ERR1: "Invalid message. Please provide a message",
				MESSAGE_DONE: "Configuration saved. Level up message updated!",
				CH_DONE: "Configuration saved. Level up channel updated!",
			},
		},
		SUGGESTIONS: {
			SUGGEST: {
				DONE: "Your suggestion has been submitted!",
				DISABLED: "Suggestion system is disabled.",
				CH_NOT_CONFIG: "Suggestion channel not configured!",
				CH_NOT_FOUND: "Suggestion channel not found!",
				TITLE: "New Suggestion",
				DESC: "Submitter",
				FAIL: "Failed to send message to suggestions channel!",
				BTN: "Approve",
				BTN1: "Reject",
				BTN2: "Delete",
			},
			SUGGESTION: {
				ERR: "No matching channels found for",
				ERR1: "Multiple channels found for",
				ERR2: "Please be more specific.",
				STATS_DONE: "Suggestion system is now ",
				DISABLED: "SUGGESTIONS is disabled for this server",
				PERMS: "I need the following permissions in ",
				WL_SENT: "Suggestions will now be sent to",
				CH_APPROVED: "Suggestion approved channel is now disabled",
				WL_APP_SENT: "Approved suggestions will now be sent to ",
				CH_REJECT: "Suggestion rejected channel is now disabled",
				WL_REJ_SENT: "Rejected suggestions will now be sent to",
				ROLE: " is already a staff role",
				ROLE1: "is now a staff role",
				ROLE2: "is not a staff role",
				ROLE3: "is no longer a staff role",
			},
		},
		TICKET: {
			TICKET: {
				PERMS: "I am missing `Manage Channels` to create ticket channels",
				NO_CH: "I could not find channel with that name",
				ERR: "Please provide a channel where ticket logs must be sent",
				CLOSING: "Closing tickets ...",
				ERR1: "Please provide a user or role to add to the ticket",
				ERR2: "Please provide a user or role to remove",
				BTN: "Setup Message",
				CTX: "Please click the button below to setup ticket message",
				CTX1: "No response received, cancelling setup",
				TITLE: "Ticket Setup",
				BTN1: "Embed Title",
				BTN2: "Embed Description",
				BTN3: "Embed Footer",
				BTN4: "Staff Roles",
				BTN5: "Open a ticket",
				CANCEL: "No response received, cancelling setup",
				ONGOING: "Setting up ticket message ...",
				AUTHOR: "Support Ticket",
				DESC: "Please use the button below to create a ticket",
				FOOTER: "You can only have 1 open ticket at a time!",
				SUCCESS: "Done! Ticket Message Created",
				LOG_PERMS: "Oops! I do have have permission to send embed to",
				LOG_DONE: "Configuration saved! Ticket logs will be sent to",
				LIMIT: "Configuration saved. You can now have a maximum of",
				LIMIT1: " open tickets",
				CLOSE_ERR: "This command can only be used in ticket channels",
				CLOSE_REASON: "Closed by a moderator",
				CLOSE_PERMS: "I do not have permission to close tickets",
				CLOSE_ERR1: "An error occurred while closing the ticket",
				CLOSE_ALL: "Completed! Success",
				CLOSE_ALL1: "Failed",
				ADD_ERR: "Oops! You need to input a valid userId/roleId",
				ADD_DONE: "Done",
				ADD_FAIL: "Failed to add user/role. Did you provide a valid ID?",
				REMOVE_FAIL: "Failed to remove user/role. Did you provide a valid ID?",
			},
			TICKET_CAT: {
				NO_CAT: "No ticket categories found.",
				F1: "Staff",
				F2: "None",
				AUTHOUR: "Ticket Categories",
				ERR: "Invalid usage! Missing category name.",
				CAT: "Category",
				ALREADY: "already exists.",
				ADDED: "added.",
				NOT_EX: "does not exist.",
				REMOVED: "Removed ",
			},
		},
		UTILS: {
			BIGEMOJIE: {
				AUTHOR: "❯ Big Emoji ❮",
				ERR: "Not a valid emoji",
			},
			COVID: {
				ERR: " Country with the provided name is not found",
				TITLE: "Covid",
				F1: "Cases Total",
				F2: "Cases Today",
				F3: "Deaths Total",
				F4: "Deaths Today",
				F5: "Recovered",
				F6: "Active",
				F7: "Critical",
				F8: "Cases per 1 million",
				F9: "Deaths per 1 million",
				FOOTER: "Last updated on",
			},
			GITHUB: {
				NO_USER: "```No user found with that name```",
				CLICK: "Click me",
				NOT_PROV: "Not Provided",
				AUTHOR: "GitHub User",
				F1: "User Info",
				F2: "Social Stats",
				F1_NAME: "Real Name",
				F1_LOCATION: "Location",
				F1_GIT_ID: "GitHub ID",
				F1_WEBSITE: "Website",
				F2_FOLLOWERS: "Followers",
				F2_FOLLWING: "Following",
				F2_BIO: "Bio",
			},
			HELP: {
				NO_MATCH: "No matching command found",
				DESC: "View commands in",
				CAT: "category",
				PLACEHOLDER: "Choose the command category",
				EDESC: "**About Me:**\n",
				EDESC1: "Hello I am ",
				EDESC2: "A cool multipurpose discord bot which can serve all your needs\n\n",
				EDESC3: "Invite Me",
				SUPP: "Support Server",
				FILTER: "**Available Filters:**\n",
				GENRATOR: "Available Generators",
				CMD: "Commands",
				NO_CMD: "No commands in this category",
				FDESC: "Description",
				FSUB: "SubCommands",
				BDESC: "\n\nYou can use these image commands in following formats\n",
				BDESC1: "Picks message authors avatar as image\n",
				BDESC2: "Picks mentioned members avatar as image\n",
				BDESC3: "Picks image from provided URL\n",
				BDESC4: "Picks attachment image",
			},
			SETLANG: {
				ERR: "language length cannot exceed `2` characters",
				DONE: "New User language is set to",
				NOT_SUP: "SORRY BUT I DIDN'T SUPPORT THIS LANGUAGE \n SUPPORTED LANGUAGES IS",
			},
			TRANSLATE: {
				ERR: "Invalid translation code. Visit ",
				ERR2: " to see list of supported translation codes",
				ERR3: "Provide some valid translation text",
				FAIL: "Failed to translate your text",
			},
			URBAN: {
				NOTHING: "Nothing found matching",
				DESC: "Definition",
				F1: "Author",
				F2: "ID",
				F3: "Likes / Dislikes",
				F4: "Example",
				F5: "Created",
			},
		},
	},
	CONTEXT: {
		AVATAR: {
			TITLE: "Avatar of",
			HEAD: "Links"
		},
	},
	EVENTS: {
		MESSAGE_EVENT: {
			MENTION_REPLY: "> My prefix is \`{prefix}\`",
			MAINTACE_MESSAGE: "Sorry But Am Maintance Now \n Just Admins Can Use `Interaction'S/Command's`",
			DM_REPLY: "SORRY BUT I CAN'T FIRE COMMANDS/INTERACTIONS AT DM CHANNELS YOU CAN FIRE IT AT GUILDS ONLY",
		},
	},
}