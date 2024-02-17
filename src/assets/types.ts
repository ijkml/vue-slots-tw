type StatusColor = 'green' | 'yellow' | 'red' | (string & NonNullable<unknown>);

interface DataItem {
  name: string;
  image?: string;
  status: StatusColor;
  date?: number | null;
}

export type { StatusColor, DataItem };
