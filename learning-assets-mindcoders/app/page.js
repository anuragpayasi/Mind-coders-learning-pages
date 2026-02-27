import SelectorTablePage from "./components/SelectorTablePage"
import BoxModel from "./components/BoxModel"
import Properties from "./components/Properties"
import UnitsCss from "./components/UnitsCss"
import GridPropertiesTable from "./components/GridPropertiesTable"
import KeyframesTable from "./components/KeyFramesTable"




export default function SelectorTable() {
  return (
    <>
      <SelectorTablePage/>
      <UnitsCss/>
      <BoxModel/>
      <Properties/>
      <GridPropertiesTable/>
      <KeyframesTable/>
      
    </>
  );
}
