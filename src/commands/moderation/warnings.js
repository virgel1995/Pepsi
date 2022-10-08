const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const { getWarningLogs, clearWarningLogs } = require("@schemas/ModLog");
const { getMember } = require("@schemas/Member");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "warnings",
  description: "list or clear user warnings",
  category: "MODERATION",
  userPermissions: ["KickMembers"],
  command: {
    enabled: true,
    minArgsCount: 1,
    subcommands: [
      {
        trigger: "list [member]",
        description: "list all warnings for a user",
      },
      {
        trigger: "clear <member>",
        description: "clear all warnings for a user",
      },
    ],
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "list",
        description: "list all warnings for a user",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "user",
            description: "the target member",
            type: ApplicationCommandOptionType.User,
            required: true,
          },
        ],
      },
      {
        name: "clear",
        description: "clear all warnings for a user",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "user",
            description: "the target member",
            type: ApplicationCommandOptionType.User,
            required: true,
          },
        ],
      },
    ],
  },

  async messageRun(message, args, data) {
    const sub = args[0]?.toLowerCase();
    let response = "";

    if (sub === "list") {
      const target = (await message.guild.resolveMember(args[1], true)) || message.member;
      if (!target) return message.safeReply(`No user found matching ${args[1]}`);
      response = await listWarnings(target, message, data.lang);
    }

    //
    else if (sub === "clear") {
      const target = await message.guild.resolveMember(args[1], true);
      if (!target) return message.safeReply(`No user found matching ${args[1]}`);
      response = await clearWarnings(target, message, data.lang);
    }

    // else
    else {
      response = `Invalid subcommand ${sub}`;
    }

    await message.safeReply(response);
  },

  async interactionRun(interaction, data) {
    const sub = interaction.options.getSubcommand();
    let response = "";

    if (sub === "list") {
      const user = interaction.options.getUser("user");
      const target = (await interaction.guild.members.fetch(user.id)) || interaction.member;
      response = await listWarnings(target, interaction, data.lang);
    }

    //
    else if (sub === "clear") {
      const user = interaction.options.getUser("user");
      const target = await interaction.guild.members.fetch(user.id);
      response = await clearWarnings(target, interaction, data.lang);
    }

    // else
    else {
      response = `Invalid subcommand ${sub}`;
    }

    await interaction.followUp(response);
  },
};

async function listWarnings(target, { guildId }, lang) {
  if (!target) return "No user provided";
  if (target.user.bot) return "Bots don't have warnings";

  const warnings = await getWarningLogs(guildId, target.id);
  if (!warnings.length) return `${target.user.tag} has no warnings`;

  const acc = warnings.map((warning, i) => `${i + 1}. ${warning.reason} [By ${warning.admin.tag}]`).join("\n");
  const embed = new EmbedBuilder({
    author: { name: `${target.user.tag}'s warnings` },
    description: acc,
  });

  return { embeds: [embed] };
}

async function clearWarnings(target, { guildId }, lang) {
  if (!target) return "No user provided";
  if (target.user.bot) return "Bots don't have warnings";

  const memberDb = await getMember(guildId, target.id);
  memberDb.warnings = 0;
  await memberDb.save();

  await clearWarningLogs(guildId, target.id);
  return `${target.user.tag}'s warnings have been cleared`;
}
