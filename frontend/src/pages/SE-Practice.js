import articles from "../dummydata/articles.js";
import Styles from "../components/TableStyles.js";
import Table from "../components/EvidenceTable.js";
import TableColumns from "../components/TableColumns.js";

const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
               <Styles>
                 <Table
                  data={articles}
                  columns={TableColumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  

