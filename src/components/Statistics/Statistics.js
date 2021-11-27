import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomIntegerFromInterval from '../RandomColor/RandomColor';

function Statistics({ title, stats, colors }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s['stat-list']}>
        {stats.map(item => (
          <li
            key={item.id}
            className={s.item}
            style={{
              backgroundColor:
                colors[randomIntegerFromInterval(0, colors.length - 1)],
            }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
