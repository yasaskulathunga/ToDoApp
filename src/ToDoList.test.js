import React from 'react'
import { render } from '@testing-library/react'
import ToDoList from './ToDoList'

describe('ToDoList', () => {
    it('should be trueg', () => {
       const foo =true;
       expect(foo).toBe(true);
    });
    it('should be false', ()=> {
        const foo =true;
        expect(foo).toBe(false);
    })
})