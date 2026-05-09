export function Product({ title, price = "Consulte" }) {
  return (
    <article className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
      <div className="space-y-2">
        <h1 className="line-clamp-2 text-base font-semibold text-zinc-900">
          {title}
        </h1>

        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl font-bold text-emerald-700">
            {price}
          </h2>

          <button className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-zinc-700">
            Ver produto
          </button>
        </div>
      </div>
    </article>
  );
}
