import FormSearch from './components/formSearch';
import TableList from './components/tableList';
import './index.scss';
function ProjectList(params) {
    return (
        <>
            <div>
                <FormSearch></FormSearch>
                <TableList></TableList>
            </div>
        </>
    );
}
export default ProjectList;
