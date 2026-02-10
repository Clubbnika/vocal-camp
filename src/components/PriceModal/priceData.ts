export interface BasePlan {
  id: string;
  name: string;
  price: number;
}

export interface GroupPlan extends BasePlan {
  oldPrice: number;
}

export interface IndividualPlan extends BasePlan {
  label: string;
}

export const GROUP_PLANS: GroupPlan[] = [
  { id: 'group-12w', name: 'Курс 12 тижнів', price: 10000, oldPrice: 15000 },
  { id: 'group-1m', name: 'Місяць групових', price: 3500, oldPrice: 5000 },
];

export const INDIVIDUAL_PLANS = [
  {
    title: 'Вокальний майстер:',
    items: [
      { id: 'master-1h', name: '1 год — Вокальний майстер', label: '1 година індивідуального заняття', price: 1500 },
      { id: 'master-5', name: 'Абонемент 5 — Вокальний майстер', label: 'Абонемент на 5 індивідуальних занять', price: 7000 },
      { id: 'master-10', name: 'Абонемент 10 — Вокальний майстер', label: 'Абонемент на 10 індивідуальних занять', price: 10000 },
    ]
  },
  {
    title: 'Звичайний викладач:',
    items: [
      { id: 'regular-1h', name: '1 год — Звичайний викладач', label: '1 година індивідуального заняття', price: 1000 },
      { id: 'regular-5', name: 'Абонемент 5 — Звичайний викладач', label: 'Абонемент на 5 індивідуальних занять', price: 4500 },
      { id: 'regular-10', name: 'Абонемент 10 — Звичайний викладач', label: 'Абонемент на 10 індивідуальних занять', price: 7000 },
    ]
  }
];