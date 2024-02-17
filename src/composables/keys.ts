import type { InjectionKey } from 'vue';

export interface DropdownUtils { closeMenu: () => void };

export const dropdownKey = Symbol('dropdown-utils') as InjectionKey<DropdownUtils>;
