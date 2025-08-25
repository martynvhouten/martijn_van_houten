type Props = { value: string; label: string };

export function StatChip({ value, label }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 shadow-elev-sm">
      <span className="text-sm font-medium">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}


