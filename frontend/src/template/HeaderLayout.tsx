import { FC, memo, ReactNode } from "react";
import { BeforeLoginHeader } from "../components/organisms/headers/BeforeLoginHeader";
type Props = {
  children: ReactNode;
}

export const HeaderLayout: FC<Props>  = memo((props) => {
const { children } = props
return (
  <>
    <BeforeLoginHeader />
    { children }
  </>
)
})