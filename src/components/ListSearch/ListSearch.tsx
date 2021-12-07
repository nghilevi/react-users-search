import { useState } from 'react'
import { ListSearchText } from '../../utils/constants'
import { Post, User } from '../../utils/model'
import { lowerString } from '../../utils/utils'
import './ListSearch.scss'

interface ListSearchProps {
    listItems: User[] | Post[],
    displayField: string,
    onClick?: Function
}

function ListSearch({ listItems, displayField, onClick }: ListSearchProps) {

    const [filterStr, setFilterStr] = useState<string>('')

    const onInput = (e: any) => {
        setFilterStr(e.target.value)
    }

    const onItemClick = (item: any) => {
        if (typeof onClick === 'function') {
            onClick(item)
        }
    }

    const renderList = () => {

        if (!listItems) {
            return <>{ListSearchText.Empty}</>
        } else {
            return <>
                <input data-testid='input' type="text" onInput={(e) => onInput(e)} />
                <ul className="items-list">
                    {

                        listItems
                            .filter((item) => lowerString(item[displayField]).indexOf(lowerString(filterStr)) > -1)
                            .map((item, key: number) =>
                                <li data-testid={key} key={key} onClick={(e) => { onItemClick(item) }}>
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
            {renderList()}
        </div>
    );
}

export default ListSearch;
