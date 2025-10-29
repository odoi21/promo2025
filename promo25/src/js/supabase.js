// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://ujlbhnskejfyznknyymb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqbGJobnNrZWpmeXpua255eW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNTUxMDQsImV4cCI6MjA3NjczMTEwNH0.w_-caFIVD1qoPIgaHcX_Ci1LIGvxoLdKyUxGST2DEH8'
export const supabase = createClient(supabaseUrl, supabaseKey)