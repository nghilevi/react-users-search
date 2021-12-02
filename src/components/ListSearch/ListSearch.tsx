import { ListSearchText } from '../../utils/constants'
import './ListSearch.scss'

interface ListSearchProps {
    listItems: any[],
    displayField: string,
    onClick?: Function,
    onSearch?: Function
}

function ListSearch({ listItems, displayField, onClick, onSearch }: ListSearchProps) {

    const onInput = (e: any) => {
        const filterString = e.target.value
        if (typeof onSearch === 'function') {
            onSearch(filterString)
        }
    }

    const onItemClick = (item: any) => {
        if (typeof onClick === 'function') {
            onClick(item)
        }
    }

    const renderList = () => {
        if(listItems.length === 0){
            return <>{ListSearchText.Empty}</>
        }else{
            return <>
                <input type="text" onInput={(e) => onInput(e)} />
                <ul className="items-list">
                    {
                         
                        listItems
                            .map((item, key: number) =>
                                <li key={key} onClick={(e) => { onItemClick(item) }}>
                                    {item[displayField]}
                                </li>
                            )
                    }
                </ul> 
            </>
        }
    }

    return (
        <div className="list-search">
            { renderList() }
        </div>
    );
}

export default ListSearch;
