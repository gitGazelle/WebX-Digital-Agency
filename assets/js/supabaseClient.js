import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tfxtwsejyimjnlisvpew.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmeHR3c2VqeWltam5saXN2cGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MTQxNjksImV4cCI6MjA0NzA5MDE2OX0.JEtWokouJMPQEEcn8U9sNB2D-YV4bPqv2kRD5ZefHmo"
export const supabase = createClient(supabaseUrl, supabaseKey);
