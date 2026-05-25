import { type Language, type PackageManager, type Plan, pmsForLanguage } from '@boilerbear/core';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const STEP_COUNT = 5;

/** Default framework + PM per language — fed to setLanguage when the user switches axis. */
const LANGUAGE_DEFAULTS: Record<Language, { base: string; packageManager: PackageManager }> = {
  js: { base: 'vite', packageManager: 'pnpm' },
  py: { base: 'fastapi', packageManager: 'uv' },
  go: { base: 'gin', packageManager: 'go' },
  rust: { base: 'axum', packageManager: 'cargo' },
};

export interface BuilderState {
  plan: Plan;
  step: number;
  setProjectName: (name: string) => void;
  setLanguage: (lang: Language) => void;
  setPM: (pm: PackageManager) => void;
  setBase: (id: string) => void;
  toggleModule: (id: string) => void;
  setOption: (moduleId: string, key: string, value: unknown) => void;
  loadPlan: (plan: Plan) => void;
  goToStep: (n: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const initialPlan: Plan = {
  v: 1,
  projectName: 'my-app',
  language: 'js',
  packageManager: 'pnpm',
  base: 'vite',
  modules: [],
  options: {},
};

export const useBuilder = create<BuilderState>()(
  subscribeWithSelector((set) => ({
    plan: initialPlan,
    step: 0,

    setProjectName: (name) => set((s) => ({ plan: { ...s.plan, projectName: name } })),

    setLanguage: (lang) =>
      set((s) => {
        if (s.plan.language === lang) return s;
        const defaults = LANGUAGE_DEFAULTS[lang];
        // Switching language clears base + modules — a Vite + Python plan is incoherent.
        return {
          plan: {
            ...s.plan,
            language: lang,
            base: defaults.base,
            packageManager: defaults.packageManager,
            modules: [],
            options: {},
          },
        };
      }),

    setPM: (pm) =>
      set((s) => {
        // Guard: keep PM inside the current language's valid set.
        const allowed = pmsForLanguage(s.plan.language);
        if (!allowed.includes(pm)) return s;
        return { plan: { ...s.plan, packageManager: pm } };
      }),

    setBase: (id) =>
      set((s) => {
        const modules = s.plan.modules.filter((m) => m !== id);
        return { plan: { ...s.plan, base: id, modules } };
      }),

    toggleModule: (id) =>
      set((s) => {
        if (id === s.plan.base) return s;
        const has = s.plan.modules.includes(id);
        const modules = has ? s.plan.modules.filter((m) => m !== id) : [...s.plan.modules, id];
        return { plan: { ...s.plan, modules } };
      }),

    setOption: (moduleId, key, value) =>
      set((s) => ({
        plan: {
          ...s.plan,
          options: {
            ...s.plan.options,
            [moduleId]: { ...(s.plan.options[moduleId] ?? {}), [key]: value },
          },
        },
      })),

    loadPlan: (plan) => set({ plan }),

    goToStep: (n) => set(() => ({ step: Math.max(0, Math.min(STEP_COUNT - 1, n)) })),

    nextStep: () => set((s) => ({ step: Math.min(STEP_COUNT - 1, s.step + 1) })),

    prevStep: () => set((s) => ({ step: Math.max(0, s.step - 1) })),
  })),
);
