import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Users } from '../../../test/mock';
import { ListSearchText } from '../../utils/constants';
import { Post, User } from '../../utils/model';
import ListSearch from './ListSearch';

describe('ListSearch', () => {

    let listItems: User[] | Post[]
    let displayField: string
    let onClick: Function

    let emptyText

    const setup = (listItems: User[] | Post[], displayField: string, onClick: Function) => {
        render(<ListSearch listItems={listItems} displayField={displayField}
            onClick={onClick} />)
    }

    beforeEach(() => {
        listItems = Users.slice(0, 3) // get a shallow copy of the array
        displayField = 'name'
        onClick = jest.fn()
    })

    // DISPLAYING
    it('should display list of items by display field', () => {
        setup(listItems, displayField, onClick)
        const listItem = screen.getByTestId('1').textContent
        expect(listItem).toBe(listItems[1][displayField]);
    })

    it('should display empty list text if listItems is undefined', () => {
        setup(undefined, displayField, onClick)
        emptyText = screen.getByText(ListSearchText.Empty);
        expect(emptyText).toBeInTheDocument();

        cleanup()

        setup(null, displayField, onClick)
        emptyText = screen.getByText(ListSearchText.Empty);
        expect(emptyText).toBeInTheDocument();
    })

    // EVENTS HANDLER
    describe('on click', () => {
        
        it('should trigger onClick handler with the right param', () => {
            setup(listItems, displayField, onClick)
            const listItem = screen.getByTestId('1')
            fireEvent.click(listItem)
            expect(onClick).toHaveBeenCalledWith(listItems[1])
        })

    })

    describe('on input', () => {

        it('should filter list as soon as user type something', () => {
            setup(listItems, displayField, onClick)
            const input = screen.getByTestId('input')
    
            fireEvent.input(input, { target: { value: 'a' } })
    
            expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
            expect(screen.getByText('Clementine Bauch')).toBeInTheDocument();
            expect(screen.queryByText('Ervin Howell')).toBeNull();
    
        })

        it('should filter list based on the whole input string value', () => {
            setup(listItems, displayField, onClick)
            const input = screen.getByTestId('input')
    
            fireEvent.input(input, { target: { value: 'Ervin' } })
    
            expect(screen.queryByText('Leanne Graham')).toBeNull();
            expect(screen.queryByText('Clementine Bauch')).toBeNull();
            expect(screen.queryByText('Ervin Howell')).toBeInTheDocument();
    
        })

    })


})