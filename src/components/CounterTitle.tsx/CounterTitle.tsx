type CounterTitleType ={
    title: number | string
    className?: string
}

export const CounterTitle = ({title, className}: CounterTitleType) => {
  return (
    <h1 className={className}>{title}</h1>
  )
}
