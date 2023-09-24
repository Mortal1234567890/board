import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header/Header';
// import Card from './components/Card/Card';
import DashView from './components/KanbanBoard/Board';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Buffer from './components/Buffer/Buffer';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <Header />
      <hr style={{ marginTop: "10px" }} />
      <DashView />
    </div>
  ) : <Buffer />
}

export default App