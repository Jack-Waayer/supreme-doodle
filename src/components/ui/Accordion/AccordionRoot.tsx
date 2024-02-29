import React, { Dispatch, SetStateAction } from 'react'

export const AccordionRootContext = React.createContext<{
  expandedId: string | number
  setExpandedId: Dispatch<SetStateAction<string | number>>
}>({
  expandedId: '',
  setExpandedId: () => {},
})
const AccordionRoot = ({ children }: { children: React.ReactNode }) => {
  const [expandedId, setExpandedId] = React.useState<string | number>('')
  return (
    <AccordionRootContext.Provider value={{ expandedId, setExpandedId }}>
      <ul>{children}</ul>
    </AccordionRootContext.Provider>
  )
}

export default AccordionRoot
