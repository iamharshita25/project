import './list.scss'
import Card from '../card/Card'
import {data} from '../../library/homedata'


function List(){
    return(
        <div className="list">
            {data.map(item=>(
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default List
