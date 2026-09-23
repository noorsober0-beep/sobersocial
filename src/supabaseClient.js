import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zyeddmxfbolbrmcjvjvc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5ZWRkbXhmYm9sYnJtY2p2anZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NzM3NjAsImV4cCI6MjEwNTA0OTc2MH0.ccVuLTOQtOmu-y9I4xCeW1b91dPGb3CRZfiooPGNiSc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
