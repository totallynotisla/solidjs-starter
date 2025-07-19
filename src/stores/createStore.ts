import { createEffect, createRoot } from "solid-js";
import { createStore } from "solid-js/store";

export function createStorage<T extends Object>(key: string, initValue: T) {
	return createRoot(() => {
		const localStorageValue = localStorage.getItem(key) || JSON.stringify(initValue);
		const [store, setStore] = createStore<T>(localStorageValue ? JSON.parse(localStorageValue) : initValue);

		createEffect(() => {
			localStorage.setItem(key, JSON.stringify(store));
		});

		return [store, setStore] as const;
	});
}
