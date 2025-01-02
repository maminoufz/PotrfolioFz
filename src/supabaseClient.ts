
import { createClient ,SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ylxnarsehkproxfjzjmi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlseG5hcnNlaGtwcm94Zmp6am1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MDE1MDEsImV4cCI6MjA1MTE3NzUwMX0.nsGbwnbRz6yUlYZevrCCW0o2ofyvwcHjq-a1a-bZFoo'
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
export default supabase;