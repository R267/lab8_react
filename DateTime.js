import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDate } from '../redux/reducers/dateReducer';

const DateTime = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector((state) => new Date(state.date.currentDate)); 

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateDate());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <CurrentDate date={currentDate} />
      <CurrentTime date={currentDate} />
    </div>
  );
};

const CurrentDate = ({ date }) => (
  <p>{date.toLocaleDateString('uk-UA', { weekday: 'short', day: 'numeric', month: 'long', year: '2-digit' })}</p>
);

const CurrentTime = ({ date }) => (
  <p>{date.toLocaleTimeString()}</p>
);

export default DateTime;