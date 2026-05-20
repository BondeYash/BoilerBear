import type { PackageManager, Plan } from '@boilerbear/core';
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const STEP_COUNT = 5;

export interface BuilderState {
  plan: Plan;
  step: number;
  setProjectName: (name: string) => void;
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

    setPM: (pm) => set((s) => ({ plan: { ...s.plan, packageManager: pm } })),

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
