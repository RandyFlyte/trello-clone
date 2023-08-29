'use client';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import { useBoardStore } from '@/store/BoardStore';


export default function Board() {
  
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
  }, [getBoard])
  
  return (
    <h1>hello</h1>
    // <DragDropContext>
    //   <Droppable droppableId='board' direction='horizontal' type='column'>
    //     {(provided) => <div>rendering all the columns</div>}
    //   </Droppable>
    // </DragDropContext>
  )
}
