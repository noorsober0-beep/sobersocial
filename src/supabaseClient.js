import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pqlsgzppsmkwhiaitilk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbHNnenBwc21rd2hpYWl0aWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwOTMwNTQsImV4cCI6MjEwMTY2OTA1NH0.sKNRAXbTm-bncKiUgmoFiNJhTu2yynKxpvaamMd4yhI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)