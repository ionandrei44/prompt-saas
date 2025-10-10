import { create } from "zustand";
import type { User, Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  initialized: boolean;
  signInWithGitHub: () => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  initialized: false,

  initialize: async () => {
    try {
      // Validate session with server - this will detect revoked/deleted users
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        await supabase.auth.signOut();
        set({
          session: null,
          user: null,
          loading: false,
          initialized: true,
        });
        return;
      }

      // Get the valid session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      set({
        session,
        user: session?.user ?? null,
        loading: false,
        initialized: true,
      });

      // Clean up URL hash after OAuth callback
      if (
        window.location.hash &&
        window.location.hash.includes("access_token")
      ) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange((_event, session) => {
        set({
          session,
          user: session?.user ?? null,
          loading: false,
        });

        // Clean up URL hash after auth state change
        if (
          window.location.hash &&
          window.location.hash.includes("access_token")
        ) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      });
    } catch (error) {
      console.error("Error initializing auth:", error);
      await supabase.auth.signOut();
      set({
        session: null,
        user: null,
        loading: false,
        initialized: true,
      });
    }
  },

  signInWithGitHub: async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
          scopes: "read:user",
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
      throw error;
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, session: null });
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  },
}));
