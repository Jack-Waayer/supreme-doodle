import React, { Dispatch, SetStateAction } from 'react'
import { AccordionRootContext } from './AccordionRoot'

export const AccordionItemContext = React.createContext<{
  id: string | number
  expanded: boolean
  setExpandedId: Dispatch<SetStateAction<string | number>>
}>({ id: '', expanded: false, setExpandedId: () => {} })

export type AccordionProps = {
  id: string | number
  children: React.ReactNode
}

const AccordionItem = ({ id, children }: AccordionProps) => {
  const rootCtx = React.useContext(AccordionRootContext)
  return (
    <AccordionItemContext.Provider
      value={{
        id,
        expanded: rootCtx.expandedId === id,
        setExpandedId: rootCtx.setExpandedId,
      }}
    >
      <li>{children}</li>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
