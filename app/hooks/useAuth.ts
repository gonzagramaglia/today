'use client'

import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'

export function useAuth() {
  const supabase = createClient()

  return { user: null as User | null, loading: false, supabase }
}
