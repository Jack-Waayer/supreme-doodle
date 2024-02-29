import { cn } from '@/lib/utils'
import * as React from 'react'
import { AccordionItemContext } from './AccordionItem'

export type AccordionProps = {
  children?: React.ReactNode
  className?: string
}
const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionProps) => {
  const itemCtx = React.useContext(AccordionItemContext)

  return (
    <section
      id={`${itemCtx.id}-accordion-content`}
      className={cn('w-full px-4 py-2', className)}
      hidden={!itemCtx.expanded}
      aria-labelledby={`${itemCtx.id}-accordion-trigger`}
      {...props}
    >
      {children}
    </section>
  )
}

export default AccordionContent
