import './listpro.scss'
import ListProfile from "../../component/ListProfile/ListProfile"
import {data} from '../../library/homedata'


function List(){
    return(
        <div className="list">
            {data.map(item=>(
                <ListProfile key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default List