// Cifras reales del producto (Supabase snapshot, abril 2026).
// Fuente: SELECT count() en tablas messages, contacts, conversations, businesses.
// Refrescar cada cierto tiempo manualmente; no son live.

export const STATS = {
  messagesTotal: 477_985,
  messagesMonth: 72_980,
  aiRepliesTotal: 22_288,
  aiRepliesMonth: 7_722,
  contactsTotal: 97_205,
  conversationsTotal: 43_662,
  businessesTotal: 42,
  businessesActiveMonth: 20,
  broadcastRecipients: 11_968,
  avgAiReplySeconds: 30,
} as const

export const formatCompact = (value: number): string => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  if (value >= 1_000) return `${Math.round(value / 1_000)}K`
  return value.toString()
}

export const STATS_DISPLAY = {
  messages: `+${formatCompact(STATS.messagesTotal)}`,
  aiReplies: `+${formatCompact(STATS.aiRepliesTotal)}`,
  contacts: `${formatCompact(STATS.contactsTotal)}`,
  meta: 'Meta Cloud API',
} as const
