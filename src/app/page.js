import Tree from "./components/tree/Tree"
import Control from "./components/control/Control"
import { Settings } from "./components/settings/Settings"

const page = () => {
  return (
    <>
    <div className="p-5 flex items-center justify-between h-screen">
    <Tree />
    <Control />
    <Settings />
    </div>
    </>
  )
}
export default page