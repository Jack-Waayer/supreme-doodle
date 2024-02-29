import { cn } from '@/lib/utils'
import * as React from 'react'
import { AccordionItemContext } from './AccordionItem'
import { ChevronDown, ChevronsUp } from 'lucide-react'

export type AccordionProps = {
  children: React.ReactNode
  className?: string
}
const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionProps) => {
  const itemCtx = React.useContext(AccordionItemContext)

  return (
    <button
      id={`${itemCtx.id}-accordion-trigger`}
      type='button'
      aria-controls={`${itemCtx.id}-accordion-content`}
      aria-expanded={itemCtx.expanded}
      className={cn(
        'flex border-2 border-green-300 w-full px-4 py-2',
        className
      )}
      {...props}
      onClick={() => {
        itemCtx.setExpandedId((prev) => (prev === itemCtx.id ? '' : itemCtx.id))
      }}
    >
      {children}
      {itemCtx.expanded ? <ChevronsUp /> : <ChevronDown />}
    </button>
  )
}

export default AccordionTrigger
