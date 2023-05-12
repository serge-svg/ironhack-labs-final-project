import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jpqjewerbvnxxpmxhwst.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwcWpld2VyYnZueHhwbXhod3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjk4MDYsImV4cCI6MTk5NjgwNTgwNn0.pXr7NrAWoyE66am0oi7ZTy3_ko8rDXuk_KX0DMK8r94'

export default createClient(supabaseUrl, supabaseKey)
