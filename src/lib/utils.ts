type NotUndefined<T> = T extends undefined ? never : T;

export const removeUndefined = <K extends string | number | symbol, V>(
	obj: Record<K, V>
): Record<K, NotUndefined<V>> =>
	Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined)) as Record<
		K,
		NotUndefined<V>
	>;
