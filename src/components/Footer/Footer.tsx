import { FC, memo } from 'react';
import cn from 'classnames';
import { Filter } from '../../types/Filter';

interface Props {
  todosLength: number;
  onCompletedFilterChange: (str: Filter) => void;
  complitedFilter: Filter;
}

export const Footer: FC<Props> = memo(({
  todosLength,
  onCompletedFilterChange,
  complitedFilter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${todosLength} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={cn('filter__link',
            { selected: complitedFilter === Filter.all })}
          onClick={() => onCompletedFilterChange(Filter.all)}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={cn('filter__link',
            { selected: complitedFilter === Filter.active })}
          onClick={() => onCompletedFilterChange(Filter.active)}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={cn('filter__link',
            { selected: complitedFilter === Filter.completed })}
          onClick={() => onCompletedFilterChange(Filter.completed)}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
});
