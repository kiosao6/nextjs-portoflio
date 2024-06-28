
interface Props {
  title: string;
  children: React.ReactNode;
}

export const TitleWithText = ({
  title,
  children
}: Props) => {
  return (
    <div className="mt-12 mb-6">
      <h2 className="text-2xl font-medium tracking-tighter mb-4">{title}</h2>
      <div className="space-y-4 tracking-tight leading-7 text-[15px] text-neutral-600">
        {
          children
        }
      </div>
    </div>
  )
}